import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MainContainer, MainContent, AppBarSpacer } from './style';

import MainWrapper from '../../components/MainWrapper';
import Navigator from '../../components/Navigatior';
import Menu from '../../components/Menu';
import { logout } from '../../helpers/auth';

class BaseLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true
		};
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	handleLogout = () => {
		if (logout()) {
			this.props.history.push('/');
		}
	};

	render() {
		return (
			<MainContainer >
				<CssBaseline />
				<Navigator open={this.state.open} logout={this.handleLogout} openDrawer={this.handleDrawerOpen} />
				<Menu closeDrawer={this.handleDrawerClose} open={this.state.open} {...this.props} />
				<MainContent>
          <AppBarSpacer />
					<MainWrapper open={this.state.open}>
						{this.props.children}
					</MainWrapper>
				</MainContent>
			</MainContainer>
		);
	}
}

export default BaseLayout;
