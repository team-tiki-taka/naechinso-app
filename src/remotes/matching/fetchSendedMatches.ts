import {MatchingCard} from '@models/MatchingCard';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

/**
 * 호감 전달한 카드 목록
 */
export async function fetchSendedMatches() {
  const res = await mainRequester.get<ServerResponse<MatchingCard[]>>(
    '/match/send',
  );
  return res.data.data;
}
