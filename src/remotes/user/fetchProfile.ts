import {mainRequester} from '@remotes/requester';
import {ProfileOfOther} from '../../models/ProfileOfOther';

export async function fetchProfile(id: string) {
  const res = await mainRequester.get<ProfileOfOther>(`/member/${id}/profile`);
  return res.data;
}
