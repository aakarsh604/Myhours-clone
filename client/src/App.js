
import './App.css';
import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage/Homepage';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Homepage/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
