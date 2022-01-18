import Header from './components/Header';
import Slider from './components/Slider';
import { ThemeProvider } from 'styled-components';
import theme from './components/style/theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Slider />
    </ThemeProvider>
  );
}

export default App;
