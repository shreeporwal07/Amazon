import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Subhead from './Subhead';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<div><Header/><Checkout/></div>}/>
          <Route path="/login"element={<h1>Login</h1>}/>
          <Route path="/"element={<div><Header/><Subhead/><Home/></div>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
