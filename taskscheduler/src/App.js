import './App.css';
import Header from './components/UI/Header';
import AllTasksList from './components/pages/AllTasksList';
import Login from './components/pages/login';

function App() {
  return (
    <div className='App'>
      <div>
        <Login />
        <Header username='Mary' />
        <AllTasksList />
      </div>
    </div>
  );
}

export default App;
