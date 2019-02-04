import React, { Component } from 'react';
import Router from './router';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './configs/theme';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Router />
			</MuiThemeProvider>
		);
	}
}

export default App;
