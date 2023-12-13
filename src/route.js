// All Routes will be defined here
import React from "react";
import { Route, Routes } from "react-router-dom";

import NIST_CSF from "./pages/nistCsf";
import Dashboard from "./pages/installRunbook";
import Runbook from "./pages/runbook";
import Policy from "./pages/policy";
import Cves from "./pages/cves";

const RoutesHandler = () => {
  return (
    <Routes>
      <Route path="/runbook" element={<Dashboard />} />
      <Route path="/nist_csf" element={<NIST_CSF />} />
      <Route path="/" element={<Runbook />} />
      <Route path="/cves" element={<Cves />} />
      <Route path="/policy" element={<Policy />} />
    </Routes>
  );
};

export default RoutesHandler;
