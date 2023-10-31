import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import GameDesign from './components/GameDesign';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
                <Link className="header-link home" to="/">Home</Link>
                <Link className="header-link about" to="/about">About</Link>
                <Link className="header-link game-design" to="/gamedesign">Game Design</Link>
          </nav>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gamedesign" element={<GameDesign />} />
        </Routes>
      </div>
     
    </Router>
    
  );
}

export default App;
