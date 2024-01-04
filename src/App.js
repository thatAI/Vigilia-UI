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
import RightSider from "./component/rightSider/rightSider";
import { useEffect } from "react";
const { Sider, Content } = Layout;
function App() {
  const [isLeftSiderHidden, setisLeftSiderHidden] = useState(false);
  const [pathname, setPathname] = useState(false);
  const hamburgerClicked = () => {
    setisLeftSiderHidden(!isLeftSiderHidden);
  };
  const routeSidebarHandler = () => {
    setisLeftSiderHidden(false);
  };

  const IsRightSiderVisible = (value) => {
    setPathname(value);
  };

  return (
    <div className="App">
      <Router>
        <Layout style={{ height: "100vh" }}>
          <Navbar hamburgerClicked={() => hamburgerClicked()} />
          <Layout hasSider>
            <Sider
              className={`sider-primary sider ${
                isLeftSiderHidden ? "siderVisible" : "notSiderVisible"
              }`}
            >
              <LeftSider routeSidebarHandler={routeSidebarHandler} />
            </Sider>
            <Content
              className={`bg-primary content ${
                isLeftSiderHidden ? "notSiderVisible" : "siderVisible"
              }`}
            >
              <RoutesHandler IsRightSiderVisible={IsRightSiderVisible} />
            </Content>
            {pathname && (
              <Sider className="sider-primary sider right-sider">
                <RightSider />
              </Sider>
            )}
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
