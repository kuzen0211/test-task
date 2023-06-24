import { useDispatch } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import { loadMore } from 'redux/tweets/tweets.operation';

import styles from './LoadMore.module.css';

export const LoadMore = () => {
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    scroll.scrollToBottom();
    dispatch(loadMore());
  };

  return (
    <div className={styles.container}>
      <button
        id="loadMoreButton"
        onClick={handleLoadMore}
        className={styles.btn}
      >
        LOAD MORE
      </button>
    </div>
  );
};
