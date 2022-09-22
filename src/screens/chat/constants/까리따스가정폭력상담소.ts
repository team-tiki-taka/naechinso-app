import {ChatData} from '../ChatData';

export const 까리따스가정폭력상담소_PROFILE_SEED = 'jiii';

export const 까리따스가정폭력상담소_CHAT_DATA: ChatData[] = [
  {
    id: 'initial',
    type: 'initial',
    data: [
      [{type: 'text', text: '안녕하세요! 내친소 입니다👋'}],
      [
        {
          type: 'text',
          text: '가나다라 마바사 아자차카 타파하',
        },
      ],
    ],
  },
  {
    id: 'intro',
    type: 'normal',
    require: ['initial'],
    actionText: '네, 좋아요!',
    data: [
      [
        {
          type: 'text',
          text: '아야어여오오유 가나다라 마바사',
        },
      ],
      [
        {
          type: 'text',
          text: '아이이오우 가나다라 아이유 좋아요',
        },
      ],
    ],
  },
  {
    id: 'how',
    type: 'normal',
    require: ['intro'],
    actionText: '어떻게 도와주나요?',
    data: [
      [
        {
          type: 'text',
          text: '가나다라 마바사 334141',
        },
      ],
      [
        {
          type: 'text',
          text: '1124124124124',
        },
      ],
      [
        {
          type: 'text',
          text: '12124124124',
        },
      ],
    ],
  },
  {
    id: 'subscribe',
    type: 'subscribe',
    require: ['how'],
    actionText: '오픈 알림을 받고 싶어요',
    data: [
      [
        {
          type: 'text',
          text: '알림 신청이 완료되었습니다.',
        },
      ],
      [
        {
          type: 'text',
          text: '캠페인이 오픈되면 알림으로 알려드릴게요👋',
        },
      ],
    ],
  },
];
