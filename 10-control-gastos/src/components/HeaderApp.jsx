import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import "../styles/HeaderApp.css";

const HeaderApp = ({ setModalVisible }) => {
  return (
    <Header className="header-app">
      <h1 style={{ color: "white" }}>Control de Gastos</h1>
      <Button
        type="primary"
        onClick={() => setModalVisible(true)}
        icon={<PlusOutlined />}
      />
    </Header>
  );
};

export default HeaderApp;
