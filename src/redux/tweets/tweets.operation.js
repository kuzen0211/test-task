import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTweets, load, updateTweets } from '../../service/tweetsAPI';

export const get = createAsyncThunk('tweets/get', async (_, thunkAPI) => {
  try {
    const { data } = await getTweets();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const update = createAsyncThunk(
  'tweets/update',
  async (id, thunkAPI) => {
    try {
      const { data } = await updateTweets(id);
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
