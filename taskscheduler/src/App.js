// import logo from './logo.svg';
import './App.css';
import Header from './components/UI/Header';
import AllTasksList from './components/pages/AllTasksList';
import Login from './components/pages/login';

function App() {
  return (
    <div className='App'>
      <div>
        <Login/>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header> */}
    </div>
  );
}

export default App;
