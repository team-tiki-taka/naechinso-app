import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';
import {Recommend} from '../../models/Recommend';

// 내 추천사 정보를 가져온다
export async function fetchMyRecommend() {
  const res = await mainRequester.get<ServerResponse<MyRecommend>>(
    '/recommend',
  );
  return res.data.data;
}

interface MyRecommend {
  recommend: Recommend[];
  recommendReceived: Recommend[];
}
