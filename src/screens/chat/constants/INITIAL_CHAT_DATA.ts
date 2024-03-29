import {ChatData} from '../types/ChatData';
import {MessageFormat} from '../utils/MessageFormat';

export const INITIAL_CHAT_DATA: ChatData[] = [
  {
    id: 'initial',
    type: 'initial',
    data: MessageFormat.textBatch(
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
    data: MessageFormat.textBatch(
      '아참',
      '혹시 문의나 피드백이 있다면 내친소 카카오톡으로 말해줄 수 있을까? 언제든 환영이야 🙌🏻',
    ),
  },
  {
    id: 'start',
    type: 'normal',
    require: ['thanks'],
    actionText: '당연하지 👍🏻',
    data: MessageFormat.textBatch(
      '그럼 지금부터 너랑 잘 맞는 친구가 있는지 보러 갈까?',
    ),
  },
];
