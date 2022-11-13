import {mainRequester} from '@remotes/requester';

/**
 * 호감 요청 받은 매칭을 거절한다
 */
export async function rejectReceivedMatch(id: number) {
  const res = await mainRequester.post(`/match/${id}/accept`);
  return res;
}
