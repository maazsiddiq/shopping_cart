import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4400',
      mainGradient: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',

    },
    // ...
  },
});