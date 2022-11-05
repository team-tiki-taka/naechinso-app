import {Gender} from '@models/Gender';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

// 다른 유저에게 추천서 작성을 요청한다 (AccessToken)
export async function requestRecommend() {
  const res = await mainRequester.post<ServerResponse<RequestRecommendResult>>(
    '/recommend/request',
  );
  return res.data.data;
}

export interface RequestRecommendResult {
  uuid: string;
  phone: string;
  name: string;
  gender: Gender;
  receiverId: number;
}
