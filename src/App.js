import Navbar from './components/Navbar';
import './index.css';
import About from './components/About'
import Projects from './components/Projects';
import TechSkills from './components/Techskills'
import ProfissionalExperience from './components/ProfissionalExperience'

function App() {

  return (
    <div className='bg-cyan-950 w-screen  lg:flex overflow-hidden'>
      <div className='sm:h-screen sm:w-full lg:w-1/2'>
        <Navbar></Navbar>
      </div>
      <div className='lg:w-1/2'>
        <About />
        <Projects />
        <ProfissionalExperience/>
        <TechSkills/>
      </div>

    </div>
  );
}

export default App;
