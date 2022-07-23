
import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import Header from './components/Hedear/Header';
import Usecase from './pages/UsecasePage/Usecase';
import { PricingPage } from './pages/Pricing_Page/PricingPage';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
