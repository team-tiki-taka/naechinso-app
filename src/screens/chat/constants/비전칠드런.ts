import { ChatData } from "../ChatData";

export const 사단법인_비전칠드런_PROFILE_SEED = "f32qc";

export const 사단법인_비전칠드런_CHAT_DATA: ChatData[] = [
  {
    id: "initial",
    type: "initial",
    data: [
      [{ type: "text", text: "안녕하세요! 사단법인 비전칠드런 입니다👋" }],
      [
        {
          type: "text",
          text: "가족•여성을 위한 '홀로 한 가정을 지키는 미혼모 가정에 생계비를 지원해주세요' 캠페인에 대해 자세히 알려드릴까요?",
        },
      ],
    ],
  },
  {
    id: "intro",
    type: "normal",
    require: ["initial"],
    actionText: "네, 좋아요!",
    data: [
      [
        {
          type: "text",
          text: "많은 미혼모들이 주위의 도움과 축복도 받지 못하고, 오직 아이를 지켜야 한다는 책임감 하나로 홀로 육아와 생계를 모두 책임지고 있습니다.",
        },
      ],
      [
        {
          type: "text",
          text: "이러한 한 가정의 가장이자 미혼모는 전국에 2만 1천여 명이 있습니다.",
        },
      ],
    ],
  },
  {
    id: "how",
    type: "normal",
    require: ["intro"],
    actionText: "어떻게 도와주나요?",
    data: [
      [
        {
          type: "text",
          text: "엄마가 아이와 기초적인 생활을 이어나갈 수 있도록 생계비를 지원합니다.",
        },
      ],
      [
        {
          type: "text",
          text: "이를 통해 미혼모들이 막막한 생활과 빚에서 벗어나 경제적으로 자립할 수 있도록 지원합니다.",
        },
      ],
      [
        {
          type: "text",
          text: "아이와 함께 어려움을 극복하고 건강한 가정을 만들 수 있도록 함께 손잡아 주세요.",
        },
      ],
    ],
  },
  {
    id: "subscribe",
    type: "subscribe",
    require: ["how"],
    actionText: "오픈 알림을 받고 싶어요",
    data: [
      [
        {
          type: "text",
          text: "알림 신청이 완료되었습니다.",
        },
      ],
      [
        {
          type: "text",
          text: "캠페인이 오픈되면 알림으로 알려드릴게요👋",
        },
      ],
    ],
  },
];
