import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: '#e2f6ff',
    //   light: '#ffffff',
    //   dark: '#b0c3cc'
    // },
    // secondary: {
    //   light: '#ffffe4',
    //   main: '#ffe0b2',
    //   dark: '#cbae82',
    // },
    // error: will use the default color
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;