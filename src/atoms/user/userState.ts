import {User} from '@models/User';
import {fetchCurrentUser} from '@remotes/user';
import {atom, selector} from 'recoil';
import {triggerState} from '../common';

export const userAtomState = atom<User | undefined>({
  key: '@auth/me-atom',
  default: undefined,
});

export const userState = selector<User | undefined>({
  key: '@auth/me',
  get: async ({get}) => {
    get(triggerState('@auth/me'));
    const fromAtom = get(userAtomState);
    if (fromAtom) {
      return fromAtom;
    }
    const user = await fetchCurrentUser();
    if (!user) {
      return;
    }
    return user;
  },
  set: ({set}, value) => {
    if (value) {
      set(userAtomState, value);
    }
    set(userAtomState, undefined);
    set(triggerState('@auth/me'), Date.now());
  },
});
