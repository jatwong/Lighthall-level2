import './App.css';
import Header from './components/UI/Header';
import AllTasksList from './components/pages/AllTasksList';

function App() {
  return (
    <div className='App'>
      <Header username='Kevin'/>
      <AllTasksList />
    </div>
  );
}

export default App;
