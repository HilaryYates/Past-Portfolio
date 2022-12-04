import react from "react";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>

      <img src='/wikipedia.png' className='wikipedia' />
      <img src='/tours.png' className='tours'></img>
      <div className='wikipedia-container'>
        <p>
          A Wikipedia clone. Built with React, Express/node.js, Postgres, and
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
        <p>A CSS/Sass project with animations.</p>
        <a href='https://github.com/HilaryYates/Tours'>Project Files</a>
      </div>
    </div>
  );
};

export default Projects;
