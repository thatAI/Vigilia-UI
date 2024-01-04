import React from 'react'
import { RUNBOOK_DETAIL_DESCRITPTION } from "../../mockdata/mockJson";
import { Button, Col, Row } from "antd";
import { useState } from "react";
import GenreicModal from "../../component/modal/modal";
import "./rightSider.css";
import { Empty } from "antd";
const RightSider = () => {
  return (
    <div className='right-sider-container'>
      <Col className="mt-1" style={{display:'flex', flexDirection:'column', gap:'10px'}}>
          <p className="font-sans text-sm ">{RUNBOOK_DETAIL_DESCRITPTION.runbook.name}</p>
          <p className="font-sans text-sm font-primary">{RUNBOOK_DETAIL_DESCRITPTION.runbook.version}</p>
        </Col>
        <Empty description={'Select automations for runbook'} />
        <Row style={{gap:"10px"}}>
          <GenreicModal
            buttonText={"Automation"}
            modalTitle={"Automation"}
            modalContent={"Select process to add automations"}
          />
          <Button>Delete</Button>
        </Row>
    </div>
  )
}

export default RightSider
