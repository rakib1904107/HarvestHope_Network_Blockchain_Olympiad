import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Add this import
import Home from './Pages/Home';
import SAVE_MORE_ON_APP from './Pages/SAVE_MORE_ON_APP';
import Farmers from './Pages/Farmer/Farmers';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/farmer" element={<Farmers />} />
            <Route path="/" element={<Home />} />
            <Route path="/SAVE_MORE_ON_APP" element={<SAVE_MORE_ON_APP />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
