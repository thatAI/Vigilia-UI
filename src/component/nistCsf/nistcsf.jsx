import { Card, Col, Row } from "antd";
import React from "react";
import "./nistcsf.css";
import { NIST_MOCK_DATA } from "../../mockdata/mockJson";
import { getColorByRange } from "../../utils";
const Nistcsf = () => {
  return (
    <Row className="nist-container">
      <Row className="bg-priamry font-primary nist-header">
        <p className="text-xl">NIST Cybersecurity Framework</p>
      </Row>
      <Row className="vendor-runbook-container">
        <div className="vendor-runbook p-1 border-primary text-base font-secondary">
          <p className="text-sm">Vendor: AWS</p>
        </div>
        <div className="vendor-runbook p-1 border-primary text-base font-secondary">
          <p className="text-sm">Runbook: 4 </p>
        </div>
      </Row>
      <Row className="nist-card-container">
        {NIST_MOCK_DATA.map((data, index) => (
          <Card
            key={index}
            title={
              <Row className="font-secondary">
                <Col
                  xl={12}
                  lg={12}
                  md={8}
                  xs={8}
                  sm={8}
                  align="left"
                  className=""
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <p
                    className={`summary-category category-options-${data.summary.category}`}
                  >
                    {data.summary.category}
                  </p>
                </Col>
                <Col xl={12} lg={12} md={16} xs={16} sm={16}>
                  <Row>
                    <Col span={8}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "0px",
                          flexDirection: "column",
                        }}
                      >
                        <p className="text-sm">{data.summary.policies}</p>
                        <span className="text-sm md:text-xs">Policies</span>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "0px",
                          flexDirection: "column",
                        }}
                      >
                        <p className="text-sm">{data.summary.runbooks} </p>
                        <span className="text-sm md:text-xs">Runbooks</span>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "0px",
                          flexDirection: "column",
                        }}
                      >
                        <p
                          className="text-sm"
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
                          className="text-sm md:text-xs"
                        >
                          Compliance
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            }
            className="nist-card bg-secondary"
          >
            {data?.categories.map((data, index) => (
              <Row key={index} className="font-default p-1">
                <Col xl={12} lg={12} md={8} xs={8} sm={8} align="left">
                  <p className="text-sm">{data.category}</p>
                </Col>
                <Col xl={12} lg={12} md={16} xs={16} sm={16}>
                  <Row>
                    <Col span={8}>
                      <p className="text-sm">{data.policy} </p>
                    </Col>
                    <Col span={8}>
                      <p className="text-sm">{data.runbook} </p>
                    </Col>
                    <Col span={8}>
                      <p
                        className="text-sm"
                        style={{ color: getColorByRange(data?.compilance) }}
                      >
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
