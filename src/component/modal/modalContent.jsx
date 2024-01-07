import React from "react";
import { RUNBOOK_DETAIL_DESCRITPTION } from "../../mockdata/mockJson";
import { Button, Dropdown } from "antd";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
const ModalContent = () => {
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
      key: "1",
    },
    {
      label: "AWS Cloud Formation",
      key: "2",
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

  return (
    <div className="modal-content-automation">
      <div>
        <Dropdown menu={menuProps} overlayStyle={dropdownMenuStyle}>
          <Button
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              whiteSpace: "nowrap", 
              overflow:"hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%"
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
              maxWidth: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              whiteSpace: "nowrap", 
              overflow:"hidden",
              textOverflow:"ellipsis"
            }}
          >
            {selectedAutomationOption || "Select Automation"}
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default ModalContent;
