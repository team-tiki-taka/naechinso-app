import {MatchingCard} from '@models/MatchingCard';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

/**
 * 호감 전달한 카드 목록
 */
export async function fetchCompleteMatches() {
  const res = await mainRequester.get<ServerResponse<MatchingCard[]>>(
    '/match/complete',
  );
  return res.data.data;
}
