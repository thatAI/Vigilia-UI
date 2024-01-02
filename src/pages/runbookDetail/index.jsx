import React from "react";
import RunbookDetail from "../../component/runbookDetail/runbookDetail";
import Sider from "antd/es/layout/Sider";
import { RUNBOOK_DETAIL_DESCRITPTION } from "../../mockdata/mockJson";
import { Col } from "antd";
import { useState } from "react";

const Index = () => {
    const [runbookProcessId , setRunbookProcessId] = useState(21);
    const runbookHandler = (processID)=>{
        setRunbookProcessId(processID)
    }
    const documents = [
      { uri: 'path-to-your-doc-file.doc', fileType: 'doc' },
      // Add more documents if needed
    ];
  return (
    <div style={{ display: "flex" }}>
      <RunbookDetail runbookProcessId={runbookProcessId}/>
      <Sider className="sider-primary sider" style={{ minHeight: "100vh" }}>
        {RUNBOOK_DETAIL_DESCRITPTION?.processes.map((data, index) => (
          <div onClick={()=>runbookHandler(data.runbookprocessid)} className="border-primary p-2 text-sm font-sans" key={index}  style={{cursor:"pointer", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {data.name} 
          </div>
        ))}
      </Sider>
    </div>
  );
};

export default Index;
