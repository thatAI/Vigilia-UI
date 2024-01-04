import React from "react";
import "./index.css";

import RunbookStore from "../../component/runbookStore/runbookStore";
import { useEffect } from "react";

const Index = ({isSider}) => {
  useEffect(()=>{
    isSider(false)
  },[])
  return <RunbookStore />;
};

export default Index;
