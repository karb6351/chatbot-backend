import styled from 'styled-components';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import theme from '../../configs/theme';

import { DRAWER_WIDTH } from '../../constant';

export const NavigatiorContrainer = styled(AppBar)`
  && {
    z-index: ${theme.zIndex.drawer + 1};
    transition: all ${theme.transitions.easing.sharp} ${theme.transitions.duration.leavingScreen}ms;
    width: ${(props) => (props.open ? `calc(100% - ${DRAWER_WIDTH}px)` : `100%`)};
    margin-left: ${(props) => (props.open ? DRAWER_WIDTH : 0)}px;
  }
`;

export const NavigatiorToolBar = styled(Toolbar)`
  padding-right: 24px;
`;

export const OpenDrawerButton = styled(IconButton)`
  margin-left: 12px;
  margin-right: 36px;
  display: ${(props) => (props.open ? 'display' : 'none')};
`;

export const MainTitle = styled(Typography)`
  flex-grow: 1;
`;
