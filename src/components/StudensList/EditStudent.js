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
        
        await axios.put(`http://localhost:5000/api/Studen/${id}`, {
            name: name,
            email: email,
            gender: gender
        })
        this.toggle()
        
    }
    render() {
        const { name, email, gender } = this.state;
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
                    </FormGroup>
                    <Button>Save</Button>
                </Form>
            </div>
        );
    }
}