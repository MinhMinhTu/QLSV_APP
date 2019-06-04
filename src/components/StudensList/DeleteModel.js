import React, {Component} from 'react'


// or less ideally
import { Button ,Modal} from 'react-bootstrap';
class DeleteModel extends Component {
    constructor(props) {
        super(props);
    }

    handleYes =()=>{
        this.props.handleClose(true)
    }
    handleNo=()=>{
        this.props.handleClose(false)
    }

    render() {
        return (
            <>
                <Modal show={this.props.isShowModal}>
                    <Modal.Header>
                        <Modal.Title>Are you sure delete?</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleYes}>
                            Yes
                    </Button>
                        <Button variant="second" onClick={this.handleNo}>
                            No
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default DeleteModel;