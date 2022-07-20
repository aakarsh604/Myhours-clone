
// import './App.css';
import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage/Homepage';
import { Signin } from './pages/Signin/Signin';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path='/signup' element={<Signin/>}/>
     </Routes>
    </div>
  );
}

export default App;
