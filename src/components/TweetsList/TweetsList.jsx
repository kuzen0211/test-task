import { useSelector } from 'react-redux';
import { selectTweets } from 'redux/tweets/tweets.selectors';
import { TweetsListItem } from 'components/TweetsListItem/TweetsListItem';
import { LoadMore } from 'components/LoadMore/LoadMore';

import styles from './TweetsList.module.css';
import { useState } from 'react';

export const TweetsList = () => {
  const items = useSelector(selectTweets);
  const [filter, setFilter] = useState('show all');

  const filteredItems = items.filter(item => {
    if (filter === 'follow') {
      return !item.followed;
    }
    if (filter === 'following') {
      return item.followed;
    }
    return true;
  });

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div className={styles.wraper}>
      <div className={styles.filterContainer}>
        <div className={styles.filterContent}>
          <label htmlFor="filter">Filter:</label>
          <select id="filter" value={filter} onChange={handleFilterChange}>
            <option value="show all">Show All</option>
            <option value="follow">Follow</option>
            <option value="following">Following</option>
          </select>
        </div>
      </div>
      <div className={styles.container}>
        {filteredItems.map(
          ({ id, user, tweets, followers, avatar, followed }) => (
            <TweetsListItem
              key={id}
              user={user}
              tweets={tweets}
              followers={followers}
              followed={followed}
              avatar={avatar}
              id={id}
            />
          )
        )}
      </div>
      <LoadMore />
    </div>
  );
};
