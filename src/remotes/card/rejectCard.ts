import {mainRequester} from '@remotes/requester';

/**
 * 현재 매칭중인 카드를 reject한다
 */
export async function rejectCard() {
  await mainRequester.post('/card/reject');
}
