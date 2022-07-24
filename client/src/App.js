import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import Header from './components/Hedear/Header';
import Usecase from './pages/UsecasePage/Usecase';
<<<<<<< HEAD
import Support from './pages/Support/Support';



function App() {
  return (
    <div className="App">
     {/* <Header/> */}
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path='/signup' element={<Signin/>}/> 
      <Route path='/usecase' element={<Usecase/>}/> 
      <Route path='/support' element={<Support/>}/> 
     </Routes>
=======
import { PricingPage } from './pages/Pricing_Page/PricingPage';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Teamdisplay from './pages/Teams/Teamdisplay';
import AddTeam from './pages/Teams/AddTeam';
import EditTeam from './pages/Teams/EditTeam';
import ClientDetails from './pages/Client/ClientDetails';
import NewClient from './pages/Client/NewClient';
import EditClient from './pages/Client/EditClient';
import { TrackPage } from './pages/Track_Page/TrackPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/usecase' element={<Usecase />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/teams' element={<Teamdisplay />} />
        <Route path='/add' element={<AddTeam />} />
        <Route path='/edit/:id' element={<EditTeam />} />
        <Route path='/Clients' element={<ClientDetails />} />
        <Route path='/addClient' element={<NewClient />} />
        <Route path='/editClient/:id' element={<EditClient />} />
        <Route path='/track' element={<TrackPage />} />
>>>>>>> e91a482555086e7f2ce98f66b7ba56486923c926
     
      </Routes>
    </div>
  );
}

export default App;
