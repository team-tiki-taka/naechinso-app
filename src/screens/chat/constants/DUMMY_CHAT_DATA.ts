import {combineArray} from '@utils/combineArray';
import {ChatData} from '../ChatData';

export namespace Chat {
  export function text(message: string) {
    return [{type: 'text', text: message} as const];
  }
  export function textBatch(...messages: string[]) {
    return messages.map(message => [{type: 'text', text: message} as const]);
  }

  export function 호감전달(id: string, dependency: string): ChatData[] {
    return [
      {
        id,
        type: 'normal',
        actionText: '가보자고 😎',
        require: [dependency],
        data: Chat.textBatch(
          '친구한테 호감을 전달했어!',
          '답장이 언제 오는지에 따라 최대 3일 정도 걸릴 수 있어!',
          '조금만 기다려줘 😚',
        ),
      },
      {
        id: `${id}_2`,
        type: 'normal',
        require: [id],
        actionText: '응 고마워!',
        data: Chat.textBatch('😎'),
      },
    ];
  }
}

export const DUMMY_CHAT_DATA: ChatData[] = combineArray(
  {
    id: 'initial',
    type: 'initial',
    data: Chat.textBatch(
      '안녕 😎',
      '내이름은 친소야',
      '추천인 친구한테 너에 대해 좋은 이야기 많이 들었어!',
      '지금부터 너처럼 주변 사람들에게 많은 애정과 좋은 평판을 받은 사람들을 소개해 줄 거야',
      '주변 친구들에게 애정과 믿음을 받고 있는 친구들이라, 나를 믿고 만나봐도 좋아 💪🏻',
      '마음에 드는 인연을 만날 때까지 열심히 해볼게!',
    ),
  },
  {
    id: 'thanks',
    type: 'normal',
    require: ['initial'],
    actionText: '고마워!',
    data: Chat.textBatch(
      '아참',
      '혹시 문의나 피드백이 있다면 내친소 카카오톡으로 말해줄 수 있을까? 언제든 환영이야 🙌🏻',
    ),
  },
  {
    id: 'start',
    type: 'normal',
    require: ['thanks'],
    actionText: '당연하지 👍🏻',
    data: Chat.textBatch('그럼 지금부터 너랑 잘 맞는 친구가 있는지 보러 갈까?'),
  },
  Chat.호감전달('호감', 'start'),
);
