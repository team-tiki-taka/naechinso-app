import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';
import {assertAxiosError} from '@utils/assertAxiosError';

export async function acceptRecommend(
  uuid: string,
  data: AcceptRecommendPayload,
) {
  try {
    const res = await mainRequester.patch<ServerResponse>(
      `/recommend/${uuid}/accept`,
      data,
    );
    return res.data.data;
  } catch (e) {
    assertAxiosError(e);
    console.log(e.response.data);
    throw e;
  }
}

export interface AcceptRecommendPayload {
  appeals: string[];
  appealDetail: string;
  meet: string;
  period: string;
}
