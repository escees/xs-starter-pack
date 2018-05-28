import React from 'react';
import ReactDom from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import registerServiceWorker from './registerServiceWorker';
import Welcome from './Welcome';
// import Login from './Login';
// Import your reducers and routes here
import user from './reducers/user/'
import userRoutes from './routes/user'
import book from './reducers/book/'
import bookRoutes from './routes/book'
import review from './reducers/review/'
import reviewRoutes from './routes/review'


const store = createStore(
  combineReducers({
      routing, form, user, book, review  /* Add your reducers here */}),
  applyMiddleware(thunk),
);

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        {/*<Route path="/" component={Login} strict={true} exact={true}/>*/}
        <Route path="/welcome" component={Welcome} strict={true} exact={true}/>
        {userRoutes}
        {bookRoutes}
        {reviewRoutes}
        <Route render={() => <h1>Not Found</h1>}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
