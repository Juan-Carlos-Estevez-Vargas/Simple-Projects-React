import { DatePicker, Form, Input, Modal } from "antd";
import moment from "moment";
import React from "react";
import PropTypes from "prop-types";

/**
 * Renders a modal for creating or editing an expense record.
 *
 * @param {boolean} modalVisible - Flag to indicate if the modal is visible.
 * @param {Function} setModalVisible - Function to set the visibility of the modal.
 * @param {Function} handleAdd - Function to handle adding a new expense record.
 * @param {Object} newExpense - The new expense record data.
 * @param {Function} setNewExpense - Function to set the new expense record data.
 * @param {Object} editingRecord - The expense record being edited.
 * @param {Function} setEditingRecord - Function to set the editing expense record.
 * @param {Function} handleUpdateRecord - Function to handle updating an expense record.
 * @return {JSX.Element} The rendered modal for creating or editing an expense record.
 */
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
              editingRecord
                ? setEditingRecord({
                    ...editingRecord,
                    date,
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

CreateModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  newExpense: PropTypes.object.isRequired,
  setNewExpense: PropTypes.func.isRequired,
  editingRecord: PropTypes.object,
  setEditingRecord: PropTypes.func,
  handleUpdateRecord: PropTypes.func.isRequired,
};

export default CreateModal;
