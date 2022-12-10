import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Huro from './component/Huro';
import About from './component/About';
import Service from './component/Service';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Huro/>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
