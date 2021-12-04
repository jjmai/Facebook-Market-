import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import Dummy from './Dummy';
import Home from './Home';
import Login from './Login';
import CreateAccount from './CreateAccount';
import NewListing from './NewListing';
import MyListings from './MyListings';
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
          <Route path="/createAccount">
            <CreateAccount/>
          </Route>
          <Route path="/newListing">
            <NewListing/>
          </Route>
          <Route path="/listings/:userId">
            <MyListings/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
