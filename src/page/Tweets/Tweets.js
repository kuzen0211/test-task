import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { TweetsList } from 'components/TweetsList/TweetsList';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Tweets.module.css';
import { clearTweets, get } from 'redux/tweets/tweets.operation';

const Tweets = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(clearTweets());
  };
  return (
    <>
      <NavLink className={styles.btn} to={backLink} onClick={handleClick}>
        &#x293A;back
      </NavLink>
      <div className={styles.wraper}>
        <TweetsList />
      </div>
    </>
  );
};

export default Tweets;
