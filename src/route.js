// All Routes will be defined here
import React from "react";
import { Route, Routes } from "react-router-dom";

import NIST_CSF from "./pages/nistCsf";
import Dashboard from "./pages/installRunbook";
import Runbook from "./pages/runbook";
import Policy from "./pages/policy";
import Cves from "./pages/cves";
import RunbookDetail from "./pages/runbookDetail";
import RunbookS3 from "./pages/s3runbook";
const RoutesHandler = ({ IsRightSiderVisible }) => {
  const isSider = (value) => {
    IsRightSiderVisible(value);
  };
  return (
    <Routes>
      <Route path="/runbook" element={<Dashboard isSider={isSider} />} />
      <Route path="/nist_csf" element={<NIST_CSF isSider={isSider} />} />
      <Route path="/" element={<Runbook isSider={isSider} />} />
      <Route path="/cves" element={<Cves isSider={isSider} />} />
      <Route path="/policy" element={<Policy isSider={isSider} />} />
      <Route
        path="/runbook/:id"
        element={<RunbookDetail isSider={isSider} />}
      />
      <Route path="/s3runbookid" element={<RunbookS3 isSider={isSider} />} />
    </Routes>
  );
};

export default RoutesHandler;
