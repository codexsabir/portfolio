
import './App.css';
import Contact from './Components/Contacts/Contact';
import Experiencs from './Components/Experience/Experiencs';
import Footer from './Components/Footer/Footer';
import Into from './Components/Intro/Into';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Testimonil from './Components/Testimonils/Testimonil';
import Work from './Components/Works/Work';
import { themeContext } from './Context';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
   <div className='App' style={{
    background: darkMode? 'black' : '',
  color: darkMode? 'white' : '',
  }}>
   <Navbar/>
   <Into/>
   <Services/>
   <Experiencs/>
   <Work/>
   <Portfolio/>
   <Testimonil/>
   <Contact/>
   <Footer/>
   </div>
    </>
  );
}

export default App;
