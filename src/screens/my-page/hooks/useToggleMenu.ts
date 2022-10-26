import {useState} from 'react';

export type MenuType = '받은 호감' | '보낸 호감' | '둘 다 호감';

export type MenuListType = {
  id: number;
  menu: MenuType;
};

const menuList: MenuListType[] = [
  {id: 0, menu: '받은 호감'},
  {id: 1, menu: '보낸 호감'},
  {id: 2, menu: '둘 다 호감'},
];

export function useToggleMenu() {
  const [selectedMenu, setSelectedMenu] = useState<MenuListType>(menuList[0]);
  const handleSelect = (id: number) => () => {
    setSelectedMenu(menuList[id]);
  };
  return {selectedMenu, handleSelect};
}
