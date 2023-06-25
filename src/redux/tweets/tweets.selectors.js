export const selectTweets = state => state.tweets.tweetsList;

export const selectIsLoading = state => state.tweets.isLoading;

export const selectError = state => state.tweets.error;
export const moreData = state => state.tweets.hasMoreData;
