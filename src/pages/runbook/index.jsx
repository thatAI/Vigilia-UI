import React, { useState } from "react";
import Navbar from "../../component/navbar/navbar";
import {  Layout } from "antd";
import "./index.css";
import LeftSider from "../../component/leftsider/leftSider";
import RunbookStore from "../../component/runbookStore/runbookStore";

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
        <Sider className={`sider-primary sider ${isLeftSiderHidden ? "siderVisible" :"notSiderVisible"}`}><LeftSider/></Sider>
        <Content className="bg-primary content">
        <RunbookStore/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;

