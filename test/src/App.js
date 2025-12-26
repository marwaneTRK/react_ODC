import './App.css';
import { HomePage } from './component/HomePage';
import {  AuthProvider } from './component/AuthContext';

function App() {
  return (
   <AuthProvider>
    <HomePage />
   </AuthProvider>
  );
}

export default App;
