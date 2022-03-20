import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function ModalComponent(props) {
    
    function _accountSelected(e) {
        const selectedAccount = props.accounts.find((acc) => {
            return parseInt(acc.id, 10) === e.target.value
        });
        if(selectedAccount !== props.selectedAccount) {
            props.onHide();
            props.selectedAccountChanged(selectedAccount)
        }    
    }

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Select your account
                </Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <ul onClick={(e) => _accountSelected(e)}>
                    {props.accounts.map((account) => {
                        return <li key={account.id} value={account.id}>{account.accountHolder}</li>
                    })}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="primary">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent
