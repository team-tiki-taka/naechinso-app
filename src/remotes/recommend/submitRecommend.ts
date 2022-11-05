import {Gender} from '@models/Gender';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

// 다른 유저의 추천사를 작성한다
export async function submitRecommend(data: SubmitRecommendPayload) {
  try {
    const res = await mainRequester.post<ServerResponse>('/recommend', {
      ...data,
      phone: data.phone.replace(/[^0-9]/g, ''),
    });
    if (!res.data.success) {
      throw new Error();
    }
  } catch (e) {
    console.log(e.response.data);
    console.error(e.response.data);
    throw e;
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
