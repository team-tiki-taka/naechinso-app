import {MatchStatus} from '@models/MatchStatusType';
import {mainRequester} from '@remotes/requester';

/**
 * /match/{id}/open
 */
export async function requestOpenPhone(id: number) {
  const res = await mainRequester.post(`/match/${id}/open`);
  const data: {
    id: number;
    status: MatchStatus;
    targetMemberId: number;
  } = res.data;
  console.log('번호 오픈! ', data);
  return data;
}

/*
"id": 36,
"status": "OPEN",
"targetMemberId": 4
*/
