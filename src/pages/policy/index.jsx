import React from "react";
import "./index.css";
import Policy from "../../component/policy/policy";
import { useEffect } from "react";

const Index = ({isSider}) => {
  useEffect(()=>{
    isSider(false)
  },[])
  return <Policy/>;
};

export default Index;
