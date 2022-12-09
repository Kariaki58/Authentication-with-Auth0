import './App.css';
import Login_button from './components/Login_button';
import Log_out from './components/Log_out';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <div className='inline-grid'>
        <Login_button />
        <Log_out />
      </div>
      <Profile />
    </div>
  );
}

export default App;
