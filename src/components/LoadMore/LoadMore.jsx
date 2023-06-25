import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import { loadMore } from 'redux/tweets/tweets.operation';

import styles from './LoadMore.module.css';
import { moreData, selectIsLoading } from 'redux/tweets/tweets.selectors';

export const LoadMore = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const hasMoreData = useSelector(moreData);

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
        disabled={!hasMoreData || isLoading}
      >
        {isLoading ? 'LOADING...' : 'LOAD MORE'}
      </button>
    </div>
  );
};
