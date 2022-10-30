import {mainRequester} from '@remotes/requester';

/**
 * 현재 매칭중인 카드를 resolve 한다
 */
export async function resolveCard() {
  await mainRequester.post('/card/like');
}
