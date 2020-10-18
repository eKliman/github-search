import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Alert } from './components/Alert';
import { Navbar } from './components/NavBar/Navbar';
import { AlertState } from './context/alert/AlertState';
import { GithubState } from './context/github/GithubState';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/profile/:name" component={Profile} />
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
