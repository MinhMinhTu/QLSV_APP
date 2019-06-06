import React, { useState } from 'react';
import {
    Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import './index.scss'
import axios from 'axios'
import 'babel-polyfill';


const imgURL = "../../../src/asset/image/genex_logo.png"

export const EditStudent = (props) => {
    const [values, setValues] = useState({
        id: props.data._id,
        name: props.data.name,
        email: props.data.email,
        gender: props.data.gender
    });
    const [errors, setErrors] = useState(false);

    const number = /^[0-9]*$/;
    const StringNumber = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const {name,email,gender} = values
    const toggle = (value) => {
        props.toggle(value);
    }
    const HandleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    const hanndleSubmit = async (e) => {
        e.preventDefault();


        if (name === '' || email === '' || gender === '' || StringNumber.test(name) || number.test(name) || !emailRegex.test(email.toLowerCase())) {
            setErrors(true)
            return;
        }

        await axios.put(`http://localhost:9000/api/Studen/${id}`, {
            name: name,
            email: email,
            gender: gender
        })
        toggle(true)

    }

    return (
        <div className="modalEdit">
            <img src={imgURL} />
            <Button color="danger closed" onClick={toggle}>x</Button>
            <Form onSubmit={hanndleSubmit}>
                <FormGroup>
                    <Label for="name">Name Studen</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Input Name"
                        onChange={HandleChange}
                        value={name}
                    />
                    <span className="errors">{errors ?
                        (
                            name === '' || StringNumber.test(name) || number.test(name) ? 'Name wrong ' : ''
                        )
                        : ''}</span>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Input Email"
                        onChange={HandleChange}
                        value={email}
                    />
                    <span className ="errors">{errors ? (email === '' || !emailRegex.test(email.toLowerCase()) ? 'Email wrong syntax' : '') : ''}</span>
                </FormGroup>
                <FormGroup>
                    <Label for="gender">Gender</Label>
                    <Input
                        type="select"
                        name="gender"
                        id="gender"
                        onChange={HandleChange}
                        value={gender}
                    >
                        <option value=''></option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </Input>
                    <span className="errors">{errors ? (gender === '' ? 'Gender not is empty' : '') : ''}</span>
                </FormGroup>
                <Button>Save</Button>
            </Form>
        </div>
    );
}