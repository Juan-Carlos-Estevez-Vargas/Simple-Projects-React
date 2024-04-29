import { Modal } from "antd";
import React from "react";
import PropTypes from "prop-types";

/**
 * Renders a modal for confirming deletion.
 *
 * @param {boolean} deleteModalVisible - Flag to indicate if the delete modal is visible.
 * @param {Function} setDeleteModalVisible - Function to set the visibility of the delete modal.
 * @param {Function} confirmDelete - Function to confirm the deletion.
 * @return {JSX.Element} The rendered modal for confirming deletion.
 */
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

DeleteModal.propTypes = {
  deleteModalVisible: PropTypes.bool.isRequired,
  setDeleteModalVisible: PropTypes.func.isRequired,
  confirmDelete: PropTypes.func.isRequired,
};

export default DeleteModal;
