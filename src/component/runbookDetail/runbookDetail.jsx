import React from "react";
import BreadcrumbComponent from "../breadcrumb/breadcrumb";
import "./runbookDetail.css";
import { RUNBOOK_DETAIL_DESCRITPTION } from "../../mockdata/mockJson";
import { Card, Col, Row } from "antd";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
const RunbookDetail = ({ runbookProcessId }) => {
  const docs = [
    {
      uri: "https://docs.google.com/document/d/1THYYavpDlceHW6UX4YG_xzb8QY-xvHkvuX1jBhzFtjg/edit",
    },
    // {uri : require("../../docs/runbook.docx")}
  ];
  return (
    <div className="runbook-detail-container">
      <Row className="bg-priamry font-primary runbook-detail-header">
        <BreadcrumbComponent />
      </Row>
      <Row className="runbook-detail-card-container">
        <Card className="runbook-detail-card border-primary">
          <p className="text-3xl">
            {RUNBOOK_DETAIL_DESCRITPTION?.counts?.processes}
          </p>
          <p className="text-lh">Processes</p>
        </Card>
        <Card className="runbook-detail-card border-primary">
          <p className="text-3xl">
            {RUNBOOK_DETAIL_DESCRITPTION?.counts?.policies}
          </p>
          <p className="text-lh">NIST CSF Policies</p>
        </Card>
        <Card className="runbook-detail-card border-primary">
          <p className="text-3xl">
            {RUNBOOK_DETAIL_DESCRITPTION?.counts?.subcategories}
          </p>
          <p className="text-lh">NIST CSF Sub-categories</p>
        </Card>
        <Card className="runbook-detail-card border-primary">
          <p className="text-3xl">
            {RUNBOOK_DETAIL_DESCRITPTION?.counts?.controls}
          </p>
          <p className="text-lh">NIST 800-53 controls</p>
        </Card>
        <Card className="runbook-detail-card border-primary">
          <p className="text-3xl">2</p>
          <p className="text-lh">CVEs</p>
        </Card>
        <Card className="runbook-detail-card border-primary">
          <p className="text-3xl">28%</p>
          <p className="text-lh">of Total CVEs</p>
        </Card>
      </Row>
      {/* <Row className="border-primary mt-2 p-2" >
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
                <Row>
                  <p className="font-primary font-sans text-sm">
                    Procedural Steps:{" "}
                  </p>
                </Row>
                <Row >
                  <p className="font-default font-sans text-sm" style={{textAlign:'left'}}>{data.steps.split("\n").map((element, index)=>(
                  
                  <li key={index}>{element}</li>
                  ))}</p>
                </Row>
              </Col>
            )}
          </Row>
        ))}
      </Row> */}
      <div>
        <DocViewer
          config={{
            header: {
              disableHeader: true,
              disableFileName: true,
              retainURLParams: true,
            },
          }}
          className="runbook-doc-viewer"
          style={{ height: "90vh" }}
          documents={docs}
          pluginRenderers={DocViewerRenderers}
          onError={(err) => console.error("Document rendering error:", err)}
        />
        {/* <FileViewer
        fileType={"docx"}
        filePath={"http://localhost:3000/docs/Runbook.docx"} /> */}
      </div>
    </div>
  );
};

export default RunbookDetail;
