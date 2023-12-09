import React from "react";
import Navbar from "../../component/navbar/navbar";
import {  Layout } from "antd";
import "./index.css";
import LeftSider from "../../component/leftsider/leftSider";
import { useState } from "react";

const {  Sider, Content } = Layout;

const Index = ({userdata}) => {
  const [isLeftSiderHidden , setisLeftSiderHidden] = useState(false);  
  const hamburgerClicked = ()=>{
    setisLeftSiderHidden(!isLeftSiderHidden);
    }
  return (
    <Layout>
      <Navbar userdata={userdata}  hamburgerClicked={()=>hamburgerClicked()}/>
      <Layout hasSider>
        <Sider  className={`sider-primary sider ${isLeftSiderHidden ? "siderVisible" :"notSiderVisible"}`}><LeftSider/></Sider>
        <Content className="bg-primary content">
          <p className="font-primary text-2xl">Coming soon</p>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
