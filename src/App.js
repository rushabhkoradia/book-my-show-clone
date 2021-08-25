import { Route } from 'react-router-dom';
// import './App.css';
import DefaultHOC from './hoc/Default.HOC';
import Temp from './components/temp';

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={Temp} />
    </>
  );
}
export default App;