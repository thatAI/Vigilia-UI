import { Card, Input, Row, Space, Table } from "antd";
import React from "react";
import "./installRunbook.css";
import { SearchOutlined } from "@ant-design/icons";
import { INSTALL_RUNBOOK_DATA } from "../../mockdata/mockJson";
import BreadcrumbComponent from "../breadcrumb/breadcrumb";
import { useNavigate } from "react-router-dom";

const InstallRunbook = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <Space size="middle" >
         
        <a  onClick={()=>navigate(`/runbook/${record?.id}`)}> <p>{text}</p> </a>
        </Space>
      ),
    },
    {
      title: "Version",
      dataIndex: "version",
      key: "version",
    },
    {
      title: "CVEs ",
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
      title: "NIST CSF Subcategories",
      dataIndex: "nist_csf_sub_categories",
      key: "nist_csf_sub_categories",
    },
    {
      title: "NIST 800-53 Controls",
      dataIndex: "nist_800_controls",
      key: "nist_800_controls",
    },
    {
        title: "",
        key: "uninstall",
        render: (text, record) => (
          <Space size="middle" >
            <img  src="/images/uninstall.png" alt="uninstall-icon" height={30} width={25}  style={{cursor:'pointer'}} />
          </Space>
        ),
      },
  ];
  return (
    <div className="install-runbook-container">
      <Row className="bg-priamry font-primary install-runbook-header">
        <BreadcrumbComponent/>
      </Row>
      <Row className="install-runbook-card-container">
        <Card className="install-runbookCard">
          <p className="text-3xl">4</p>
          <p className="text-lh"> Installed Runbooks</p>
        </Card>
        <Card className="install-runbookCard">
          <p className="text-3xl" style={{ color: "red" }}>
            7
          </p>
          <p className="text-lh">Common Vulnerabilities and Exposures</p>
        </Card>
        <Card className="install-runbookCard">
          <p className="text-3xl" style={{ color: "#e1ad01" }}>
            76%
          </p>
          <p className="text-lh">Compliance</p>
        </Card>
      </Row>

      <Row className="p-2 mt-2 install-search-container">
        <Input
          className="search-install-runbooks"
          addonBefore={<SearchOutlined />}
          placeholder="Search Runbooks"
        />
      </Row>
      <Table
        className="mt-2 install-runbook-table"
        dataSource={INSTALL_RUNBOOK_DATA}
        columns={columns}
        scroll={{ x: true }}
        rowKey={"name"}
      />
    </div>
  );
};

export default InstallRunbook;
