import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import GameDesign from './components/GameDesign';
import Coding from './components/Coding';
import Art from './components/Art';
import LinkedIn from './Images/Logos/linkedin-white.png';
import Github from './Images/Logos/github-mark-white.svg';
import Itch from './Images/Logos/itchio-textless-white.svg';
import Image from 'react-bootstrap/Image';
// import TurtleLandscape from './images/Turtle Landscape.PNG';

function App() {
  return (
    <Router>
      <div className="App">
        
        <h1 className="Landing-Page">JACOB WOOD</h1>
        <h2 className="Byline">Coder | Game Designer | Artist</h2>
        <header className="App-header" style= {{ backgroundImage: "url(/Turtle-Landscape.PNG"}}>
          
        
          <nav>
                <Link className="header-link home" to="/">Home</Link>
                <Link className="header-link about" to="/about">About</Link>
                <Link className="header-link coding" to="/coding">Coding</Link>
                <Link className="header-link game-design" to="/gamedesign">Games</Link>
                <Link className="header-link art" to="/art">Art</Link>
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
          <Route path="/coding" element={<Coding />} />
          <Route path="/gamedesign" element={<GameDesign />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </div>
      <footer className="App-footer">
        <a href="https://github.com/jwood7"><Image src={Github} alt="Github" height={50}/></a>
        <a href="https://www.linkedin.com/in/jacobwood176/"><Image src={LinkedIn} alt="LinkedIn" height={50}/></a>
        <a href="https://yakobay.itch.io/"><Image src={Itch} alt="Itch.io" height={50}/></a>
      </footer>
     
    </Router>
    
  );
}

export default App;
