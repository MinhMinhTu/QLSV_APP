import React, { useState } from 'react';
import {
    Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'babel-polyfill';
import './index.scss';
import CountDown from '../countdown/countDown'

export const Studen = () => {
    const [values, setValues] = useState({ name: '', email: '', gender: '' });
    const [errors, setErrors] = useState(false)

    const number = /^[0-9]*$/;
    const StringNumber = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const { name, email, gender } = values

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    const hanndleSubmit = async (e) => {
        console.log(1)
        e.preventDefault();
        if (name === '' || email === '' || gender === '' || StringNumber.test(name) || number.test(name) || !emailRegex.test(email.toLowerCase())) {
            setErrors(true)
            return;
        }

        axios.post('http://localhost:9000/api/Studen/Management', {
            name: name,
            email: email,
            gender: gender
        }).then(res => {
            console.log(res)
        })
        await toast.success('Wow so easy!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
        setValues({ ...values, name: '', email: '', gender: '' })
    }
    return (
        <div>
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
                    <span>{errors ?
                        (
                            name === '' || StringNumber.test(name) || number.test(name) ? 'Name wrong' : ''
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
                    <span>{errors ? (email === '' || !emailRegex.test(email.toLowerCase()) ? 'Email wrong' : '') : ''}</span>
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
                    <span>{errors ? (gender === '' ? 'Gender not is empty' : '') : ''}</span>
                </FormGroup>
                <Button>Add Student</Button>
            </Form>
            <ToastContainer />
            <CountDown 
                timeTillDate="06 06 2019, 12:02 pm"
                timeFormat="MM DD YYYY, h:mm a" 
            />
        </div>
    );
}