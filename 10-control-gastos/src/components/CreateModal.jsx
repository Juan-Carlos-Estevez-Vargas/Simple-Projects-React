import { DatePicker, Form, Input, Modal } from "antd";
import moment from "moment";
import React from "react";

const CreateModal = ({
  modalVisible,
  setModalVisible,
  handleAdd,
  newExpense,
  setNewExpense,
  editingRecord,
  setEditingRecord,
  handleUpdateRecord,
}) => {
  return (
    <Modal
      title={editingRecord ? "Editar Gasto" : "Agregar Gasto"}
      visible={modalVisible}
      onOk={editingRecord ? handleUpdateRecord : handleAdd}
      onCancel={() => {
        setModalVisible(false);
        setEditingRecord(null);
      }}
    >
      <Form>
        <Form.Item label="Fecha">
          <DatePicker
            value={
              editingRecord
                ? moment(editingRecord?.date)
                : moment(newExpense?.date)
            }
            onChange={(date) =>
              setEditingRecord
                ? setEditingRecord({
                    ...editingRecord,
                    date: date.format("YYYY-MM-DD"),
                  })
                : setNewExpense({ ...newExpense, date })
            }
          />
        </Form.Item>
        <Form.Item label="Concepto">
          <Input
            value={editingRecord ? editingRecord.concept : newExpense.concept}
            onChange={(e) =>
              setEditingRecord
                ? setEditingRecord({
                    ...editingRecord,
                    concept: e.target.value,
                  })
                : setNewExpense({ ...newExpense, concept: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Monto">
          <Input
            type="number"
            value={editingRecord ? editingRecord.amount : newExpense.amount}
            onChange={(e) =>
              setEditingRecord
                ? setEditingRecord({ ...editingRecord, amount: e.target.value })
                : setNewExpense({ ...newExpense, amount: e.target.value })
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateModal;
