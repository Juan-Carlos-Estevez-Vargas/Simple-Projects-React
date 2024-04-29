import React from "react";
import { message, Layout, Input, Row, Col } from "antd";
import { Content } from "antd/es/layout/layout";
import HeaderApp from "./HeaderApp";
import FooterApp from "./FooterApp";
import TableApp from "./TableApp";
import CreateModal from "./CreateModal";
import DeleteModal from "./DeleteModal";
import {
  dataApp,
  generateColumns,
  initializaEmptyExpense,
} from "../utils/utils";

const ControlGastos = () => {
  const [keyToDelete, setKeyToDelete] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);
  const [editingRecord, setEditingRecord] = React.useState(
    initializaEmptyExpense
  );
  const [newExpense, setNewExpense] = React.useState(initializaEmptyExpense);
  const [data, setData] = React.useState(dataApp);

  /**
   * Updates the key to delete and sets the delete modal visibility to true.
   *
   * @param {type} key - The key of the item to delete
   */
  const handleDelete = (key) => {
    setKeyToDelete(key);
    setDeleteModalVisible(true);
  };

  /**
   * Confirms the deletion of a record and updates the data state.
   */
  const confirmDelete = () => {
    console.log(keyToDelete);
    setData(data.filter((item) => item.key !== keyToDelete));
    setDeleteModalVisible(false);
    setKeyToDelete(null);
    message.success("El registro se ha eliminado con éxito");
  };

  /**
   * Adds a new expense record to the data state, sets the visibility of the modal to false,
   * resets the newExpense state to an empty expense record, and displays a success message.
   */
  const handleAdd = () => {
    setData([...data, { ...newExpense, key: (data.length + 1).toString() }]);
    setModalVisible(false);
    setNewExpense(initializaEmptyExpense);
    message.success("El registro se ha agregado con éxito");
  };

  /**
   * Updates the editing record and sets the visibility of the modal to true.
   *
   * @param {string} key - The key of the item to update
   */
  const handleUpdate = (key) => {
    setEditingRecord(data.find((item) => item.key === key));
    setModalVisible(true);
  };

  /**
   * Updates the data state with the edited record and sets the visibility of the modal to false,
   * resets the editingRecord state to null, and displays a success message.
   */
  const handleUpdateRecord = () => {
    setData(
      data.map((item) => {
        if (item.key === editingRecord.key) {
          return editingRecord;
        }
        return item;
      })
    );
    setModalVisible(false);
    setEditingRecord(null);
    message.success("El registro se ha editado con éxito");
  };

  return (
    <Layout>
      <HeaderApp {...{ setModalVisible }} />
      <Layout>
        <Content>
          <br />
          <Row justify={"center"}>
            <Col xs={20} md={16} lg={14} xl={12}>
              <Input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
          </Row>
          <br />

          <TableApp
            columns={generateColumns(handleDelete, handleUpdate)}
            data={data.filter((item) =>
              Object.values(item).some((value) =>
                value
                  .toString()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
            )}
          />
          <CreateModal
            {...{
              modalVisible,
              setModalVisible,
              handleAdd,
              newExpense,
              setNewExpense,
              editingRecord,
              setEditingRecord,
              handleUpdateRecord,
            }}
          />
          <DeleteModal
            {...{
              deleteModalVisible,
              setDeleteModalVisible,
              confirmDelete,
            }}
          />
        </Content>
      </Layout>
      <FooterApp />
    </Layout>
  );
};

export default ControlGastos;
