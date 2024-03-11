
import './App.css'

import Routes from './routes';
import Footer from './utils/footer/Footer';
import NavBar from "./utils/navbar/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
