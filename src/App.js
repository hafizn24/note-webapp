import { createTheme, ThemeProvider} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import MainPage from './components/MainPage'

const fontType = "'Sofia Sans Semi Condensed', sans-serif"
const theme = createTheme({
  typography: {
    fontFamily: fontType,
  },
  palette:{
    primary: {
      main: '#6D9886',
    },
    background: {
      paper: '#F7F7F7',
      default: '#393E46',
    }
  }
});

function App() {
  return (
    <ThemeProvider theme = { theme }>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <MainPage/> } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
