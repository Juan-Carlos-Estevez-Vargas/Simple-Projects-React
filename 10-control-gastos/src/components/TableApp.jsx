import { Col, Row, Table } from "antd";
import React from "react";

const TableApp = ({ columns, data }) => {
  return (
    <Row justify={"center"}>
      <Col xs={24} sm={24} md={22} lg={20} xl={18}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            position: ["bottomCenter"],
            pageSizeOptions: [5, 10, 15],
            showQuickJumper: true,
            showSizeChanger: true,
          }}
          footer={() => "Total: " + data.length}
        />
      </Col>
    </Row>
  );
};

export default TableApp;
