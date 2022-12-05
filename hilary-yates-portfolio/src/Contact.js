import react from "react";

const Contact = () => {
  return (
    <div>
      <h1 className='contact-me-header' id='contact'>
        Contact me
      </h1>
      <div className='contact-container'>
        <div className='email-label'>hilarycodes@gmail.com</div>
        <a
          className='linkedin-label'
          href='https://www.linkedin.com/in/hilary-yates/'
        >
          Linkedin
        </a>
        <a
          className='github-label'
          href='https://github.com/hilaryYates?tab=repositories'
        >
          GitHub
        </a>
        <img className='my-photo' src='hilary yates photo.jpg' />
      </div>
    </div>
  );
};

export default Contact;
