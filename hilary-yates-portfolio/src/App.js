import Projects from "./Projects";
import Contact from "./Contact";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div>
      <div className='front-container fade-in-header'>
        <div className='headings'>
          <h1 className='name'>Hilary Yates</h1>
          <p className='title'>Front-End Software Developer</p>
          <a className='projects-link' href='#projects'>
            Some of my projects
          </a>
          <a className='about-link' href='#'>
            About me
          </a>
          <a className='contact-link' href='#'>
            Contact me
          </a>
        </div>
        <div className='computer-image-container'>
          <img
            className='computer-image fade-in-image '
            src='          https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80        ></img>
          '
          ></img>
        </div>
      </div>

      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
