import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReadingProgress from './components/ReadingProgress';
import * as Scrollspy from './components/Scrollspy';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '240px 1fr',
          columnGap: '1rem',
        }}
      >
        <nav
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
          }}
        >
          <ul>
            <li>
              <Link to="/reading-progress/general">ReadingProgress</Link>
            </li>
            <li>
              <Link to="/reading-progress/specific-root-and-target">
                ReadingProgress / specific root and target
              </Link>
            </li>
            <li>
              <Link to="/scrollspy/general">Scrollspy</Link>
            </li>
            <li>
              <Link to="/scrollspy/specific-root">
                Scrollspy / specific root
              </Link>
            </li>
            <li>
              <Link to="/scrollspy/offset">Scrollspy / offset</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/reading-progress/general">
            <ReadingProgress.General />
          </Route>
          <Route path="/reading-progress/specific-root-and-target">
            <ReadingProgress.SpecificRootAndTarget />
          </Route>
          <Route path="/scrollspy/general">
            <Scrollspy.General />
          </Route>
          <Route path="/scrollspy/specific-root">
            <Scrollspy.SpecificRoot />
          </Route>
          <Route path="/scrollspy/offset">
            <Scrollspy.Offset />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
