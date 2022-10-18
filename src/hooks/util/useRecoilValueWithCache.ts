import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {useQuery} from 'react-query';
import {Loadable, RecoilValue, useRecoilValueLoadable} from 'recoil';
import {isJson, parseJson} from '../../utils/parseJson';

function useRecoilValueWithPersist<T>(
  recoilValue: RecoilValue<T>,
  loadable: Loadable<T>,
  use?: boolean,
) {
  const key = `recoil-persist-${recoilValue.key}`.replace(/[^a-zA-Z_-]/g, '');
  const query = useQuery(
    key,
    async () => {
      const rawData = await AsyncStorage.getItem(key);
      if (rawData != null && isJson(rawData)) {
        return parseJson<T>(rawData);
      }
    },
    {suspense: true},
  );

  useEffect(() => {
    const isLoaded = loadable.state === 'hasValue';
    if (!isLoaded || !use) {
      return;
    }
    if (loadable.contents != null) {
      AsyncStorage.setItem(key, JSON.stringify(loadable.contents));
    } else {
      AsyncStorage.removeItem(key);
    }
    query.refetch();
  }, [loadable.state, use]);
  return query.data;
}

export function useRecoilValueWithCache<T>(
  recoilValue: RecoilValue<T>,
  persist: boolean = true,
  defaultValue?: T,
) {
  const loadable = useRecoilValueLoadable(recoilValue);
  const persistedValue = useRecoilValueWithPersist(
    recoilValue,
    loadable,
    persist,
  );
  const isLoaded = loadable.state === 'hasValue';
  const hasError = loadable.state === 'hasError';
  if (isLoaded) {
    return loadable.contents;
  }
  if (persistedValue != null) {
    return persistedValue;
  }
  if (hasError && defaultValue !== undefined) {
    return defaultValue;
  }
  throw loadable.contents;
}
