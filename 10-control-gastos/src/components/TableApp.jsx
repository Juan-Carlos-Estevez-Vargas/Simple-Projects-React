import { Col, Row, Table } from "antd";
import React from "react";
import PropTypes from "prop-types";

/**
 * Renders a table component with the provided columns and data.
 *
 * @param {Object[]} columns - An array of objects representing the columns of the table.
 * @param {Object[]} data - An array of objects representing the data to be displayed in the table.
 * @return {JSX.Element} - The rendered table component.
 */
const TableApp = ({ columns, data }) => {
  return (
    <Row justify={"center"}>
      <Col md={22} lg={20} xl={18}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            position: ["bottomCenter"],
            pageSizeOptions: [5, 10, 15],
            showQuickJumper: true,
            showSizeChanger: true,
            showTotal: (total) => `Total ${total} items`,
          }}
        />
      </Col>
    </Row>
  );
};

TableApp.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default TableApp;
