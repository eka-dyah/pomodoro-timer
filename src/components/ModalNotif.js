import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const ModalNotif = (props) => (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>
            Time's Up
        </ModalHeader>
        <ModalBody>
            Would you proceed to next session?
        </ModalBody>
        <ModalFooter>
            <button className="btn btn-primary" onClick={props.next}>Next</button>
            <button className="btn btn-secondary" onClick={props.toggle}>Cancel</button>
        </ModalFooter>
    </Modal>
);

export default ModalNotif;