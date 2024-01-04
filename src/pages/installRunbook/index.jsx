import React from "react";
import "./index.css";
import InstallRunbook from "../../component/installRunbook/installRunbook";
import { useEffect } from "react";

const Index = ({isSider}) => {
  useEffect(()=>{
    isSider(false)
  },[])
  return <InstallRunbook/>;
};

export default Index;
