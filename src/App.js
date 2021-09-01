import { Route } from 'react-router-dom';

// import './App.css';
import DefaultHOC from './hoc/Default.HOC';

// pages
import HomaPage from './pages/Home.page';

// import CSS files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomePage from './pages/Home.page';

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
    </>
  );
}
export default App;