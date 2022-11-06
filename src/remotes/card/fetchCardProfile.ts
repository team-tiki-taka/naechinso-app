import {ServerResponse} from '@models/ServerResponse';
import {User} from '@models/User';
import {mainRequester} from '@remotes/requester';

export async function fetchCardProfile() {
  const res = await mainRequester.get<ServerResponse<User>>('/card/profile');
  return res.data.data;
}
