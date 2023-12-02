import React from "react";
import Navbar from "../../component/navbar/navbar";
import {  Layout } from "antd";
import "./index.css";
import LeftSider from "../../component/leftsider/leftSider";
import Nistcsf from "../../component/nistCsf/nistcsf";
const {  Sider, Content } = Layout;

const Index = ({userdata}) => {
  return (
    <Layout>
      <Navbar userdata={userdata} />
      <Layout hasSider>
        <Sider className="sider-primary"><LeftSider/></Sider>
        <Content className="bg-primary content">
           <Nistcsf/> 
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
