import { Button, Card, Checkbox, Dropdown, Input, Menu, Row, Table } from "antd";
import React from "react";
import "./runbookStore.css";
import { SearchOutlined } from "@ant-design/icons";
import { RUNBOOK_STORE_DATA } from "../../mockdata/mockJson";
const RunbookStore = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Version",
      dataIndex: "version",
      key: "version",
    },
    {
      title: "Cves ",
      dataIndex: "cves",
      key: "address",
    },
    {
      title: "Processes",
      dataIndex: "processes",
      key: "processes",
    },
    {
      title: "NIST CSF Policies ",
      dataIndex: "nist_csf_policies",
      key: "nist_csf_policies",
    },
    {
      title: "NIST CSF Sub-Categories",
      dataIndex: "nist_csf_sub_categories",
      key: "nist_csf_sub_categories",
    },
    {
      title: "NIST 800-53 controls",
      dataIndex: "nist_800_controls",
      key: "nist_800_controls",
    },
  ];
  const menu = (
    <Menu>
      
        <Menu.Item key="1">
          <Checkbox >Compute</Checkbox>
        </Menu.Item>
        <Menu.Item key="2">
          <Checkbox >Storage & Content Delivery</Checkbox>
        </Menu.Item>
        <Menu.Item key="3">
          <Checkbox >Database Services</Checkbox>
        </Menu.Item>
        <Menu.Item key="4">
          <Checkbox >Networking & Content Delivery</Checkbox>
        </Menu.Item>
        <Menu.Item key="5">
          <Checkbox >Management & Governance</Checkbox>
        </Menu.Item>
        <Menu.Item key="6">
          <Checkbox >Security, Identity, & Compliance</Checkbox>
        </Menu.Item>
        <Menu.Item key="7">
          <Checkbox >Application Integration</Checkbox>
        </Menu.Item>
        <Menu.Item key="8">
          <Checkbox >Analytics</Checkbox>
        </Menu.Item>
   
    </Menu>
  );
  return (
    <div className="runbook-container">
      <Row className="runbookStore-card-container">
        <Card className="runbookStoreCard">
          <p className="text-3xl">90</p>
          <p className="text-lh">Runbooks in store</p>
        </Card>
        <Card className="runbookStoreCard">
          <p className="text-3xl" style={{ color: "red" }}>
            166
          </p>
          <p className="text-lh">Common Vulnerabilities and Exposures</p>
        </Card>
      </Row>
      <Row className="p-2 mt-2 import-search-container">
        <div style={{ gap: "20px", display: "flex" }}>
          <Button type="primary" className="btn-primary ">
            <p className="text-sm"> Import</p>
          </Button>
          <Input
            className="search-runbooks"
            addonBefore={<SearchOutlined />}
            placeholder="Search Runbooks"
          />
        </div>
        <Dropdown overlay={menu} trigger={['click']}>
        <Button type="primary" className="btn-primary">
          <p className="text-sm"> AWS Categories</p>
        </Button>
        </Dropdown>
      </Row>
      <Table
        className="mt-5 runbook-table"
        dataSource={RUNBOOK_STORE_DATA}
        columns={columns}
        scroll={{ x: true }}
      />
      ;
    </div>
  );
};

export default RunbookStore;
