import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import Events from './Events';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/second" element={<SecondPage/>} />
        <Route path='/events' element={<Events/>} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>
    
  );
}

export default App;
