import MainPage from '../../pages/main-page';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
//import HeadGuestPage from '../../pages/head-guest-page';
//import MovieInListPage from '../../pages/movie-in-list-page';
//import MovieDetailsPage from '../../pages/movie-details-page';
import MovieReviewsPage from '../../pages/movie-reviews-page';
import MoviePage from '../../pages/movie-page';
import MyList from '../../pages/my-list';
//import PlayerPause from '../../pages/player-pause';
import Player from '../../pages/player';
//import SignInError from '../../pages/sign-in-error';
//import SignInMessage from '../../pages/sign-in-message';
import SignIn from '../../pages/sign-in';
import Error404Page from '../error-404';
import PrivateRoute from '../private-route';

type AppProps = {
  //mistakes: number,
  authStatus: boolean;
};

function App({authStatus}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path='/login' element={<SignIn />}/>
        <Route path='/mylist' element={
          <PrivateRoute authStatus={false}>
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path='/films/:id' element={<MoviePage />}/>
        <Route path='/films/:id/review' element={
          <PrivateRoute authStatus={false}>
            <MovieReviewsPage />
          </PrivateRoute>
        }
        />
        <Route path='/player/:id' element={<Player />}/>
        <Route path='*' element={<Error404Page />}/>
      </Routes>
    </BrowserRouter>);
}

export default App;
