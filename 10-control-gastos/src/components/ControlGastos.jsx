import React from "react";
import { message, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import HeaderApp from "./HeaderApp";
import FooterApp from "./FooterApp";
import TableApp from "./TableApp";
import CreateModal from "./CreateModal";
import DeleteModal from "./DeleteModal";
import { dataApp, generateColumns, initializaEmptyExpense } from "../utils/utils";

const ControlGastos = () => {
  const [keyToDelete, setKeyToDelete] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);
  const [editingRecord, setEditingRecord] = React.useState(initializaEmptyExpense);
  const [newExpense, setNewExpense] = React.useState(initializaEmptyExpense);
  const [data, setData] = React.useState(dataApp);

  const handleDelete = (key) => {
    setKeyToDelete(key);
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    console.log(keyToDelete);
    setData(data.filter((item) => item.key !== keyToDelete));
    setDeleteModalVisible(false);
    setKeyToDelete(null);
    message.success("El registro se ha eliminado con éxito");
  };

  const handleAdd = () => {
    setData([...data, { ...newExpense, key: (data.length + 1).toString() }]);
    setModalVisible(false);
    setNewExpense(initializaEmptyExpense);
    message.success("El registro se ha agregado con éxito");
  };

  const handleUpdate = (key) => {
    setEditingRecord(data.find((item) => item.key === key));
    setModalVisible(true);
  };

  const handleUpdateRecord = () => {
    setData(
      data.map((item) => {
        if (item.key === editingRecord.key) {
          return {
            ...item,
            date: editingRecord.date,
            concept: editingRecord.concept,
            amount: editingRecord.amount,
          };
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
          <br /><br />
          <TableApp
            columns={generateColumns(handleDelete, handleUpdate)}
            data={data}
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
