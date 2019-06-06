import React from 'react'

import { Button } from 'reactstrap';
import 'babel-polyfill';


export const Action = (props) =>{
    const onEdit =()=>{
        const {data} = props;
        props.onEdit(data)
    }
    const onDelete= async ()=>{
            props.onDelete(props.data,true)
    }
        return (
            <div>
                <Button
                    color="warning"
                    onClick={onEdit}
                >Edit</Button>{' '}
                <Button
                    color="danger"
                    onClick={onDelete}
                >Delete</Button>{' '}
            </div>
        )
}