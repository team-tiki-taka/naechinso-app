import {ServerResponse} from '@models/ServerResponse';
import {
  clearAccessToken,
  clearRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '@remotes/access-token';
import {mainRequester} from '@remotes/requester';
import {assertAxiosError} from '@utils/assertAxiosError';

export async function reissueToken() {
  try {
    const res = await mainRequester.post<ServerResponse<Payload>>(
      '/member/reissue',
    );
    const data = res.data.data;
    await setAccessToken(data.accessToken);
    await setRefreshToken(data.refreshToken);
    return res.data.data;
  } catch (e) {
    assertAxiosError(e);
    if (e.response?.status === 401) {
      clearAccessToken();
      clearRefreshToken();
    }
    throw e;
  }
}

interface Payload {
  accessToken: string;
  refreshToken: string;
  isActive: true;
  isBanned: false;
}
