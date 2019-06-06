import React  from 'react'

import { Button ,Modal} from 'react-bootstrap';
function DeleteModel (props) {
    const handleYes =()=>{
    props.handleClose(true)
    }
    const handleNo=()=>{
        props.handleClose(false)
    }

        return (
            <>
                <Modal show={props.isShowModal}>
                    <Modal.Header>
                        <Modal.Title>Are you sure delete?</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleYes}>
                            Yes
                    </Button>
                        <Button variant="second" onClick={handleNo}>
                            No
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
}

export default DeleteModel;