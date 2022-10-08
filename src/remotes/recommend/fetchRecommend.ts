import {Recommend} from '@models/Recommend';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

// 해당 UUID를 가진 추천사 정보를 가져온다
export async function fetchRecommend(uuid: string) {
  const res = await mainRequester.get<ServerResponse<Recommend>>(
    `/recommend/${uuid}`,
  );
  return res.data.data;
}
