import {MatchingCard} from '@models/MatchingCard';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

/**
 * 호감 받은 카드 목록
 */
export async function fetchReceivedMatches() {
  const res = await mainRequester.get<ServerResponse<MatchingCard[]>>(
    '/match/receive',
  );
  return res.data.data;
}
