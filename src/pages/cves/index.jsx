import React from "react";
import "./index.css";
// import doc from "./Runbook.docx"
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
// const Index = () => {
//   const docs = [
//     { uri: "https://runbook-store.surge.sh/docs/Runbooklink.docx" },
//   ];
//   return <div>
//     <DocViewer
//       config={{
//         header: {
//           disableHeader: true,
//           disableFileName: true,
//           retainURLParams: true,
//         },
//       }}
//       className="runbook-doc-viewer"
//       style={{ height: "90vh" }} documents={docs} pluginRenderers={DocViewerRenderers} onError={(err) => console.error('Document rendering error:', err)} />
//     {/* <FileViewer
//         fileType={"docx"}
//         filePath={"http://localhost:3000/docs/Runbook.docx"} /> */}


//   </div>
import Cves from "../../component/cves/cves";

const Index = () => {
  return <Cves/> ;
};

export default Index;
