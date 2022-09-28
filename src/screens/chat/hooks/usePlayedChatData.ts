import { flatMap, uniq } from "lodash";
import { useMemo } from "react";
import { ChatData, Message } from "../ChatData";
import { MessageGroup } from "./MessageGroup";

export function usePlayedChatData(
  data: ChatData[],
  resolved: string[],
  playingStep?: string
) {
  return useMemo(
    () =>
      flatMap(
        uniq(resolved.filter((i) => i !== playingStep)).map((id) => {
          const item = data.find((item) => item.id === id);
          if (!item) {
            return [];
          }
          const messages = [];
          if ("actionText" in item) {
            const sendMessage: Message = {
              type: "text",
              text: item.actionText,
              weight: "medium",
            };
            messages.push(
              MessageGroup.send([{ type: "normal", data: [sendMessage] }])
            );
          }
          messages.push(
            MessageGroup.receive(
              item.data.map((data) => ({ type: "normal", data }))
            )
          );
          return messages;
        })
      ),
    [resolved, data, playingStep]
  );
}
