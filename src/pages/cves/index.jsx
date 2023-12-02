import React from "react";
import Navbar from "../../component/navbar/navbar";
import {  Layout } from "antd";
import "./index.css";
import LeftSider from "../../component/leftsider/leftSider";

const {  Sider, Content } = Layout;

const Index = ({userdata}) => {
  
  return (
    <Layout>
      <Navbar userdata={userdata} />
      <Layout hasSider>
        <Sider className="sider-primary sider"><LeftSider/></Sider>
        <Content className="bg-primary content">
          <p className="font-primary text-2xl">Coming soon</p>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
