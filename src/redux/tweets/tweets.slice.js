import { createSlice } from '@reduxjs/toolkit';
import { get, loadMore, update } from './tweets.operation';

const initialState = {
  tweetsList: [],
  isLoading: false,
  currentPage: 1,
  itemsPerPage: 3,
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(get.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(get.fulfilled, (state, action) => {
        state.tweetsList = [...action.payload];
        state.isLoading = false;
      })
      .addCase(get.rejected, (state, _) => {
        state.isLoading = false;
      })
      .addCase(update.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(update.fulfilled, (state, __) => {
        state.isLoading = false;
      })
      .addCase(update.rejected, (state, _) => {
        state.isLoading = false;
      })
      .addCase(loadMore.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(loadMore.fulfilled, (state, action) => {
        state.tweetsList = [...state.tweetsList, ...action.payload];
        state.currentPage += 1;
        state.isLoading = false;
      })
      .addCase(loadMore.rejected, (state, _) => {
        state.isLoading = false;
      }),
});

export const tweetsReducer = tweetsSlice.reducer;
