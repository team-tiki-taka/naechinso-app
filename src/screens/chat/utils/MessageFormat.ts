import {MatchingCard} from '@models/MatchingCard';
import {ChatData} from '../types/ChatData';

export namespace MessageFormat {
  export function text(message: string) {
    return [{type: 'text', text: message} as const];
  }
  export function textBatch(...messages: string[]) {
    return messages.map(message => [{type: 'text', text: message} as const]);
  }

  export function 추천2(
    id: string,
    recommend: MatchingCard,
    dependency: string,
  ): ChatData[] {
    return [
      {
        id: id,
        type: 'normal',
        autoplay: true,
        require: [dependency],
        data: MessageFormat.textBatch('다른 친구도 소개받아볼래?'),
      },
      ...추천([id, 'sub'].join(), recommend, id),
    ];
  }

  export function 추천(
    id: string,
    recommend: MatchingCard,
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
          '프로필을 보고 프로필 하단 [호감보내기 / 다른 분 보기] 를 선택해줘!',
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
        autoplay: true,
        type: 'normal',
        require: [dependency],
        actionText: '호감을 보내고 싶어',
        data: MessageFormat.textBatch(
          '친구한테 호감을 전달했어!',
          '답장이 언제 오는지에 따라 최대 3일 정도 걸릴 수 있어!',
          '조금만 기다려줘 😚',
        ),
      },
    ];
  }

  export function 거절(id: string, dependency: string): ChatData[] {
    return [
      {
        id,
        type: 'normal',
        autoplay: true,
        actionText: '다른 친구 소개 받아도 될까 👀..?',
        require: [dependency],
        data: MessageFormat.textBatch(
          '앗 그렇구나',
          '너에게 더 잘 어울리는 사람을 찾을 수 있도록 노력해볼게 🔥',
        ),
      },
    ];
  }
}
