import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from './components/Loader';

// components
const Home = lazy(() => import('./Containers/Home'));
const Dashboard = lazy(() => import("./Containers/Dashboard"))
function App() {
  return (
    <BrowserRouter>
          <Suspense fallback={<Loader />}>
          <Switch>
          <Route exact path={"/"} key="home-page" component={Home}/>
          <Route exact path={"/dashboard"} key="dashboard-page" component={Dashboard}/>
        </Switch>
     
          </Suspense>
    
     
  </BrowserRouter>

  );
}

export default App;
