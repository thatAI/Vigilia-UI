import React from 'react'
import { RUNBOOK_DETAIL_DESCRITPTION } from "../../mockdata/mockJson";
import { Col, Row } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
const Index = ({isSider}) => {
  useEffect(()=>{
    isSider(false)
  },[])
    // function parseHTMLString(htmlString) {
  //   const lines = htmlString.split('\n').filter(line => line.trim() !== '');
  
  //   const jsonStructure = [];
  //   let currentParent = jsonStructure;
  
  //   lines.forEach(line => {
  //     const matches = line.match(/<li>(.*):<\/li>/);
  
  //     if (matches) {
  //       const text = matches[1].trim();
  //       const newItem = { text };
  //       currentParent.push(newItem);
  
  //       newItem.children = [];
  //       currentParent = newItem.children;
  //     }
  //   });
  //   console.log(JSON.stringify({ items: jsonStructure }, null, 2))
  //   return generateHTMLFromJSON(jsonStructure);
  // }
  // function generateHTMLFromJSON(jsonStructure, isTopLevel = true) {
  //   let htmlString = isTopLevel ? '<ol>' : '<ul>';
  
  //   jsonStructure.forEach(item => {
  //     htmlString += `<li>${item.text}`;
      
  //     if (item.children && item.children.length > 0) {
  //       htmlString += generateHTMLFromJSON(item.children, false);
  //     }
  
  //     htmlString += `</li>`;
  //   });
  
  //   htmlString += isTopLevel ? '</ol>' : '</ul>';
  //   return htmlString;
  // }
  function parseHTMLString(htmlString) {
    const lines = htmlString
      .replace(/<\/li>/g, '</li>\n') // Add newlines after closing </li> tags
      .split('\n')
      .filter(line => line.trim() !== '');
  
    const jsonStructure = [];
    let currentParent = jsonStructure;
  
    lines.forEach(line => {
      const matches = line.match(/<li>(.*):<\/li>/);
  
      if (matches) {
        const text = matches[1].trim();
        const newItem = { text };
        currentParent.push(newItem);
  
        newItem.children = [];
        currentParent = newItem.children;
      }
    });
    console.log(JSON.stringify({ items: jsonStructure }, null, 2))
    return jsonStructure;
  }
  const [runbookProcessId , setRunbookProcessId] = useState(21);
    const runbookHandler = (processID)=>{
        setRunbookProcessId(processID)
    }
  return (
    <div style={{ display: "flex" }}>
      <Row className="border-primary mt-2 p-2" >
        {RUNBOOK_DETAIL_DESCRITPTION?.processes.map((data, index) => (
          <Row key={index}>
            {data?.runbookprocessid === runbookProcessId && (
              <Col>
                <Row>
               
                  <p className="font-primary font-sans text-xl">{data.name}</p>
                </Row>
                <Row>
                  <p className="font-primary font-sans text-sm">Purpose:</p>
                </Row>
                <Row>
                  <p className="font-default font-sans text-sm">
                    {data.purpose}
                  </p>
                </Row>
                <Row>
                  <p className="font-primary font-sans text-sm">
                    FIPS 199 Security Categorization:
                  </p>
                </Row>
                <Row>
                  <p className="font-default font-sans text-sm">
                    {data.seccat}
                  </p>
                </Row>
                <Row >
                  <p className="font-primary font-sans text-sm">
                    Procedural Steps:{" "}
                  </p>
                  
                 
                </Row>
                <div dangerouslySetInnerHTML={{ __html:parseHTMLString( data.steps)  }}></div>
              </Col>
            )}
          </Row>
        ))}
      </Row>
      
      {/* <Sider className="sider-primary sider" style={{ minHeight: "100vh" }}>
        {RUNBOOK_DETAIL_DESCRITPTION?.processes.map((data, index) => (
          <div onClick={()=>runbookHandler(data.runbookprocessid)} className="border-primary p-2 text-sm font-sans" key={index}  style={{cursor:"pointer", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {data.name} 
          </div>
        ))}
      </Sider> */}
    </div>
  )
}

export default Index
