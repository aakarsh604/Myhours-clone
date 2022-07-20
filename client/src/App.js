
import './App.css';
import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Homepage/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
