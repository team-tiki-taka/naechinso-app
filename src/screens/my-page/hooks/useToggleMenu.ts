import {useState} from 'react';

export enum MenuType {
  receivedHeart = '받은 친구 신청',
  sendedHeart = '보낸 친구 신청',
  completeHeart = '매칭된 친구',
}

export type MenuListType = {
  id: number;
  menu: MenuType;
};

const menuList: MenuListType[] = [
  {id: 0, menu: MenuType.receivedHeart},
  {id: 1, menu: MenuType.sendedHeart},
  {id: 2, menu: MenuType.completeHeart},
];

export function useToggleMenu() {
  const [selectedMenu, setSelectedMenu] = useState<MenuListType>(menuList[0]);
  const handleSelect = (id: number) => () => {
    setSelectedMenu(menuList[id]);
  };
  return {selectedMenu, handleSelect};
}
