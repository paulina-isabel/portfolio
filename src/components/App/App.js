import './App.css';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import header from '../../images/portfolio-header.png';

function App() {
  return (
    <div className="App">
      <img src={header} className="header" name="header" alt="resume header with paulina's name" />
      {/* about me component */}
      <AboutMe />
      <Contact />
      {/* contact component */}
      <Resume />
      {/* projects component */}
      <Projects />
      {/* resume component with route */}
    </div>
  );
}

export default App;
