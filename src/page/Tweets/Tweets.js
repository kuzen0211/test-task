import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get } from 'redux/tweets/tweets.operation';

import { TweetsList } from 'components/TweetsList/TweetsList';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Tweets.module.css';

const Tweets = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  return (
    <>
      <NavLink className={styles.btn} to={backLink}>
        &#x293A; back
      </NavLink>
      <TweetsList />
    </>
  );
};

export default Tweets;
