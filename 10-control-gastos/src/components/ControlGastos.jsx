import React from "react";
import { Button, DatePicker, Input, message, Space, Layout } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import moment from "moment";
import { Content } from "antd/es/layout/layout";
import HeaderApp from "./HeaderApp";
import FooterApp from "./FooterApp";
import TableApp from "./TableApp";
import CreateModal from "./CreateModal";
import DeleteModal from "./DeleteModal";

const ControlGastos = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);

  const [newExpense, setNewExpense] = React.useState({
    date: moment(),
    concept: "",
    amount: 0,
  });

  const [data, setData] = React.useState([
    {
      key: "1",
      date: "2022-01-01",
      concept: "Comida",
      amount: 500,
    },
    {
      key: "2",
      date: "2022-01-02",
      concept: "Transporte",
      amount: 100,
    },
    {
      key: "3",
      date: "2022-01-03",
      concept: "Alquiler",
      amount: 200,
    },
  ]);

  const columns = [
    {
      title: "Fecha",
      dataIndex: "date",
      key: "date",
      render: (date) => <DatePicker value={moment(date)} disabled />,
      width: 150,
    },
    {
      title: "Concepto",
      dataIndex: "concept",
      key: "concept",
      render: (concept) => <Input value={concept} disabled />,
    },
    {
      title: "Monto",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => <Input value={amount} type="number" disabled />,
    },
    {
      title: "Acciones",
      dataIndex: "",
      key: "action",
      render: (record) => (
        <Space>
          <Button
            ghost
            type="primary"
            onClick={() => handleDelete(record.key)}
            title="Editar"
          >
            <EditOutlined />
          </Button>
          <Button
            danger
            type="primary"
            onClick={() => handleDelete(record.key)}
            title="Eliminar"
          >
            <DeleteOutlined />
          </Button>
        </Space>
      ),
      width: 100,
    },
  ];

  const handleDelete = (key) => {
    setDeleteModalVisible(true);
  };

  const confirmDelete = (key) => {
    setData(data.filter((item) => item.key !== key));
    setDeleteModalVisible(false);
    message.success("El registro se ha eliminado con éxito");
  };

  const handleAdd = () => {
    setData([...data, { ...newExpense, key: (data.length + 1).toString() }]);
    setModalVisible(false);
    setNewExpense({
      date: moment(),
      concept: "",
      amount: 0,
    });
    message.success("El registro se ha agregado con éxito");
  };

  return (
    <Layout>
      <HeaderApp {...{ setModalVisible }} />
      <Layout>
        <Content>
          <TableApp columns={columns} data={data} />
          <CreateModal
            {...{
              modalVisible,
              setModalVisible,
              handleAdd,
              newExpense,
              setNewExpense,
            }}
          />
          <DeleteModal
            {...{
              deleteModalVisible,
              setDeleteModalVisible,
              newExpense,
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
