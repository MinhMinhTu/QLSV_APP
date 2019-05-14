import React from 'react';
import {
    Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import './index.scss'
import axios from 'axios'
import 'babel-polyfill';



export default class EditStuden extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data._id,
            name: props.data.name,
            email: props.data.email,
            gender: props.data.gender,
            erros: ''
        }
    }

    toggle = () => {
        this.props.toggle();
    }
    HandleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        })
    }

    hanndleSubmit = async (e) => {
        e.preventDefault();
        const { id, name, email, gender } = this.state;
        const number =/^[0-9]*$/;
        const StringNumber =/^(?=.*[a-zA-Z])(?=.*[0-9])/;
        const emailRegex =/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(name === '' || email === '' || gender === '' || StringNumber.test(name) || number.test(name) || !emailRegex.test(email.toLowerCase())){
            this.setState({
                errors : true
            })
            return;
        }
        
        await axios.put(`http://localhost:9000/api/Studen/${id}`, {
            name: name,
            email: email,
            gender: gender
        })
        this.toggle()
        
    }
    render() {
        const { name, email, gender,errors } = this.state;
        const number =/^[0-9]*$/;
        const StringNumber =/^(?=.*[a-zA-Z])(?=.*[0-9])/;
        const emailRegex =/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return (
            <div className="modalEdit">
                <Button color="danger closed" onClick={this.toggle}>x</Button>
                <Form onSubmit={this.hanndleSubmit}>
                    <FormGroup>
                        <Label for="name">Name Studen</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Input Name"
                            onChange={this.HandleChange}
                            value={name}
                        />
                        <span>{errors ?
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
                            onChange={this.HandleChange}
                            value={email}
                        />
                            <span>{errors ? (email === '' || !emailRegex.test(email.toLowerCase()) ? 'Email wrong syntax' : '')  : ''}</span>
                    </FormGroup>
                    <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Input
                            type="select"
                            name="gender"
                            id="gender"
                            onChange={this.HandleChange}
                            value={gender}
                        >
                            <option value=''></option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </Input>
                        <span>{errors ? (gender === '' ? 'Gender not is empty' : '') : ''}</span>
                    </FormGroup>
                    <Button>Save</Button>
                </Form>
            </div>
        );
    }
}