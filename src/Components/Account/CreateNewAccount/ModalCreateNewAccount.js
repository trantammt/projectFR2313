import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from "reactstrap";
import InputForm from "./InputForm";

function ModalCreateNewAccount(props) {
    // gọi lại props từ ngoài truyền vào
    let { showForm, onHandleCloseModal, onHandleCreateNewAccount, listDepartment, model } = props;

    // Hàm xử lý props
    let HandleCloseModal = () => {
        onHandleCloseModal();
    }
    return (
        <Container>
            <br />
            <Modal isOpen={showForm}>
                <ModalHeader>
                    <h3>Create New Account</h3>
                </ModalHeader>
                <ModalBody>
                    <InputForm 
                        onHandleCreateNewAccount={onHandleCreateNewAccount} 
                        dataModel={model} 
                        listDepartment={listDepartment}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={HandleCloseModal}>Close</Button>
                </ModalFooter>
            </Modal>
        </Container>
    )
}

export default ModalCreateNewAccount;