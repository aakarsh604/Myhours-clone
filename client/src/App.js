import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage/Homepage';
import Usecase from './pages/UsecasePage/Usecase';
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
      </Routes>
    </div>
  );
}

export default App;
