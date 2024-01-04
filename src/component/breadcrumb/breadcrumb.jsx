import React, {  } from "react";
import { useLocation, useParams } from "react-router-dom";

const BreadcrumbComponent = () => {
  const location = useLocation();
  const params = useParams();
  const itemsLocation = [
    {
      path: "/runbook",
      label: "Installed Runbooks",
    },
    {
      path: "/",
      label: "Runbook Store",
    },
    {
      path: "/nist_csf",
      label: "NIST Cybersecurity Framework",
    },
    {
      path: "/cves",
      label: "Cves",
    },
    {
      path: "/policy",
      label: "NIST CSF Policies",
    },
    {
        path:`/runbook/${params?.id}`,
        label:`Installed Runbooks / ${params?.id}`
    }
  ];
  
 

  
  return (
    <div>
      {itemsLocation.map((item, index) => (
         <div key={index}>
         {item.path === location.pathname && (
           <p className="text-xl font-sans">
             {item?.label}
           </p>
         )}
       </div>
      ))}
    </div>
  );
};

export default BreadcrumbComponent;
