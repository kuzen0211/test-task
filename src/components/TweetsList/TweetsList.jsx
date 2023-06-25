import { useSelector } from 'react-redux';
import { selectTweets } from 'redux/tweets/tweets.selectors';
import { TweetsListItem } from 'components/TweetsListItem/TweetsListItem';
import { LoadMore } from 'components/LoadMore/LoadMore';

export const TweetsList = () => {
  const items = useSelector(selectTweets);

  return (
    <>
      {items.map(({ id, user, tweets, followers, avatar, followed }) => (
        <TweetsListItem
          key={id}
          user={user}
          tweets={tweets}
          followers={followers}
          followed={followed}
          avatar={avatar}
          id={id}
        />
      ))}
      <LoadMore />
    </>
  );
};
