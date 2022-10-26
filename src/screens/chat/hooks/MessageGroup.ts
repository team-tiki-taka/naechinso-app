import {MessageForUI} from '../components/ChatMessage';

export interface MessageGroup {
  type: 'receive' | 'send';
  messages: MessageForUI[];
}
export namespace MessageGroup {
  export function send(messages: MessageForUI[]): MessageGroup {
    return {
      type: 'send',
      messages,
    };
  }
  export function receive(messages: MessageForUI[]): MessageGroup {
    return {
      type: 'receive',
      messages,
    };
  }
}
