import React from "react";
import { Modal } from "semantic-ui-react";
import PropsTypes from "prop-types";

function ModalView(props) {
  const {
    closeOnEscape = true,
    closeOnDimmerClick = true,
    open = false,
    dimmer = true,
    toggleModal,
    headerContent,
    bodyContent,
    actionContent
  } = props;

  return (
    <Modal
      closeOnEscape={closeOnEscape}
      closeOnDimmerClick={closeOnDimmerClick}
      open={open}
      onClose={() => toggleModal(false)}
      dimmer={dimmer}
    >
      <Modal.Header>{headerContent}</Modal.Header>
      <Modal.Content>{bodyContent}</Modal.Content>
      <Modal.Actions>{actionContent}</Modal.Actions>
    </Modal>
  );
}

export default ModalView;

ModalView.propTypes = {
  closeOnEscape: PropsTypes.bool,
  closeOnDimmerClick: PropsTypes.bool,
  open: PropsTypes.bool.isRequired,
  dimmer: PropsTypes.bool,
  toggleModal: PropsTypes.func.isRequired,
  headerContent: PropsTypes.node,
  bodyContent: PropsTypes.node,
  actionContent: PropsTypes.node
};
