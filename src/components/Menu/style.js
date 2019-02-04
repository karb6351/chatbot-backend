import React from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';

import theme from '../../configs/theme';
import { DRAWER_WIDTH } from '../../constant';

const InnerPaper = (props) => <Paper {...props} />;

const { unit } = theme.spacing;
const { enteringScreen, leavingScreen } = theme.transitions.duration;

export const Container = styled(InnerPaper)`
  position: relative;
  overflow-x: ${(props) => (!props.open ? 'auto' : 'hidden')};
  white-space: nowrap;
  width: ${(props) => (props.open ? DRAWER_WIDTH : unit * 7)}px;
  min-width: ${props => props.open ? `${DRAWER_WIDTH}px` : 0};
  transition: all ${theme.transitions.easing.sharp} ${(props) =>
	props.open ? enteringScreen : leavingScreen}ms;
  ${[ theme.breakpoints.up('sm') ]}{
    width: ${(props) => (props.open ? DRAWER_WIDTH : unit * 9)}px
  }
`;

export const CloseButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0 8px;
	${() => ({ ...theme.mixins.toolbar })};
`;
