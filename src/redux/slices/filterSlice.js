import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeCategory: 0,
  activeSort: {
    name: 'popularity',
    sortProperty: 'rating',
  },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.activeCategory = action.payload
    },
    setActiveSort: (state, action) => {
      state.activeSort = action.payload
    },
  },
})

export const { setCategoryId, setActiveSort } = filterSlice.actions

export default filterSlice.reducer
