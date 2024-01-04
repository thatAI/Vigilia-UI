import React from "react";
import "./index.css";
import Cves from "../../component/cves/cves";
import { useEffect } from "react";

const Index = ({isSider}) => {
  useEffect(()=>{
    isSider(false)
  },[])
  return <Cves/> ;
};

export default Index;
