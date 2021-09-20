import { Route } from 'react-router-dom';

// import './App.css';
import DefaultHOC from './hoc/Default.HOC';
import MovieHOC from './hoc/Movie.HOC';
import PlaysHOC from './hoc/Plays.HOC';

// axios
import axios from 'axios';

// pages
import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import PlaysPage from './pages/Plays.pages';

// import CSS files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={ HomePage } />
      <MovieHOC path="/movie/:name/:id" exact component={ MoviePage } />
      <PlaysHOC path="/plays/:id" exact component={ PlaysPage } />
    </>
  );
}
export default App;