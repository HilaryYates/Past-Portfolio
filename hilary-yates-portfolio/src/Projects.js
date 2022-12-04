import react from "react";

const Projects = () => {
  return (
    <div>
      <h1 className='projects-header' id='projects'>
        Projects
      </h1>
      <div className='project-titles'></div>
      <img src='/wikipedia.png' className='wikipedia' />
      <img src='/tours.png' className='tours'></img>
      <div className='wikipedia-container'>
        <p>
          A Wikipedia Clone built with React, Express/Node.js, Postgres, and
          CSS.
        </p>
        <a
          className='wikipedia-react-label'
          href='https://github.com/HilaryYates/Wikipedia'
        >
          Project Files: React
        </a>
        <a
          className='wikipedia-server-label'
          href='https://github.com/HilaryYates/Server-For-Wikipedia'
        >
          Project Files: Server
        </a>
      </div>
      <div className='tours-container'>
        <p>A nature tours website built with CSS/Sass .</p>
        <a href='https://github.com/HilaryYates/Tours'>Project Files</a>
      </div>
    </div>
  );
};

export default Projects;
