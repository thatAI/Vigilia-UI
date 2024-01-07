import React from "react";
import { RUNBOOK_DETAIL_DESCRITPTION } from "../../mockdata/mockJson";
import { Button, Col, Dropdown, Row, Space, message } from "antd";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import GenreicModal from "../../component/modal/modal";
import "./rightSider.css";
import { Empty } from "antd";
const RightSider = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAutomationOption, setSelectedAutomationOption] =
    useState(null);
  const handleMenuClick = (e) => {
    setSelectedOption(e.domEvent.target.innerText);
  };
  const handleAutomationMenuClick = (e) => {
    setSelectedAutomationOption(e.domEvent.target.innerText);
  };
  const items = RUNBOOK_DETAIL_DESCRITPTION.processes.map((process, index) => ({
    label: process.name,
    key: process.runbookprocessid,
  }));
  const automationItems = [
    {
      label: "AWS CLI",
      key: '1',
    },
    {
      label: "AWS Cloud Formation",
      key: '2',
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const automationMenuProps = {
    items: automationItems,
    onClick: handleAutomationMenuClick,
  };
  const dropdownMenuStyle = {
    maxHeight: "300px",
    overflowY: "auto",
    maxWidth: "200px",
  };

  const modalContent = (
    <div className="modal-content-automation">
      <div>
        <Dropdown menu={menuProps} overlayStyle={dropdownMenuStyle}>
          <Button
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {selectedOption || "Select processes to add automations"}
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <div>
        <Dropdown menu={automationMenuProps} overlayStyle={dropdownMenuStyle}>
          <Button
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {selectedAutomationOption || "Select Automation"}
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
  return (
    <div className="right-sider-container">
      <Col
        className="mt-1"
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <p className="font-sans text-sm ">
          {RUNBOOK_DETAIL_DESCRITPTION.runbook.name}
        </p>
        <p className="font-sans text-sm font-primary">
          {RUNBOOK_DETAIL_DESCRITPTION.runbook.version}
        </p>
      </Col>
      <Empty description={"Select automations for runbook"} />
      <Row style={{ gap: "10px" }}>
        <GenreicModal
          buttonText={"Automation"}
          modalTitle={"Automation"}
          modalContent={modalContent}
        />
        <Button>Delete</Button>
      </Row>
    </div>
  );
};

export default RightSider;
