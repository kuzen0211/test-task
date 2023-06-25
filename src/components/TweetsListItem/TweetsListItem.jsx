import { ReactComponent as Logo } from '../image/logo.svg';
import React from 'react';

import styles from './TweetsListItem.module.css';
import { useDispatch } from 'react-redux';
import { update } from 'redux/tweets/tweets.operation';

export const TweetsListItem = ({
  user,
  tweets,
  followers,
  followed,
  avatar,
  id,
}) => {
  const dispatch = useDispatch();

  const handleToggle = async () => {
    const updatedTweets = {
      id,
      followers: followed ? followers - 1 : followers + 1,
      followed: !followed,
    };
    return dispatch(update(updatedTweets));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHero}>
          <div className={styles.heroBg}>
            <Logo className={styles.logo} />
          </div>
        </div>
        <span className={styles.border}></span>

        <div className={styles.containerAvatar}>
          <img src={avatar} alt="avatar" className={styles.avatar} />
        </div>
        <div className={styles.containerContent}>
          <p className={styles.content}>{user}</p>
          <p className={styles.content}>{tweets} TWEETS</p>
          <p className={styles.content}>
            {followers.toLocaleString('en-US')} FOLLOWERS
          </p>
          <button
            className={styles.btn}
            onClick={handleToggle}
            followed={`${followed}`}
            style={
              followed ? { background: '#5CD3A8' } : { background: '#EBD8FF' }
            }
          >
            {followed ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </>
  );
};
