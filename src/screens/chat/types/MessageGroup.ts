import {FormattedChatData} from './FormattedChatData';

export interface MessageGroup {
  type: 'receive' | 'send';
  messages: FormattedChatData[];
}

export namespace MessageGroup {
  export function send(messages: FormattedChatData[]): MessageGroup {
    return {
      type: 'send',
      messages,
    };
  }
  export function receive(messages: FormattedChatData[]): MessageGroup {
    return {
      type: 'receive',
      messages,
    };
  }
}
