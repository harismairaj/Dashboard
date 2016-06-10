import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app';

//  Inner Pages
import AccountInfo from './components/pages/account-info';
import AddressBook from './components/pages/address-book';
import Billing from './components/pages/billing';
import BrowseFreeCourses from './components/pages/browse-free-courses';
import CourseReport from './components/pages/course-report';
import Courses from './components/pages/courses';
import CreateCourse from './components/pages/create-course';
import EnrollUsers from './components/pages/enroll-users';
import ManageUsers from './components/pages/manage-users';
import Orders from './components/pages/orders';
import PrivacyPolicy from './components/pages/privacy-policy';
import RunReport from './components/pages/run-report';
import Shop from './components/pages/shop';
import Subscriptions from './components/pages/subscriptions';
import Support from './components/pages/support';
import Terms from './components/pages/terms';

import reducers from './reducers';
import Async from './middlewares/async';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='account-info' component={AccountInfo} />
        <Route path='address-book' component={AddressBook} />
        <Route path='billing' component={Billing} />
        <Route path='browse-free-courses' component={BrowseFreeCourses} />
        <Route path='course-report' component={CourseReport} />
        <Route path='courses' component={Courses} />
        <Route path='create-course' component={CreateCourse} />
        <Route path='enroll-users' component={EnrollUsers} />
        <Route path='manage-users' component={ManageUsers} />
        <Route path='orders' component={Orders} />
        <Route path='privacy-policy' component={PrivacyPolicy} />
        <Route path='run-report' component={RunReport} />
        <Route path='shop' component={Shop} />
        <Route path='subscriptions' component={Subscriptions} />
        <Route path='support' component={Support} />
        <Route path='terms' component={Terms} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#dashboard'));
