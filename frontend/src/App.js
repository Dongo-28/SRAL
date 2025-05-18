import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [token, setToken] = useState(null);

  const onAuth = token => {
    setToken(token);
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" render={props => <LoginPage {...props} onAuth={onAuth} />} />
        <Route path="/register" render={props => <RegisterPage {...props} onAuth={onAuth} />} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;