import "./App.css";

function App() {
  return (
    <div>
      <div className='heading-container'>
        <h1>Hilary Yates</h1>
        <p>Front-end web developer</p>
        <a className='projects-link' href='#'>
          Projects
        </a>
        <a className='contact-link' href='#'>
          Contact
        </a>
      </div>
      <div className='computer-image-container'>
        <img
          className='computer-image'
          src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
        ></img>
      </div>
    </div>
  );
}

export default App;
