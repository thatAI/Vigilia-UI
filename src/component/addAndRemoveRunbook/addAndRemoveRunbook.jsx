import { Button, Modal, Row } from 'antd'
import React from 'react'
import GenreicModal from '../modal/modal'
import ModalContent from '../modal/modalContent'

const AddAndRemoveRunbook = () => {
    const showDeleteConfirm = () => {
        Modal.confirm({
          title: 'Confirm Deletion',
          content: 'Are you sure you want to delete this runbook?',
          onOk() {
            
          },
          onCancel() {
         
          },
        });
      };
  return (
    <Row style={{gap:"10px"}}>
    <GenreicModal
      buttonText={"Automation"}
      modalTitle={"Automation"}
      modalContent={<ModalContent/>}
    />
    <Button  type="primary" danger ghost onClick={showDeleteConfirm}>Delete</Button>
  </Row>
  )
}

export default AddAndRemoveRunbook
