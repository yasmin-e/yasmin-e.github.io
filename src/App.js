import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route 
            exact path="/" 
            component={HomePage} 
          />
          <Route 
            exact path="/contact" 
            component={ContactPage} 
          />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
