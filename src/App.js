import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
