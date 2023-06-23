import { NavLink } from 'react-router-dom/dist';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.bg}>
        <NavLink className={styles.btn} to={'/tweets'}>
          TWEETS
        </NavLink>
      </div>
    </>
  );
};

export default Home;
