// import './App.css';
import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage/Homepage';
import { Signin } from './pages/Signin/Signin';
import Footer from './components/Footer/Footer';
import Header from './components/Hedear/Header';
import Usecase from './pages/UsecasePage/Usecase';
import { PricingPage } from './pages/Pricing_Page/PricingPage';
import Sidebar from "./pages/sidebar/Sidebar.jsx"

function App() {
  return (
    <div className='App'>
      {/* <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signin />} />
        <Route path='/usecase' element={<Usecase />} />
        <Route path='/pricing' element={<PricingPage />} />
      </Routes>

      <Footer /> */}
       <Sidebar/>
    </div>
  );
}

export default App;
