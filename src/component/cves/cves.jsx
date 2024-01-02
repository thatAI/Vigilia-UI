import React from "react";
import "./cves.css";
import { DownOutlined } from "@ant-design/icons";
import { Button, Checkbox, Dropdown, Menu, Row, Space } from "antd";
import BreadcrumbComponent from "../breadcrumb/breadcrumb";
const Cves = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Checkbox>Compute</Checkbox>
      </Menu.Item>
      <Menu.Item key="2">
        <Checkbox>Storage & Content Delivery</Checkbox>
      </Menu.Item>
      <Menu.Item key="3">
        <Checkbox>Database Services</Checkbox>
      </Menu.Item>
      <Menu.Item key="4">
        <Checkbox>Networking & Content Delivery</Checkbox>
      </Menu.Item>
      <Menu.Item key="5">
        <Checkbox>Management & Governance</Checkbox>
      </Menu.Item>
      <Menu.Item key="6">
        <Checkbox>Security, Identity, & Compliance</Checkbox>
      </Menu.Item>
      <Menu.Item key="7">
        <Checkbox>Application Integration</Checkbox>
      </Menu.Item>
      <Menu.Item key="8">
        <Checkbox>Analytics</Checkbox>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="cves-container">
      <Row className="bg-priamry font-primary cves-header">
      <BreadcrumbComponent/>
      </Row>
      <Row className="border-primary cves-filters-button-category">
        <Button>
          <p className="text-sm">All Runbooks</p>
        </Button>
        <Button>
          <p className="text-sm">Runbooks in Store</p>
        </Button>
        <Button>
          <p className="text-sm">Installed Runbooks</p>
        </Button>
        <Dropdown overlay={menu}>
          <Button>
            <Space>
              <p className="text-sm"> Select Specfic Runbook</p>
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Row>
      <Row className="border-primary cves-category-filters-button-category">
        <div style={{display:"flex", gap: "20px"}}>
        <Button>
          <p className="text-sm">Critical</p>
        </Button>
        <Button>
          <p className="text-sm">High</p>
        </Button>
        <Button>
          <p className="text-sm">Medium</p>
        </Button>
        </div>
        <Dropdown overlay={menu}>
          <Button type="primary" className="btn-primary">
            <p className="text-sm">CVE Categories</p>{" "}
          </Button>
        </Dropdown>
      </Row>
    </div>
  );
};

export default Cves;
