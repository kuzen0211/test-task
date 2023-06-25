import { createSlice } from '@reduxjs/toolkit';
import { clearTweets, get, loadMore, update } from './tweets.operation';

const initialState = {
  tweetsList: [],
  isLoading: false,
  currentPage: 1,
  itemsPerPage: 3,
  hasMoreData: true,
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
        state.isLoading = false;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.tweetsList.findIndex(
          data => data.id === action.payload.id
        );
        state.tweetsList.splice(index, 1, action.payload);
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
        state.hasMoreData = action.payload.length > 0;
      })
      .addCase(loadMore.rejected, (state, _) => {
        state.isLoading = false;
      })
      .addCase(clearTweets, state => {
        state.tweetsList = [];
        state.isLoading = false;
        state.currentPage = 1;
        state.hasMoreData = true;
      }),
});

export const tweetsReducer = tweetsSlice.reducer;
