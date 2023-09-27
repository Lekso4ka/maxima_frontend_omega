

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TabSwitcher from './TabSwitcher/CamelCase';

const isAuth = () => {

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/camelcase">Курсы</Link>
              </li>
              <li>
                <Link to="/camelcase">Пользователи</Link>
              </li>
              <li>
                <Link to="/camelcase">Новости</Link>
              </li>
              <li>
                <Link to="/camelcase">Материалы</Link>
              </li>
            </ul>
          </nav>
   
          <Switch>
            <Route exact path="/camelcase">
              <TabSwitcher/>
            </Route>
            <Route path="/camelcase">
              <TabSwitcher/>
            </Route>
            <Route path="/camelcase">
              <TabSwitcher />
            </Route>
            <Route path="/camelcase">
              <TabSwitcher />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  };