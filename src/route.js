// All Routes will be defined here 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NIST_CSF from './pages/nistCsf';
import Dashboard from './pages/dashboard';
import Runbook from './pages/runbook';
import Policy from './pages/policy';
import Cves from './pages/cves';

const RoutesHandler = () => {
  const userData = {name: "Ken Williams", role:"Operator"}
  const userDataCiso = {name: "Lisa Audrey", role:"CISO"}
  const userDataAdmin = {name: "Mark Wood", role:"Admin"}
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Dashboard userdata = {userData}/>} />
        <Route path="/nist_csf" element={<NIST_CSF userdata = {userDataCiso}/>} />
        <Route path="/runbook" element={<Runbook userdata = {userDataAdmin}/>} />
        <Route path="/cves" element={<Cves userdata = {userDataCiso}/>} />
        <Route path="/policy" element={<Policy userdata = {userDataCiso}/>} />
      </Routes>
    </Router>
  );
};

export default RoutesHandler;
