import { Button, Card, Col, Input, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./tableandcardView.css";

const TableandcardView = () => {
  const [isCardView, setIsCardView] = useState();
  const data = [
    {
      key: 1,
      title: "AWS S3",
      date: "September 28 2023",
      description:
        "Ensure that the Amazon S3 service is configured, managed, and operated in accordance",
    },
    {
      key: 2,
      title: "R1",
      date: "September 28 2023",
      description:
        "Ensure that the Amazon S3 service is configured, managed, and operated in accordance",
    },
    {
      key: 3,
      title: "AWS S3",
      date: "September 28 2023",
      description:
        "Ensure that the Amazon S3 service is configured, managed, and operated in accordance",
    },
    {
      key: 4,
      title: "R2",
      date: "September 28 2023",
      description:
        "Ensure that the Amazon S3 service is configured, managed, and operated in accordance",
    },
    {
      key: 5,
      title: "AWS S3",
      date: "September 28 2023",
      description:
        "Ensure that the Amazon S3 service is configured, managed, and operated in accordance",
    },
  ];
  const handleCardView = () => {
    setIsCardView(!isCardView);
  };
  return (
    <div>
      {/* search Handler div */}
      <Row className="search-import-div">
        <div style={{ gap: "20px", display: "flex" }}>
          <Button
            type="primary"
            className="import-button-dashboard"
            style={{ marginLeft: "31px" }}
          >
            IMPORT
          </Button>
          <Input
            className="search-runbooks"
            addonBefore={<SearchOutlined />}
            placeholder="Search Runbooks"
          />
        </div>
        <div style={{ gap: "20px", display: "flex" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M1.14555 22.888L1.53067 22.5729L1.14556 22.888C1.56896 23.4055 2.16727 23.7222 2.81818 23.7222H39.1818C39.8327 23.7222 40.431 23.4055 40.8544 22.888C41.2756 22.3733 41.5 21.6931 41.5 21C41.5 20.3069 41.2756 19.6267 40.8544 19.112C40.431 18.5945 39.8327 18.2778 39.1818 18.2778H2.81818C2.16727 18.2778 1.56896 18.5945 1.14556 19.112C0.724432 19.6267 0.5 20.3069 0.5 21C0.5 21.6931 0.724432 22.3733 1.14555 22.888ZM1.14555 36.8898C0.724432 37.4045 0.5 38.0846 0.5 38.7778C0.5 39.4709 0.724432 40.151 1.14555 40.6657C1.56896 41.1832 2.16728 41.5 2.81818 41.5H39.1818C39.8327 41.5 40.431 41.1832 40.8544 40.6657C41.2756 40.151 41.5 39.4709 41.5 38.7778C41.5 38.0846 41.2756 37.4045 40.8544 36.8898C40.431 36.3723 39.8327 36.0556 39.1818 36.0556H2.81818C2.16728 36.0556 1.56896 36.3723 1.14555 36.8898ZM1.14555 1.33426C0.724432 1.84896 0.5 2.52909 0.5 3.22222C0.5 3.91535 0.724432 4.59548 1.14555 5.11019C1.56896 5.62769 2.16727 5.94444 2.81818 5.94444H39.1818C39.8327 5.94444 40.431 5.62769 40.8544 5.11019C41.2756 4.59548 41.5 3.91535 41.5 3.22222C41.5 2.52909 41.2756 1.84896 40.8544 1.33426C40.431 0.816757 39.8327 0.5 39.1818 0.5H2.81818C2.16727 0.5 1.56896 0.816758 1.14555 1.33426Z"
              fill="#FBC001"
              stroke="#FBC001"
            />
          </svg>
          <svg
            onClick={handleCardView}
            style={{ cursor: "pointer", marginRight: "31px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clip-path="url(#clip0_15_229)">
              <path
                d="M0 5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0L35 0C36.3261 0 37.5979 0.526784 38.5355 1.46447C39.4732 2.40215 40 3.67392 40 5V35C40 36.3261 39.4732 37.5979 38.5355 38.5355C37.5979 39.4732 36.3261 40 35 40H5C3.67392 40 2.40215 39.4732 1.46447 38.5355C0.526784 37.5979 0 36.3261 0 35V5ZM37.5 10H27.5V17.5H37.5V10ZM37.5 20H27.5V27.5H37.5V20ZM37.5 30H27.5V37.5H35C35.663 37.5 36.2989 37.2366 36.7678 36.7678C37.2366 36.2989 37.5 35.663 37.5 35V30ZM25 37.5V30H15V37.5H25ZM12.5 37.5V30H2.5V35C2.5 35.663 2.76339 36.2989 3.23223 36.7678C3.70107 37.2366 4.33696 37.5 5 37.5H12.5ZM2.5 27.5H12.5V20H2.5V27.5ZM2.5 17.5H12.5V10H2.5V17.5ZM15 10V17.5H25V10H15ZM25 20H15V27.5H25V20Z"
                fill="#FBC001"
              />
            </g>
            <defs>
              <clipPath id="clip0_15_229">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </Row>

      {/* table and card view condition render  and on right side editable box */}

      <Row style={{ height: "auto", paddingLeft: "30px" }}>
        {isCardView && (
          <Col className="card-container-aws" span={18}>
            {/* Table and card view on conditionm basis */}

            {data.map((data, index) => (
              <Card
                key={index}
                bordered={false}
                style={{
                  width: 300,
                  height: "auto",
                  textAlign: "left",
                  background: "#282525",
                  boxShadow: "0px 4px 19px 0px #000",
                }}
              >
                <p className="card-aws-title">{data.title}</p>
                <p className="card-aws-date">{data.date}</p>
                <p className="card-aws-description">{data.description}</p>
                <img
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    textAlign: "right",
                  }}
                  src="/eye.png"
                  alt="eye"
                  />
                  </Card>
            ))}
          </Col>
        )}
        {!isCardView && (
          <Col className="card-container-aws" span={18}>
            <Row
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#282525",
                boxShadow: " 0px 4px 19px 0px #000",
              }}
            >
              <div style={{ display: "flex", gap: "80px" }}>
                <p className="table-aws-title">NAME</p>
                <p className="table-aws-date">DATE IMPORTED</p>
              </div>
            </Row>
            {data.map((data, index) => (
              <Row
                style={{
                  marginBottom: "2px",
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#282525",
                  boxShadow: " 0px 4px 19px 0px #000",
                }}
              >
                <div style={{ display: "flex", gap: "80px" }}>
                  <p className="table-aws-title">{data.title}</p>
                  <p className="table-aws-date">{data.date}</p>
                </div>
                <img
                  style={{
                    marginRight: "30px",
                  }}
                  src="/eye.png"
                  alt="eye"
                />
              </Row>
            ))}
          </Col>
        )}
        <Col span={6}>{/*  right side sider  */}</Col>
      </Row>
    </div>
  );
};

export default TableandcardView;
