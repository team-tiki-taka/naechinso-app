import {mainRequester} from '@remotes/requester';

/**
 * 호감 요청 받은 매칭을 수락한다
 */
export async function acceptMatch(id: number) {
  const res = await mainRequester.post(`/match/${id}/accept`);
  return res;
}
