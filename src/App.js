import React, { useState } from 'react';
import './App.css';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import FormPage from './components/SignUpForm';
import { ToastContainer } from 'react-toastify';
import MyProfilePage from './pages/MyProfilePage';
import UploadPage from './pages/UploadPage';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))

  return (
    <>
      <ToastContainer />
      <NavBar token={token} setToken={setToken}/>
      <Switch>
        <Route path="/" exact>
          <HomePage /> 
        </Route>
        <Route path="/users/:userId" component={ProfilePage}/>
        <Route path="/form" component={FormPage}/>
        <Route path="/profile" component={MyProfilePage}/>
        <Route path="/upload" component={UploadPage} />
      </Switch>
    </>
  );
}

export default App;
