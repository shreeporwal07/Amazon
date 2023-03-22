import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Subhead from './Subhead';
import LoginPage from './LoginPage';
import Prime from './Prime/Prime';
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<div><Header/><Checkout/></div>}/>
          <Route path="/login"element={<LoginPage/>}/>
          <Route path="/prime"element={<Prime/>}/>
          <Route path="/"element={<div><Header/><Subhead/><Home/></div>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
