import {Recommend} from '@models/Recommend';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

// 내 추천사 정보를 가져온다
export async function fetchMyRecommend() {
  try {
    const res = await mainRequester.get<ServerResponse<MyRecommend>>(
      '/recommend',
    );
    return res.data.data;
  } catch {
    return {recommend: [], recommendReceived: []};
  }
}

export interface MyRecommend {
  recommend: Recommend[];
  recommendReceived: Recommend[];
}
