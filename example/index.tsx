import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { General } from './components/ReadingProgress/General';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { SpecificRootAndTarget } from './components/ReadingProgress/SpecificRootAndTarget';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/reading-progress/general">ReadingProgress</Link>
          </li>
          <li>
            <Link to="/reading-progress/specific-root-and-target">
              ReadingProgress / specific root and target
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/reading-progress/general">
          <General />
        </Route>
        <Route path="/reading-progress/specific-root-and-target">
          <SpecificRootAndTarget />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
