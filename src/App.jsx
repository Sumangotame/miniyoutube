// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';
import VideoContextProvider from './contexts/VideoContext';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/LoginPage';
import VideoPage from './components/VideoPage';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <VideoContextProvider>
          <div className="bg-gray-100 min-h-screen">
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/video/:id" component={VideoPlayer} />
              <PrivateRoute path="/" component={VideoPage} />
            </Switch>
          </div>
        </VideoContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
