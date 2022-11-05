import {mainRequester} from '@remotes/requester';

export async function getNewCard() {
  await mainRequester.post('/card');
}
