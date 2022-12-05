import react from "react";

const Projects = () => {
  return (
    <div>
      <h1 className='projects-header' id='projects'>
        Some of my projects
      </h1>
      <div className='project-titles'></div>
      <img src='/wikipedia.png' className='wikipedia' />
      <img src='/tours.png' className='tours'></img>
      <div className='projects-container'>
        <div className='wikipedia-container'>
          <div className='wikipedia-description'>
            <p class='font'>
              A Wikipedia Clone built with React, Express/Node.js, Postgres, and
              CSS.
            </p>
            <a
              className='wikipedia-react-label font'
              href='https://github.com/HilaryYates/Wikipedia'
            >
              Project Files
            </a>
            <a
              className='wikipedia-server-label font'
              href='https://github.com/HilaryYates/Server-For-Wikipedia'
            >
              Project Files
            </a>
          </div>
        </div>
        <div className='tours-container'>
          <div className='tours-description'></div>
          <p className='font'>A nature tours website built with CSS/Sass.</p>
          <a href='https://github.com/HilaryYates/Tours' className='font'>
            Project Files
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
