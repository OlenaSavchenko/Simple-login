import React, { useState } from "react"
import { Switch, Redirect, Route } from 'react-router-dom';
import Header from "../../pages/Header";
import Login from "../../pages/Login";
import Films from "../../pages/Films";
import Film from "../../pages/Film";
import ErrorPage from "../../pages/ErrorPage"
import './App.css';

const ProtectedRoute = ({ isLogin, children, ...restProps }) => {
  return isLogin ? <Route {...restProps}>{children}</Route> : <Redirect to="/login" />
}

const getIsLoginFromLS = () => localStorage.getItem('isLogin') === 'true'


function App() {
  const [isLogin, setIsLogin] = useState(getIsLoginFromLS())
  const handleLogin = () => {
    setIsLogin(!isLogin)
    localStorage.setItem('isLogin', !isLogin);
  }

  return (
    <>
      <Header onLogin={handleLogin} isLogin={isLogin} />
      <Switch>
        <Route exact path='/login'>
          {isLogin ? <Redirect to="/" /> : <Login />}
        </Route>
        <ProtectedRoute isLogin={isLogin} exact path="/">
          <Redirect to="/films" />
        </ProtectedRoute>
        <ProtectedRoute isLogin={isLogin} exact path="/films">
          <Films />
        </ProtectedRoute>
        <ProtectedRoute isLogin={isLogin} exact path='/films/:id'>
          <Film />
        </ProtectedRoute>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
