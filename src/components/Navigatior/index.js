import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Menu as MenuIcon } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

import { NavigatiorContrainer, NavigatiorToolBar, MainTitle, OpenDrawerButton } from './style';

const Navigatior = props => {
	const { open, logout, openDrawer } = props;
	return (
		<NavigatiorContrainer open={open}>
			<NavigatiorToolBar disableGutters={!open}>
				<OpenDrawerButton color="inherit" aria-label="Open drawer" onClick={openDrawer} open={open}>
					<MenuIcon />
				</OpenDrawerButton>
				<MainTitle component="h1" variant="h6" color="inherit" noWrap>
					Dashboard
				</MainTitle>
				<IconButton color="inherit" onClick={logout}>
					<FontAwesomeIcon icon={faSignOutAlt} size="xs" />
				</IconButton>
			</NavigatiorToolBar>
		</NavigatiorContrainer>
	);
};

export default Navigatior;
