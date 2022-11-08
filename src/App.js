import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import NavigationBar from './components/NavigationBar';

function App() {
  
  return (
    <div className="App">

      <NavigationBar/>  

      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
