import './App.css';
import Header from './components/Header';
import AddOrder from './components/AddOrder';
import OredrStatus from './components/Orderstatus';
import AllOrder from './components/AllOrder';
import UpdateStatus from './components/UpdateStatus';
import UpdateOrder from './components/UpdateOrder';
import PurchaseReport from './components/PurchaseReport';
import PurchaseMailer from './components/PurchaseMailer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 


function App() {
  return (
    <Router>
      <div >
      <Header />
      <Routes>
          <Route path="/add" exact Component={AddOrder}/>
          <Route path="/status" exact Component={OredrStatus}/>
          <Route path="/" exact Component={AllOrder}/>
          <Route path="/report" exact Component={PurchaseReport}/>
          <Route path="/email" exact Component={PurchaseMailer}/>
          <Route path="/update/:orderID" element={<UpdateStatus />} />
          <Route path="/change/:orderID" element={<UpdateOrder />} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;
