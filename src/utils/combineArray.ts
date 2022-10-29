import {flatMap} from 'lodash';
import {Falsy} from 'react-native';

export function combineArray<T>(...data: Array<Array<T | Falsy> | T | Falsy>) {
  return flatMap(data).filter(i => !!i) as T[];
}
