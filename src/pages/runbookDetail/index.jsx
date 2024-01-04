import React from "react";
import RunbookDetail from "../../component/runbookDetail/runbookDetail";
import Sider from "antd/es/layout/Sider";
import { RUNBOOK_DETAIL_DESCRITPTION } from "../../mockdata/mockJson";
import { Button, Col, Row } from "antd";
import { useState } from "react";
import GenreicModal from "../../component/modal/modal";
import "./index.css";
import { Empty } from "antd";
const Index = () => {
  const [runbookProcessId, setRunbookProcessId] = useState(21);

  return (
    <div style={{ display: "flex" }}>
      <RunbookDetail runbookProcessId={runbookProcessId} />
      <Sider className="sider-primary sider right-sider">
        <Col className="mt-1" style={{display:'flex', flexDirection:'column', gap:'10px'}}>
          <p className="font-sans text-sm ">{RUNBOOK_DETAIL_DESCRITPTION.runbook.name}</p>
          <p className="font-sans text-sm font-primary">{RUNBOOK_DETAIL_DESCRITPTION.runbook.version}</p>
        </Col>
        <Empty description={false} />
        <Row style={{gap:"10px"}}>
          <GenreicModal
            buttonText={"Automation"}
            modalTitle={"Automation"}
            modalContent={"Content"}
          />
          <Button>Delete</Button>
        </Row>
      </Sider>
    </div>
  );
};

export default Index;
