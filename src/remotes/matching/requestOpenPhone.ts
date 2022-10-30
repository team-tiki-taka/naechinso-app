import {mainRequester} from '@remotes/requester';

/**
 * 호감 요청 받은 매칭을 수락한다
 */
export async function requestOpenPhone(id: string) {
  await mainRequester.post(`/match/${id}/open`);
}
