import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/pages/PurchaseManagement/Header';
import AddOrder from './assets/pages/PurchaseManagement/AddOrder';
import OredrStatus from './assets/pages/PurchaseManagement/Orderstatus';
import AllOrder from './assets/pages/PurchaseManagement/AllOrder';
import UpdateStatus from './assets/pages/PurchaseManagement/UpdateStatus';
import UpdateOrder from './assets/pages/PurchaseManagement/UpdateOrder';
import PurchaseReport from './assets/pages/PurchaseManagement/PurchaseReport';
import PurchaseMailer from './assets/pages/PurchaseManagement/PurchaseMailer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/add" element={<AddOrder />} />
        <Route path="/status" element={<OredrStatus />} />
        <Route path="/" element={<AllOrder />} />
        <Route path="/report" element={<PurchaseReport />} />
        <Route path="/email" element={<PurchaseMailer />} />
        <Route path="/update/:orderID" element={<UpdateStatus />} />
        <Route path="/change/:orderID" element={<UpdateOrder />} />
      </Routes>
    </Router>
  );
}

export default App;


