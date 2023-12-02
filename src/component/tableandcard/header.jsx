import { Card, Row } from 'antd'
import React from 'react'

const TableAndCardViewHeader = () => {
  return (
    <Row className="total-runbook">
    <Card
      
      bordered={false}
      style={{
        width: 300,
        height: 160,
        marginLeft: 40,
        background: "#282525"
      }}
    >
      <p className="total-runbook-15">15</p>
      <p className="total-runbook-text">TOTAL RUNBOOKS</p>
    </Card>
  </Row>
  )
}

export default TableAndCardViewHeader
