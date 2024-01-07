import React from "react";
import BreadcrumbComponent from "../breadcrumb/breadcrumb";
import "./runbookDetail.css";
import { RUNBOOK_DETAIL_DESCRITPTION } from "../../mockdata/mockJson";
import { Button, Card, Col, Row } from "antd";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useState } from "react";
import GenreicModal from "../modal/modal";
import ModalContent from  "../modal/modalContent"

const RunbookDetail = ({ runbookProcessId }) => {
  const docs = [
    {
      uri: "https://runbook-store.surge.sh/docs/Runbook.docx",
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
          <p className="text-3xl" style={{ color: "red" }}>
            2
          </p>
          <p className="text-lh">CVEs</p>
        </Card>
        <Card className="runbook-detail-card border-primary">
          <p className="text-3xl">28%</p>
          <p className="text-lh">of Total CVEs</p>
        </Card>
      </Row>
      <Row className="add-delete-automation">
      <GenreicModal
          buttonText={"Add Automation"}
          modalTitle={"Automation"}
          modalContent={<ModalContent/>}

        />
        <Button>Delete</Button>
      </Row>
      <DocViewer
        config={{
          header: {
            disableHeader: true,
            disableFileName: true,
            retainURLParams: true,
          },
        }}
        className="runbook-doc-viewer"
        
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        onError={(err) => console.error("Document rendering error:", err)}
      />
    </div>
  );
};

export default RunbookDetail;
