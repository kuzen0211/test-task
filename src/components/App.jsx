import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// import { CardItem } from './CardItem/CardItem';
import { Loading } from './Loading/Loading';

const Home = lazy(() => import('../page/Home/Home'));
const Tweets = lazy(() => import('../page/Tweets/Tweets'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
        </Routes>
      </Suspense>
    </>
  );
};
