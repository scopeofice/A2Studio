import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import About from './Components/About'
import Carosel from './Components/Carosel';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Carosel/> */}
      <About/>
    </div>
  );
}

export default App;
