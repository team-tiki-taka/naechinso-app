import {MatchingCard} from '@models/MatchingCard';
import {ServerResponse} from '@models/ServerResponse';
import {User} from '@models/User';
import {mainRequester} from '@remotes/requester';

export async function fetchMatchingProfile(id: number) {
  const res = await mainRequester.get<ServerResponse<MatchingCard>>(
    `/match/${id}/profile`,
  );
  return res.data.data;
}
