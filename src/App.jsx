import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DonationForm from './components/DonationForm';
import ContextProvider from './context/ContextProvider';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <ContextProvider>
      <Router>
        {/* Include the Navbar here if you want it to appear on every page */}
        {/* <Navbar />  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myform" element={<DonationForm />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
