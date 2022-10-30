import {ChatData, Message, RecommendChatData} from '../types/ChatData';
import {FormattedChatData} from '../types/FormattedChatData';

export function* utilize<T>(
  generator: Generator<T>,
): Generator<{value: T; hasNext: boolean}> {
  let nextValue = generator.next();
  do {
    const current = nextValue;
    nextValue = generator.next();
    yield {value: current.value, hasNext: !nextValue.done};
  } while (!nextValue.done);
}

export function createChatPlayer(data: ChatData): Generator<FormattedChatData> {
  switch (data.type) {
    case 'recommend':
      return recommendChatPlayer(data);
    default:
      return normalChatPlayer(data);
  }
}

function* recommendChatPlayer(
  group: RecommendChatData,
): Generator<FormattedChatData> {
  yield {type: 'recommend', data: group.recommend};
  yield* normalChatPlayer(group);
  return;
}

function* normalChatPlayer(group: {
  data: Array<Array<Message>>;
}): Generator<FormattedChatData> {
  for (const message of group.data) {
    yield {type: 'normal', data: message};
  }
  return;
}
