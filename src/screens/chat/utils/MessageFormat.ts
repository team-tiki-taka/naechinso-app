import {Recommend} from '@models/Recommend';
import {ChatData} from '../types/ChatData';

export namespace MessageFormat {
  export function text(message: string) {
    return [{type: 'text', text: message} as const];
  }
  export function textBatch(...messages: string[]) {
    return messages.map(message => [{type: 'text', text: message} as const]);
  }

  export function 추천(
    id: string,
    recommend: Recommend,
    dependency: string,
  ): ChatData[] {
    return [
      {
        id,
        type: 'recommend',
        actionText: '가보자고 😎',
        require: [dependency],
        recommend,
        data: [],
      },
      {
        id: `${id}_2`,
        type: 'recommendDetail',
        actionText: '오 궁금해!',
        require: [id],
        recommend,
        data: MessageFormat.textBatch(
          '프로필을 보고 프로필 하단 [ 호감보내기 / 다른 분 보기 ]를 선택해줘!',
          '선택하지 않으면 다음 친구를 소개받을 수 없어',
          '어때어때? 👀',
        ),
      },
    ];
  }

  export function 호감전달(id: string, dependency: string): ChatData[] {
    return [
      {
        id,
        type: 'normal',
        actionText: '가보자고 😎',
        require: [dependency],
        data: MessageFormat.textBatch(
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
        data: MessageFormat.textBatch('😎'),
      },
    ];
  }
}
