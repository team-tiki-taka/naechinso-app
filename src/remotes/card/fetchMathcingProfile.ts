import {ServerResponse} from '@models/ServerResponse';
import {User} from '@models/User';
import {mainRequester} from '@remotes/requester';

export async function fetchMatchingProfile(id: number) {
  const res = await mainRequester.get<ServerResponse<User>>(
    `/match/${id}/profile`,
  );
  return res.data.data;
}
