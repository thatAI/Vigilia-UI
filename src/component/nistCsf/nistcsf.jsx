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
                  xl={10}
                  lg={8}
                  md={6}
                  xs={6}
                  sm={6}
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
                <Col xl={14} lg={16} md={18} xs={18} sm={18}>
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
                        <p className="text-sm lg:text-xs">{data.summary.policies}</p>
                        <span className="text-sm lg:text-xs">Policies</span>
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
                        <p className="text-sm lg:text-xs">{data.summary.runbooks} </p>
                        <span className="text-sm lg:text-xs">Runbooks</span>
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
                          className="text-sm lg:text-xs"
                          style={{
                            color: getColorByRange(data.summary.Compliance),
                          }}
                        >
                          {data.summary.Compliance}%{" "}
                        </p>
                        <span
                          style={{
                            color: getColorByRange(data.summary.Compliance),
                          }}
                          className="text-sm lg:text-xs"
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
                <Col xl={10} lg={8} md={6} xs={6} sm={6} align="left">
                  <p className="text-sm  lg:text-xs">{data.category}</p>
                </Col>
                <Col xl={14} lg={16} md={18} xs={18} sm={18}>
                  <Row>
                    <Col span={8}>
                      <p className="text-sm lg:text-xs">{data.policy} </p>
                    </Col>
                    <Col span={8}>
                      <p className="text-sm lg:text-xs">{data.runbook} </p>
                    </Col>
                    <Col span={8}>
                      <p
                        className="text-sm lg:text-xs"
                        style={{ color: getColorByRange(data?.Compliance) }}
                      >
                        {data?.Compliance === 0 ? "NA" : `${data?.Compliance}%`}{" "}
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
