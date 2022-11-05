import {mainRequester} from '@remotes/requester';
import {assertAxiosError} from '@utils/assertAxiosError';
import {ServerResponse} from '../../models/ServerResponse';
import {User} from '../../models/User';

export async function fetchCurrentUser() {
  try {
    const res = await mainRequester.get<ServerResponse<User>>('/member');
    const res2 = await mainRequester.get<ServerResponse<User>>(
      '/member/detail',
    );
    return {...res.data.data, ...res2.data.data};
  } catch (e) {
    assertAxiosError(e);
    if (e.response?.status === 401) {
      return;
    }
  }
}
