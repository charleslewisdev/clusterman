import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useLoginState} from '../contexts/Login';

const ProtectedRoute = ({Component, render, ...routeProps}) => {
  const {isLoggedIn} = useLoginState();

  const _renderFn = (props) => {
    if (isLoggedIn !== true) {
      return (
        <Redirect
          to={{pathname: '/login', state: {referrer: props.location}}}
        />
      );
    }
    return render ? render() : <Component {...props} />;
  };
  return <Route {...routeProps} render={_renderFn} />;
};

export default ProtectedRoute;
