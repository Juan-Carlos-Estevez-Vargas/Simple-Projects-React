import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import PropTypes from "prop-types";
import "../styles/HeaderApp.css";

/**
 * Renders the HeaderApp component with the title "Control de Gastos" and a button to set the modal visibility.
 *
 * @param {Function} setModalVisible - Function to set the visibility of the modal.
 * @return {JSX.Element} The rendered HeaderApp component.
 */
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

HeaderApp.propTypes = {
  setModalVisible: PropTypes.func.isRequired,
};

export default HeaderApp;
