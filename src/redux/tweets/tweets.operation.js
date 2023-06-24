import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTweets, load, updateTweets } from '../../service/tweetsAPI';

export const get = createAsyncThunk('tweets/get', async (_, thunkAPI) => {
  try {
    const { data } = await getTweets();
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const update = createAsyncThunk(
  'tweets/update',
  async ({ id, followers }, thunkAPI) => {
    try {
      const newFollowers = followers + 1;
      const { data } = await updateTweets(id, newFollowers);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadMore = createAsyncThunk(
  'tweets/loadMore',
  async (_, thunkAPI) => {
    const { currentPage, itemsPerPage } = thunkAPI.getState().tweets;

    const nextPage = currentPage + 1;

    try {
      const response = await load(nextPage, itemsPerPage);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
