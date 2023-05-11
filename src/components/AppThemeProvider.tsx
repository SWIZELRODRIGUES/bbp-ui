import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { green, purple } from '@mui/material/colors';
import { ReactElement } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

type AppThemeProviderProps = {
  children: ReactElement;
}
const theme = createTheme({
  palette: {
    mode: 'dark',
      // primary: {
      //   light:'',
      //   main: purple[500],
      //   dark:''
      // },
      // secondary: {
      //   light:'',
      //   main: purple[500],
      //   dark:''
      // },
      // error:{
      //   light:'',
      //   main: purple[500],
      //   dark:''
      // },
      // warning:{
      //   light:'',
      //   main: purple[500],
      //   dark:''
      // },
      // info:{
      //   light:'',
      //   main: purple[500],
      //   dark:''
      // },
      // success:{
      //   light:'',
      //   main: purple[500],
      //   dark:''
      // }
  },
});

function AppThemeProvider(props: AppThemeProviderProps) {
  const { children } = props
  
  return <ThemeProvider theme={theme} >
    <CssBaseline />
    {children}
  </ThemeProvider>
}

export default AppThemeProvider;