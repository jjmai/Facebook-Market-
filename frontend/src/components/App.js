import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import Dummy from './Dummy';
import Home from './Home';
import Login from './Login';
// import Drawer from './style/Drawer';

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
