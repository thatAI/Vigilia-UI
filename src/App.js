import "./App.css";
import RoutesHandler from "./route";
import React from "react";
import Navbar from "./component/navbar/navbar";
import { Layout } from "antd";
import "./index.css";
import LeftSider from "./component/leftsider/leftSider";
import { useState } from "react";
import "../src/theme/light/index.css";
import { BrowserRouter as Router } from "react-router-dom";
const { Sider, Content } = Layout;
function App() {
  const [isLeftSiderHidden, setisLeftSiderHidden] = useState(false);
  const hamburgerClicked = () => {
    setisLeftSiderHidden(!isLeftSiderHidden);
  };
  return (
    <div className="App">
      <Router>
        <Layout>
          <Navbar hamburgerClicked={() => hamburgerClicked()} />
          <Layout hasSider>
            <Sider
              className={`sider-primary sider ${
                isLeftSiderHidden ? "siderVisible" : "notSiderVisible"
              }`}
            >
              <LeftSider />
            </Sider>
            <Content className="bg-primary content">
              <RoutesHandler />
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
