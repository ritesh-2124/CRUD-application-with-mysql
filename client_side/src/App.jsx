import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {Routes , Route} from 'react-router-dom';
import Contect from './Components/Contect';
import View from './Components/View';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Add" element={<Contect/>} />
      <Route path="/View/:id" element={<View/>} />
      <Route path="/Update/:id" element={<Contect/>} />
    </Routes>
    </div>
  );
}

export default App;
