import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';
import {MatchingCard} from '../../models/MatchingCard';

export async function fetchMatchingCards() {
  try {
    const res = await mainRequester.get<ServerResponse<MatchingCard[]>>(
      '/card',
    );
    return res.data.data;
  } catch {
    return [];
  }
}
