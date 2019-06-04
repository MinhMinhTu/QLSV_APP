import React, { Component } from 'react'

import { Button } from 'reactstrap';
import axios from 'axios'
import 'babel-polyfill';


class Action extends Component {
    constructor(props) {
        super(props);

        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);

    }


    onEdit() {
        const {data} = this.props;
        this.props.onEdit(data)
    }
    async onDelete() {
        if(confirm('Are you sure delete?')){
            const id = this.props.data._id;
            await axios.delete(`http://localhost:9000/api/Studen/${id}`).then(res => this.props.onDelete(id, res.data))
        }
    }
    render() {
        return (
            <div>
                <Button
                    color="warning"
                    onClick={this.onEdit}
                >Edit</Button>{' '}
                <Button
                    color="danger"
                    onClick={this.onDelete}
                >Delete</Button>{' '}
            </div>
        )
    }
}

export default Action;