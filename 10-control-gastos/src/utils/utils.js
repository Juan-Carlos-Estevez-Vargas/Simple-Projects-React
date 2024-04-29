import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Space } from "antd";
import moment from "moment";

export const dataApp = [
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
  {
    key: "4",
    date: "2022-01-04",
    concept: "Casa",
    amount: 300,
  },
  {
    key: "5",
    date: "2022-01-05",
    concept: "Comida",
    amount: 400,
  },
  {
    key: "6",
    date: "2022-01-06",
    concept: "Comida",
    amount: 500,
  },
  {
    key: "7",
    date: "2022-01-07",
    concept: "Comida",
    amount: 600,
  },
  {
    key: "8",
    date: "2022-01-08",
    concept: "Comida",
    amount: 700,
  },
  {
    key: "9",
    date: "2022-01-09",
    concept: "Comida",
    amount: 800,
  },
  {
    key: "10",
    date: "2022-01-10",
    concept: "Comida",
    amount: 900,
  },
  {
    key: "11",
    date: "2022-01-11",
    concept: "Comida",
    amount: 1000,
  },
  {
    key: "12",
    date: "2022-01-12",
    concept: "Comida",
    amount: 1100,
  },
  {
    key: "13",
    date: "2022-01-13",
    concept: "Comida",
    amount: 1200,
  },
];

/**
 * Generates an array of column objects for a table component. Each column object contains
 * properties such as title, dataIndex, key, render, and width. The render function is used to
 * render custom components for each cell in the column. The handleDelete and handleUpdate
 * functions are passed as parameters and are used to handle delete and update actions for each
 * row in the table.
 *
 * @param {function} handleDelete - A function that handles the delete action for a row. It
 * takes the key of the row as a parameter.
 * @param {function} handleUpdate - A function that handles the update action for a row. It
 * takes the key of the row as a parameter.
 * @return {Array} An array of column objects.
 */
export const generateColumns = (handleDelete, handleUpdate) => {
  return [
    {
      title: "Fecha",
      dataIndex: "date",
      key: "date",
      render: (date) => <DatePicker value={moment(date)} editable={false} />,
      width: 150,
    },
    {
      title: "Concepto",
      dataIndex: "concept",
      key: "concept",
      render: (concept) => <Input value={concept} editable={false} />,
    },
    {
      title: "Monto",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => (
        <Input value={amount} type="number" editable={false} />
      ),
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
            onClick={() => handleUpdate(record.key)}
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
};

export const initializaEmptyExpense = {
  date: moment(),
  concept: "",
  amount: 0,
};
