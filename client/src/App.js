// import './App.css';
import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage/Homepage';
import { Signin } from './pages/Signin/Signin';
import Footer from './components/Footer/Footer';
import Header from './components/Hedear/Header';
import Usecase from './pages/UsecasePage/Usecase';
import { PricingPage } from './pages/Pricing_Page/PricingPage';
import Signup from "./pages/Signup/Signup.jsx"
import Teamdisplay from './pages/Teams/Teamdisplay';
import AddTeam from './pages/Teams/AddTeam.jsx'
function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/usecase' element={<Usecase />} />
        <Route path='/pricing' element={<PricingPage />} /> 
        <Route path="/team"  element = {<Teamdisplay/>} />
        <Route path ="/team/add" element ={<AddTeam/>} />

      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
