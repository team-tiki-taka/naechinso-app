import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

export async function acceptRecommend(uuid: string) {
  const res = await mainRequester.post<ServerResponse<AcceptRecommendPayload>>(
    `/recommend/${uuid}/accept`,
  );
  return res.data.data;
}

export interface AcceptRecommendPayload {
  appeal: string;
  meet: string;
  period: string;
  personality: string;
}
