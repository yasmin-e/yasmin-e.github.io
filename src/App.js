import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import CVPage from './pages/CVPage/CVPage';

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
          <Route 
            exact path="/cv" 
            component={CVPage} 
          />
          </Switch>
      </Router>
    </div>
  );
};
export default App;
