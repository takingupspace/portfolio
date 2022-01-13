import { AboutContainer } from './components/styles/About.styled';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.js';
import content from './content.js'
import Card from './components/Card';
import Footer from './components/Footer';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer : '#003333',
  },
  mobile: '768px',
}
function App() {
  return (

    <ThemeProvider theme = {theme}>
    <>
    <GlobalStyles/>
    <Header />
    <AboutContainer>
      {content.map((item, index) => (
        <Card key={index} item={item}/>
      ))}
    </AboutContainer>
    <Footer />
    </>
    </ThemeProvider>
  );
}

export default App;
