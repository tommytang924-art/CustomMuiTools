import { createSlice } from '@reduxjs/toolkit';
import {mainMenu, subMenu} from "../../../../../public/json/MenuData.json"
export type mainMenuList = {
  menu_id: string;
  menu_name: string;
  uri: string;
}

export type subMenuList = {
  menu_id: string;
  menu_name: string;
  parent_id: string;
  uri: string;
}

interface DrawerState {
  isOpen: boolean;
  mainMenu: mainMenuList[];
  subMenu: subMenuList[];
}



const initialState: DrawerState = {
  isOpen: true,
  mainMenu: mainMenu,
  subMenu: subMenu,
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isOpen = true;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
    },
    toggleDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
    setMainMenu: (state, action) => {
      state.mainMenu = action.payload;
    },
    setSubMenu: (state, action) => {
      state.subMenu = action.payload;
    },
  },
});

export const { openDrawer, closeDrawer, toggleDrawer, setMainMenu, setSubMenu } = drawerSlice.actions;
export default drawerSlice.reducer;