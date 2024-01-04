import React from "react";
import "./index.css";

import Nistcsf from "../../component/nistCsf/nistcsf";
import { useEffect } from "react";

const Index = ({isSider}) => {
  useEffect(()=>{
    isSider(false)
  },[])
  return <Nistcsf />;
};

export default Index;
