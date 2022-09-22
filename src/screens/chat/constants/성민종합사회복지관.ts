import { ChatData } from "../ChatData";

export const 성민종합사회복지관_PROFILE_SEED = "x";

export const 성민종합사회복지관_CHAT_DATA: ChatData[] = [
  {
    id: "initial",
    type: "initial",
    data: [
      [{ type: "text", text: "안녕하세요! 성민종합사회복지관 입니다👋" }],
      [
        {
          type: "text",
          text: "어르신을 위한 '밑반찬 나눔으로 어르신의 건강한 식생활을 지켜주세요' 캠페인에 대해 자세히 알려드릴까요?",
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
          text: "영양적인 식생활은 어르신들의 면역기능을 높여 안정적인 일상을 유지할 수 있는 건강 관리의 가장 기본적인 요소입니다",
        },
      ],
      [
        {
          type: "text",
          text: "하지만, 1인 가구 어르신들은 건강상의 이유와 경제적인 어려움으로 제대로 된 식사를 챙기는 것이 어렵습니다.",
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
          text: "성민종합사회복지관에서는 어르신들의 건강하고 안정적인 식생활을 유지할 수 있도록 밑반찬배달을 운영하고 있습니다.",
        },
      ],
      [
        {
          type: "text",
          text: "더 많은, 국가의 지원이 닿지 않는 분들에게까지도 영양적인 밑반찬이 전달될 수 있도록 도와주세요",
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
