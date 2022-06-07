import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'


interface UserState {
  users: IUser;
  isLoading: boolean;
  error: string
}

const initialState: UserState = {
  users: {
    isAuth: false,
    access_token: '',
    refresh_token: '',
    scope: [],
    token_type: '',
  },
  error: '',
  isLoading: false,
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.users.access_token = action.payload.access_token
      state.users.refresh_token = action.payload.refresh_token
      state.users.scope = action.payload.scope
      state.users.token_type = action.payload.token_type
      state.users.isAuth = action.payload.isAuth
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
