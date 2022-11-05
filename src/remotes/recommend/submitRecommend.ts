import {Gender} from '@models/Gender';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

// 다른 유저의 추천사를 작성한다
export async function submitRecommend(data: SubmitRecommendPayload) {
  const res = await mainRequester.post<ServerResponse>('/recommend', data);
  if (!res.data.success) {
    throw new Error();
  }
}

export interface SubmitRecommendPayload {
  age: number;
  appeals: string[];
  appealDetail: string;
  gender: Gender;
  meet: string;
  name: string;
  period: string;
  phone: string;
}
