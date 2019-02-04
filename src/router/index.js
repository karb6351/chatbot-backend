import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { isLoggedIn } from '../helpers/auth';

import BaseLayour from '../pages/BaseLayout';
import Dashboard from '../pages/Dashboard';
import Monitor from '../pages/Monitor';
import Login from '../pages/Login';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const renderComponent = (props) => {
		return isLoggedIn() ? (
			<BaseLayour {...props}>
					<Component {...props} />
			</BaseLayour>
		) : (
			<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
		);
	};
	return <Route {...rest} render={renderComponent} />;
};

const GuestRoute = ({ component: Component, ...rest }) => {
	const renderComponent = (props) => {
		return isLoggedIn() ? (
			<Redirect to={{ pathname: '/', state: { from: props.location } }} />
		) : (
			<Component {...props} />
		);
	};
	return <Route {...rest} render={renderComponent} />;
};

export default () => {
	return (
		<BrowserRouter>
			<Switch>
				<PrivateRoute exact path="/" component={Dashboard} />
				<PrivateRoute path="/monitor" component={Monitor} />
				{/* routes goes here */}

				<GuestRoute path="/login" component={Login} />
			</Switch>
		</BrowserRouter>
	);
};
