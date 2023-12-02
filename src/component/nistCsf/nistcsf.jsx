import {   Card, Col, Row } from "antd";
import React from "react";
import "./nistcsf.css";
import { NIST_MOCK_DATA } from "../../mockdata/mockJson";
import {getColorByRange} from "../../utils"
const Nistcsf = () => {
  return (
    <Row className="nist-container">
      <Row className="bg-priamry font-primary nist-header">
        <p className="text-2xl md:text-xl">NIST Cybersecurity Framework</p>
      </Row>
      <Row className="vendor-runbook-container">
        <div className="vendor-runbook p-1 border-primary text-base font-secondary">
        <p>Vendor: AWS</p>
        </div>
        <div className="vendor-runbook p-1 border-primary text-base font-secondary">
        <p>Runbook: 4 </p>
        </div>
      </Row>
      <Row className="nist-card-container">
        {NIST_MOCK_DATA.map((data, index) => (
          <Card
            key={index}
            title={
              <Row className="font-secondary">
                <Col span={12} align="left" className="mt-1">
                  <p
                    className={`summary-category category-options-${data.summary.category}`}
                  >
                    {data.summary.category}
                  </p>
                </Col>
                <Col span={12}>
                  <Row>
                    <Col span={8}>
                      <p>{data.summary.policies}</p>
                      <span>Policies</span>
                    </Col>
                    <Col span={8}>
                      <p>{data.summary.runbooks} </p>
                      <span>Runbooks</span>
                    </Col>
                    <Col span={8}>
                      <p
                        style={{
                          color: getColorByRange(data.summary.compilance),
                        }}
                      >
                        {data.summary.compilance}%{" "}
                      </p>
                      <span
                        style={{
                          color: getColorByRange(data.summary.compilance),
                        }}
                      >
                        Compilances
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            }
            className="nist-card bg-secondary"
          >
            {data?.categories.map((data, index) => (
              <Row key={index} className="font-default p-1">
                <Col span={12} align="left">
                  <p>{data.category}</p>
                </Col>
                <Col span={12}>
                  <Row>
                    <Col span={8}>
                      <p>{data.policy} </p>
                    </Col>
                    <Col span={8}>
                      <p>{data.runbook} </p>
                    </Col>
                    <Col span={8}>
                      <p style={{ color: getColorByRange(data?.compilance) }}>
                        {data?.compilance === 0 ? "NA" : `${data?.compilance}%`}{" "}
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}
          </Card>
        ))}
      </Row>
    
    </Row>
  );
};

export default Nistcsf;
