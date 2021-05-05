//import logo from './logo.svg';
import './App.css';
//import Button from '@material-ui/core/Button' 
import TopBar from './ui/TopBar'
import {Box} from '@material-ui/core'
import  FooterBar from './ui/FooterBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { createMuiTheme, ThemeProvider,makeStyles } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import pink from '@material-ui/core/colors/pink';
import KarangosList from './routed/KarangosList'
import KarangosForm from './routed/KarangosForm'
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: pink[500],
    },
  },
});

const useStyles = makeStyles((theme) =>
({
  box: {
    backgroundColor: theme.palette.background.default,
    minHeght: '100vh' // 100% da altura da area visivel
    },
    routed: {
      padding: '25px',
      color: theme.palette.text.primary,
      fontFamily: theme.typography.fontFamily
    }

}));

function Main(){
  const classes = useStyles();
  return (
    <Box className = {classes.box}> 
      <BrowserRouter>
       
       <TopBar />
        <Box id="routed" className={classes.routed}>
            <Switch>
               <Route path="/list">
                 <KarangosList />
               </Route>
               <Route path="/new">
                  <KarangosForm/>
               </Route>

            </Switch>
            
        </Box>
        <FooterBar />
      
      </BrowserRouter>
     
    </Box>

  )
}

function App() {
 
  return ( // 
    <ThemeProvider theme={theme}> 
     <Main/>
    </ThemeProvider>

  );
}

export default App;
