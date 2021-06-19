import React from 'react';
import './App.css';
// Importing Antd Design Materials
import 'antd/dist/antd.css';

// Linking Pages
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/home';
import TermsOfService from './components/terms';
import PrivacyPolicy from './components/privacyPolicy';
import Thanks from './components/Thanks';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/terms" component={TermsOfService} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/thanks" component={Thanks} />
      </Switch>
    </Router>
  );
}

export default App;
