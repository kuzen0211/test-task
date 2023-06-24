import { ReactComponent as Logo } from '../image/logo.svg';
import React, { useState } from 'react';

import styles from './TweetsListItem.module.css';
import { useDispatch } from 'react-redux';
import { update } from 'redux/tweets/tweets.operation';

export const TweetsListItem = ({ id, user, tweets, followers, avatar }) => {
  const dispatch = useDispatch();
  const { changeFollowers, setChangeFollowers } = useState('');

  const handleBtn = async () => {
    // const item = { id, user, tweets, followers, avatar };

    const updatedData = dispatch(update({ id, followers }));

    if (updatedData.payload) {
      setChangeFollowers(updatedData.payload.followers);
    }
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
            {changeFollowers ? changeFollowers : followers} FOLLOWERS
          </p>
          <button className={styles.btn} onClick={handleBtn}>
            FOLLOW
          </button>
        </div>
      </div>
    </>
  );
};
