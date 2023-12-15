import React from "react";
import "./policy.css";
import { NIST_CSF_POLICIES } from "../../mockdata/mockJson";
import { Card, Col, Row } from "antd";
const Policy = () => {
  return (
    <div className="policy-container">
      
        <Row className="bg-priamry font-primary policy-header">
          <p className="text-xl font-sans">NIST CSF Policies</p>
        </Row>
        <Row className="policy-card-container">
          {NIST_CSF_POLICIES.map((data, index) => (
            <Card
              key={index}
              title={
                <Row className="font-secondary">
                  <Col
                    span={12}
                    align="left"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <p
                      className={`summary-category category-options-${data.summary.category}`}
                    >
                      {data.summary.category}
                    </p>
                  </Col>
                  <Col span={12} style={{ textAlign: "center" }}>
                    <p className="text-sm lg:text-xs">{data.summary.totalPolicies}</p>
                    <span className="text-sm lg:text-xs">Policies</span>
                  </Col>
                </Row>
              }
              className="policy-card bg-secondary"
            >
              {data?.policies.map((data, index) => (
                <Row key={index} className="font-default p-1">
                  <Col span={12} align="left">
                    <p className="text-sm  lg:text-xs">{data.category}</p>
                  </Col>
                  <Col span={12} style={{ textAlign: "center" }}>
                    <p className="text-sm lg:text-xs">{data.policies} </p>
                  </Col>
                </Row>
              ))}
            </Card>
          ))}
        </Row>
      
    </div>
  );
};

export default Policy;
