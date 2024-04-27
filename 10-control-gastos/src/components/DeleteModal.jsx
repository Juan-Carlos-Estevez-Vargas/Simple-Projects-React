import { Modal } from "antd";
import React from "react";

const DeleteModal = ({
  deleteModalVisible,
  setDeleteModalVisible,
  confirmDelete,
}) => {
  return (
    <Modal
      title="Confirmar Eliminación"
      visible={deleteModalVisible}
      onOk={() => confirmDelete()}
      onCancel={() => setDeleteModalVisible(false)}
    >
      <p>¿Seguro que quieres eliminar este registro?</p>
    </Modal>
  );
};

export default DeleteModal;
