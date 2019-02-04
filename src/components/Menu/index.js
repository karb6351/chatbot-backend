import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SettingsSystemDaydream from '@material-ui/icons/SettingsSystemDaydream';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { Container, CloseButtonWrapper } from './style';

function Menu(props) {
	const { open, closeDrawer } = props;
	return (
		<Container variant="permanent" open={open}>
			<CloseButtonWrapper>
				<IconButton onClick={closeDrawer}>
					<ChevronLeftIcon />
				</IconButton>
			</CloseButtonWrapper>
			<Divider />
			<List>
				<ListItem selected={props.match.path === '/' ? true : false} onClick={() => props.history.push('/')} button>
					<ListItemIcon>
						<DashboardIcon />
					</ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItem>
				<ListItem
					selected={props.match.path === '/monitor' ? true : false}
					onClick={() => props.history.push('/monitor')}
					button
				>
					<ListItemIcon>
						<SettingsSystemDaydream />
					</ListItemIcon>
					<ListItemText primary="Monitor" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<PeopleIcon />
					</ListItemIcon>
					<ListItemText primary="Customers" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<BarChartIcon />
					</ListItemIcon>
					<ListItemText primary="Reports" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<LayersIcon />
					</ListItemIcon>
					<ListItemText primary="Integrations" />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListSubheader inset>Saved reports</ListSubheader>
				<ListItem button>
					<ListItemIcon>
						<AssignmentIcon />
					</ListItemIcon>
					<ListItemText primary="Current month" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<AssignmentIcon />
					</ListItemIcon>
					<ListItemText primary="Last quarter" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<AssignmentIcon />
					</ListItemIcon>
					<ListItemText primary="Year-end sale" />
				</ListItem>
			</List>
		</Container>
	);
}

export default Menu;
