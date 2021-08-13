import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReadingProgress from './components/ReadingProgress';
import * as Scrollspy from './components/Scrollspy';
import * as Pagination from './components/Pagination';
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
            <li>
              <Link to="/pagination/currentpage-1-totalpage-10">
                Pagination / current page: 1, total page: 10
              </Link>
            </li>
            <li>
              <Link to="/pagination/currentpage-1-totalpage-1">
                Pagination / current page: 1, total page: 1
              </Link>
            </li>
            <li>
              <Link to="/pagination/currentpage-5-totalpage-10">
                Pagination / current page: 5, total page: 10
              </Link>
            </li>
            <li>
              <Link to="/pagination/currentpage-10-totalpage-10">
                Pagination / current page: 10, total page: 10
              </Link>
            </li>
            <li>
              <Link to="/pagination/currentpage-1-totalpage-10-siblingsize-3">
                Pagination / current page: 10, total page: 10, sibling size: 3
              </Link>
            </li>
            <li>
              <Link to="/pagination/currentpage-1-totalpage-10-boundarysize-3">
                Pagination / current page: 10, total page: 10, boundary size: 3
              </Link>
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
          <Route path="/pagination/currentpage-1-totalpage-10">
            <Pagination.CurrentPage1TotalPage10 />
          </Route>
          <Route path="/pagination/currentpage-1-totalpage-1">
            <Pagination.CurrentPage1TotalPage1 />
          </Route>
          <Route path="/pagination/currentpage-5-totalpage-10">
            <Pagination.CurrentPage5TotalPage10 />
          </Route>
          <Route path="/pagination/currentpage-10-totalpage-10">
            <Pagination.CurrentPage10TotalPage10 />
          </Route>
          <Route path="/pagination/currentpage-1-totalpage-10-siblingsize-3">
            <Pagination.CurrentPage1TotalPage10SiblingSize3 />
          </Route>
          <Route path="/pagination/currentpage-1-totalpage-10-boundarysize-3">
            <Pagination.CurrentPage1TotalPage10BoundarySize3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
