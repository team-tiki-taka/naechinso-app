import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

// 다른 유저에게 추천서 작성을 요청한다 (AccessToken)
export async function requestRecommend(data: RequestRecommendPayload) {
  const res = await mainRequester.post<ServerResponse>(
    '/recommend/request',
    data,
  );
  return res.data.success;
}
export interface RequestRecommendPayload {
  appeal: string;
  gender: 'M' | 'W';
  meet: string;
  name: string;
  period: string;
  phone: string;
  receiverId: number;
  senderId: number;
  uuid: string;
}
