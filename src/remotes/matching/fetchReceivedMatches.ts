import {InProgressMatchingItem} from '@models/InProgressMatchingItem';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

/**
 * 호감 받은 카드 목록
 */
export async function fetchReceivedMatches() {
  try {
    const res = await mainRequester.get<
      ServerResponse<InProgressMatchingItem[]>
    >('/match/receive');
    return res.data.data;
  } catch {
    return [];
  }
}
