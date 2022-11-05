import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

export async function acceptRecommend(
  uuid: string,
  data: AcceptRecommendPayload,
) {
  const res = await mainRequester.post<ServerResponse>(
    `/recommend/${uuid}/accept`,
    data,
  );
  return res.data.data;
}

export interface AcceptRecommendPayload {
  appeal: string;
  meet: string;
  period: string;
  personality: string;
}
