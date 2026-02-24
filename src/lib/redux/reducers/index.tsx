import { combineReducers } from '@reduxjs/toolkit';
import drawerSlice from './Slice/drawerSlice';

const rootReducer = combineReducers({
    Drawer: drawerSlice,
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;