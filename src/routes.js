import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CommonLayout  from './components/commonLayout';
import Index from '../src/pages/Home';
import PageNotFound from './pages/PageNotFound';


class AppRoutes extends React.Component {

  render() {
    return (
      <BrowserRouter>
        {/* <WrapperBoundary> */}
        <Switch>
          <CommonLayout exact path="/" component={Index} />
          <Route component={PageNotFound} />
          </Switch>
        {/* </WrapperBoundary> */}
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
