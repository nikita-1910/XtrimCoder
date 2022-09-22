import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from "./context/AuthContext";
import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
