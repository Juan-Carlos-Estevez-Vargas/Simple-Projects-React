import { DatePicker, Form, Input, Modal } from "antd";
import React from "react";

const CreateModal = ({
  modalVisible,
  setModalVisible,
  handleAdd,
  newExpense,
  setNewExpense,
}) => {
  return (
    <Modal
      title="Agregar Gasto"
      visible={modalVisible}
      onOk={handleAdd}
      onCancel={() => setModalVisible(false)}
    >
      <Form>
        <Form.Item label="Fecha">
          <DatePicker
            value={newExpense.date || null}
            onChange={(date) => setNewExpense({ ...newExpense, date })}
          />
        </Form.Item>
        <Form.Item label="Concepto">
          <Input
            value={newExpense.concept || ""}
            onChange={(e) =>
              setNewExpense({ ...newExpense, concept: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Monto">
          <Input
            type="number"
            value={newExpense.amount || 0}
            onChange={(e) =>
              setNewExpense({ ...newExpense, amount: e.target.value })
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateModal;
