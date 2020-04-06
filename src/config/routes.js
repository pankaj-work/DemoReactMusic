import React,{ Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../components/Main'));
const DetailsScreen = lazy(() => import('../components/Details'));

function ROUTES() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/details/:id" component={DetailsScreen}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default ROUTES;
