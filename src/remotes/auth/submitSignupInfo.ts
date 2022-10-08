import {mainRequester} from '@remotes/requester';

export async function submitSignupInfo() {
  await mainRequester.post('/member/join', {
    address: '서울시 강남구',
    drink: 'string',
    eduLevel: '대학교',
    height: 180,
    hobby: 'string',
    introduce: 'string',
    major: '컴퓨터공학과',
    mbti: 'ESTJ',
    personality: 'string',
    picture: 'string',
    religion: 'string',
    school: '서울',
    smoke: 'string',
    style: 'string',
  });
}
