
import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import Header from './components/Hedear/Header';
import Usecase from './pages/UsecasePage/Usecase';
import { PricingPage } from './pages/Pricing_Page/PricingPage';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Teamdisplay from "./pages/Teams/Teamdisplay";
import AddTeam from "./pages/Teams/AddTeam";
import EditTeam from "./pages/Teams/EditTeam";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/usecase' element={<Usecase />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path="/teams" element={<Teamdisplay/>} />
        <Route path="/add" element={<AddTeam />} />
        <Route path="/edit/:id" element={<EditTeam />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
