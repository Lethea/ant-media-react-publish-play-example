import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Playernew from "./Playernew";
import Publishnew from "./Publishnew";
import Playernewauto from "./Playernewauto";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <div>
              <ul>
                  <li>
                      <Link to="/">Publish</Link>
                  </li>
                  <li>
                      <Link to="/play">Play</Link>
                  </li>
                  <li>
                      <Link to="/playauto">Play Auto</Link>
                  </li>
              </ul>
              <Switch>
                  <Route exact path="/" component={Publishnew} />
                  <Route path="/play" component={Playernew} />
                  <Route path="/playauto" component={Playernewauto} />
              </Switch>
          </div>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
