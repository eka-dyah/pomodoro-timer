import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const ModalNotif = (props) => (
	<Modal isOpen={props.isOpen} toggle={props.toggle}>
		<div className={`modal-notif ${props.checkedTheme && "Night"}`}>
			<ModalHeader toggle={props.toggle}>Time's Up</ModalHeader>
			<ModalBody>Would you proceed to next session?</ModalBody>
			<ModalFooter>
				<button className="btn btn-primary" onClick={props.next}>
					Next
				</button>
				<button className="btn btn-secondary" onClick={props.toggle}>
					Cancel
				</button>
			</ModalFooter>
		</div>
	</Modal>
);

export default ModalNotif;
