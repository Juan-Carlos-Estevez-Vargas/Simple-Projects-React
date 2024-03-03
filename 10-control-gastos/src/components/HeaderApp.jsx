import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";

const HeaderApp = ({ setModalVisible }) => {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white" }}>Control de Gastos</h1>

      <Button type="primary" onClick={() => setModalVisible(true)}>
        <PlusOutlined /> Agregar
      </Button>
    </Header>
  );
};

export default HeaderApp;
