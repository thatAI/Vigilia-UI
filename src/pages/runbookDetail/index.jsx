import React from "react";
import RunbookDetail from "../../component/runbookDetail/runbookDetail";
import Sider from "antd/es/layout/Sider";
import { RUNBOOK_DETAIL_DESCRITPTION } from "../../mockdata/mockJson";
import { Button, Col, Row } from "antd";
import { useState } from "react";
import GenreicModal from "../../component/modal/modal";
import "./index.css";
import { Empty } from "antd";
import { useEffect } from "react";
const Index = ({isSider}) => {
  const [runbookProcessId, setRunbookProcessId] = useState(21);
  useEffect(()=>{
    isSider(true)
  },[])
  return (
    <Row style={{ display: "flex"  }}>
      <RunbookDetail runbookProcessId={runbookProcessId} />
    </Row>
  );
};

export default Index;
