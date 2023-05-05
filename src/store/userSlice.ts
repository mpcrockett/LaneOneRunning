import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface userState {
  isLoggedIn: boolean
}

const initialState: userState = {
  isLoggedIn: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.isLoggedIn = true;
    }
  }
})

export const { loggedIn } = userSlice.actions
export default userSlice.reducer