import { ChatData } from "../ChatData";

export const 행동하는동물사랑_PROFILE_SEED = "jhg";

export const 행동하는동물사랑_CHAT_DATA: ChatData[] = [
  {
    id: "initial",
    type: "initial",
    data: [
      [{ type: "text", text: "안녕하세요! 행동하는동물사랑 입니다👋" }],
      [
        {
          type: "text",
          text: "동물을 위한 '더 많은 유기견들이 안락사에서 구조되어 평생 가족을 만나도록 도와주세요' 캠페인에 대해 자세히 알려드릴까요?",
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
          text: "시위탁보호소의 유기견들은 10일 이후 안락사의 대상이 됩니다. ",
        },
      ],
      [
        {
          type: "text",
          text: "저희는 아이들을 안락사에서 구조하여 치료 및 보호를 통해 가족을 찾아 주기 위해 사설보호소인 행동하는 동물사랑 쉼터를 운영하고 있습니다.",
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
          text: "유기견 아이들이 잠시만 머물다가 평생 가족을 만날수 있도록 합니다.",
        },
      ],
      [
        {
          type: "text",
          text: "임시보호, 해외입양 등 여러가지 방법으로 이 아이들이 머무는 보호소가 평생집이 되지 않길 위해 노력하고 있습니다.",
        },
      ],
      [
        {
          type: "text",
          text: "행동하는동물사랑의 활동들과 아이들의 손과 발이 되어주시는 봉사자/직원들을 지원해주세요.",
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
