import { ReactComponent as Logo } from '../image/logo.svg';
import React from 'react';

import styles from './TweetsListItem.module.css';

export const TweetsListItem = ({ id, user, tweets, followers, avatar }) => {
  return (
    <>
      <div className={styles.container} id={id}>
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
          <p className={styles.content}>{followers} FOLLOWERS</p>
          <button className={styles.btn}>FOLLOW</button>
        </div>
      </div>
    </>
  );
};
