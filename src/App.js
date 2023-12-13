import './App.css';
import Navbaar from './components/header/Navbaar'
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from "./components/home/Maincomp"
import Footer from './components/footer/Footer';
import SignIn from './components/signup_signin/SignIn';
import SignUP from './components/signup_signin/SignUp.js';
import { Routes ,Route} from 'react-router-dom';

function App() {
  return (
   <>
      <Navbaar/>
      <Newnav/>
      <Routes>
        <Route path="/" element={<Maincomp />}/>
        <Route path="/login" element={<SignIn />}/>
        <Route path="/register" element={<SignUP />}/>
      </Routes>
      <Footer/>
    
   </>
  );
}

export default App;
