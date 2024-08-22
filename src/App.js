import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Add this import
import Home from './Pages/Home';
import SAVE_MORE_ON_APP from './Pages/SAVE_MORE_ON_APP';
import Farmers from './Pages/Farmer/Farmers';
import AccountDetails from './Pages/Farmer/AccountDetails';
import AddProductForInspection from './Pages/Farmer/AddProductForInspection';
import InspectedProductDetails from './Pages/Farmer/InspectedProductDetails';
import AddProductToInspection from './Pages/Farmer/AddProductToInspection';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/farmer" element={<Farmers />} />
            <Route path="/" element={<Home />} />
            <Route path="/accountdetails" element={<AccountDetails />} />
            <Route path="/addproductforinspection" element={<AddProductForInspection/>}/>
            <Route path="/inspectedproductdetails" element={<InspectedProductDetails />} />
            <Route path="/addproducttoinspection" element={<AddProductToInspection/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
