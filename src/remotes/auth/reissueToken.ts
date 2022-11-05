import {ServerResponse} from '@models/ServerResponse';
import {setAccessToken, setRefreshToken} from '@remotes/access-token';
import {mainRequester} from '@remotes/requester';

export async function reissueToken() {
  const res = await mainRequester.post<ServerResponse<Payload>>(
    '/member/reissue',
  );
  const data = res.data.data;
  await setAccessToken(data.accessToken);
  await setRefreshToken(data.refreshToken);
  return res.data.data;
}

interface Payload {
  accessToken: string;
  refreshToken: string;
  isActive: true;
  isBanned: false;
}
