/**
 * 번호 오픈을 사용한 고유 아이디 유저의 프로필 정보를 가져온다 (AccessToken)
 */

import {MatchingCard} from '@models/MatchingCard';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

export async function fetchOpenedPhoneProfileMatch(targetMemberId: number) {
  const res = await mainRequester.get<ServerResponse<MatchingCard>>(
    `/match/${targetMemberId}/profile/open`,
  );
  console.log('번호 오픈한 상대의 정보');
  return res.data;
}
