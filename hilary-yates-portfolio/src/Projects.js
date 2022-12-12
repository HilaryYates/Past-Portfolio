import react from "react";

const Projects = () => {
  return (
    <div>
      <h1 className='projects-header' id='projects'>
        Some of My Projects
      </h1>
      <div>
        <div className='wikipedia-project-container'>
          <img
            src='https://i.postimg.cc/xCHn6p9v/wikipedia.png'
            className='wikipedia'
          />
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
        </div>

        <div className='tours-project-container'>
          {/* <p className='font'>A nature tours website built with CSS/Sass.</p>
          <a href='https://github.com/HilaryYates/Tours' className='font'>
            Project Files
          </a> */}
          <div>
            <img
              src='https://i.postimg.cc/26T2Nrjr/tours.png'
              className='tours'
            ></img>
            <p className='font'>A nature tours website built with CSS/Sass.</p>
            <a href='https://github.com/HilaryYates/Tours' className='font'>
              Project Files
            </a>
          </div>
        </div>
      </div>
      */
      <div className='shop-container'>
        <img
          src='https://i.postimg.cc/G2MJSKzp/fake-shop.png'
          className='shop'
        />

        <div className='shop-description'></div>
        <p className='font'>A fake shopping website built with Redux.</p>
        <a href='https://github.com/HilaryYates/redux-shop' className='font'>
          Project Files
        </a>
      </div>
    </div>
  );
};

export default Projects;
