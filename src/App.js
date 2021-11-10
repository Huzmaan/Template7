import "./App.css";
import Profile from './Components/Profile';
import Main from './Components/Main';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Skills from './Components/Skills';
import Reputation from "./Components/Reputation";
import Price from "./Components/Price";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
     <Profile/>
    <Navbar/>
    <div className="App-css">
     <Main/>
     <Portfolio/>
     <About/>
     <Skills />
     <Reputation/>
     <Price/>
     <Contact/>
     <Footer/>
     </div>
    </>
  );
}

export default App;
