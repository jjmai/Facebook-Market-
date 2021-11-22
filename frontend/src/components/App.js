import React, {Fragment} from 'react';

import Dummy from './Dummy';
import Home from './Home';
// import Drawer from './style/Drawer';

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function App() {
  return (
    <Fragment>
      <Home />
      <Dummy />
    </Fragment>
  );
}

export default App;
