import {Recommend} from './Recommend';
import {User} from './User';

export interface MatchingCard extends User {
  targetMemberId: number;
  recommend: Recommend;
  isActive: boolean;
  image: string;
}

// match/send

// {
//   "id": 137,
//   "targetMemberId": 99,
//   "status": "PENDING",
//   "createdAt": "2022-11-07T07:26:33.438659",
//   "dueDate": 3,
//   "image": "profile-001-01.png",
//   "name": "민*진",
//   "age": 1997,
//   "address": "서울시 마포구",
//   "gender": "M",
//   "jobName": null,
//   "jobPart": null,
//   "jobLocation": null,
//   "eduName": "한국",
//   "eduMajor": "자동차정비",
//   "eduLevel": "고등학교",
//   "recommend": {
//     "name": "노*닉",
//     "gender": "M",
//     "appeals": [
//       "패션센스 🧥",
//       "사랑꾼 💗",
//       "애교쟁이 😘"
//     ],
//     "jobName": null,
//     "jobPart": null,
//     "jobLocation": null,
//     "eduName": "홍익",
//     "eduMajor": "컴퓨터공학과",
//     "eduLevel": "대학교"
//   }
// }

// /match/{memberId}/profile

// {
//   "timestamp": "2022-11-07T07:42:47.328803626",
//   "status": 200,
//   "success": true,
//   "data": {
//     "images": [
//       "profile-001-01.png",
//       "profile-001-02.png",
//       "profile-001-03.png"
//     ],
//     "name": "진*수",
//     "age": 1998,
//     "address": "서울시 마포구",
//     "gender": "W",
//     "jobName": null,
//     "jobPart": null,
//     "jobLocation": null,
//     "eduName": "연세",
//     "eduMajor": "기계공학과",
//     "eduLevel": "대학교",
//     "personalities": [
//       "열정적인 🔥",
//       "지적인 🧐",
//       "상냥한 ☺️"
//     ],
//     "religion": "무교",
//     "height": 163,
//     "smoke": "비흡연자",
//     "drink": "1병",
//     "hobby": "내친소 사용하기",
//     "style": "같이 취미를 즐길 수 있는 연애를 하고 싶어",
//     "introduce": "반갑습니다 내친소 여러분!",
//     "mbti": "ESTJ",
//     "recommend": {
//       "name": "노*닉",
//       "gender": "M",
//       "appeals": [
//         "패션센스 🧥",
//         "사랑꾼 💗",
//         "애교쟁이 😘"
//       ],
//       "jobName": null,
//       "jobPart": null,
//       "jobLocation": null,
//       "eduName": "홍익",
//       "eduMajor": "컴퓨터공학과",
//       "eduLevel": "대학교",
//       "meet": "CMC에서 만남",
//       "period": "1~3년",
//       "appealDetail": "자기 일을 진짜 책임감 있게 잘하고 주변을 늘 먼저 생각하는 친구야"
//     }
//   }
// }
