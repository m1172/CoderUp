import { useContext } from 'react';
import { MainContext } from './components/Context/HomeContext';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/LoginPage/Login';

function App() {
  const { onLoginPage } = useContext(MainContext);

  return <>{onLoginPage ? <LandingPage /> : <Login />}</>;
}

export default App;
