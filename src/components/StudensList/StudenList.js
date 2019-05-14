import React from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';


import Action from '../action/Action';
import EditStudent from '../StudensList/EditStudent'




export default class StudenList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Studens: [],
            newData: '',
            isShow : false
        }

        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);   
    }

    componentDidMount() {

        axios.get('http://localhost:5000/api/Studen/StudenList')
            .then(res => {
                this.setState({
                    Studens: res.data
                })
            })
    }

    toggle = async () =>{
        await axios.get('http://localhost:5000/api/Studen/StudenList')
            .then(res => {
                console.log(res.data)
                this.setState({
                    Studens: res.data,
                    isShow : false
                })
            })
    }


    onDelete =(id, data) =>{
        const { Studens } = this.state;
        if (!id || !data) {
            return;
        }
        const newData = Studens.filter(studen => {
            return studen._id !== data._id
        })
        this.setState({
            Studens: newData
        })

    }
    onEdit=(data)=>{
        this.setState({
            newData: data,
            isShow: !this.state.isShow
        })
        // axios.get('http://localhost:5000/api/Studen/StudenList')
        //     .then(res => {
        //        console.log(res.data)
        //     })
    }
    render() {
        const { Studens,newData, isShow} = this.state;
        return (
            <Table>
                {isShow && <EditStudent data={newData} toggle={this.toggle}/>}
                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    Studens.map((studen, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td>{studen.name}</td>
                                    <td>{studen.email}</td>
                                    <td>{studen.gender}</td>
                                    <td><Action data={studen} onEdit={this.onEdit} onDelete={this.onDelete} /></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </Table>
        )
    }
}
