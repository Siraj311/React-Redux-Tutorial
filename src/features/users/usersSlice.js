import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: '0', name: 'Dude Lebowski' },
  { id: '1', name: 'Isuka Premathilake' },
  { id: '2', name: 'Manil Tenuka' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  }
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer