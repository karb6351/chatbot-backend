import styled from 'styled-components';
import theme from '../../configs/theme';

import { DRAWER_WIDTH } from '../../constant';

export const MainContainer = styled.div`
  display: flex;
`;

export const MainContent = styled.main`
    flex-grow: 1;
    padding: ${theme.spacing.unit * 3}px;
    box-sizing: border-box;
		height: 100vh;
    overflow: auto;
    width: ${(props) => (props.open ? `calc(100% - ${DRAWER_WIDTH}px)` : `100%`)};
`;

export const AppBarSpacer = styled('div')`
  ${() => ({...theme.mixins.toolbar})};
`;