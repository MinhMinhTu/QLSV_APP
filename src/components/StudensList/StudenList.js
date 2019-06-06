import React, { useState,useEffect } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import {Action} from 'Action';
import {EditStudent} from './EditStudent';
import DeleteModdal from './DeleteModel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function StudenList(){
    const [Studens, setStudens] = useState([]);
    const [newData, setNewData] = useState([])
    const [isShow, setIsShow] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [data, setData] = useState('')
    
    useEffect(function(){
        axios.get('http://localhost:9000/api/Studen/StudenList')
            .then(res => {
                setStudens(res.data)
            })

    },[]) 

    const toggle = async (value) => {
        if (value === true) {
            await axios.get('http://localhost:9000/api/Studen/StudenList')
                .then(res => {
                    setStudens(res.data);
                    setIsShow(false);
                })
            await toast.success('Wow so easy!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }
        setIsShow(false)

    }
    const handleClose = async (value) => {
        if (value) {

            if (!id || !data) {
                return;
            }
            await axios.delete(`http://localhost:9000/api/Studen/${data._id}`)
            const newData = Studens.filter(studen => {
                return studen._id !== data._id
            })
            setStudens(newData);
            setIsShowModal(!value)
        }
        else {
            setIsShowModal(value)
        }
    }

    const onDelete = (data, value) => {
        setIsShowModal(value)
        setData(data)
    }
    const onEdit = (data) => {
        setNewData(data);
        setIsShow(!isShow)
    }
        return (
            <>
                <Table>
                    {isShowModal && <DeleteModdal isShowModal={isShowModal} handleClose={handleClose} />}
                    {isShow && <EditStudent data={newData} toggle={toggle} />}
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
                                        <td><Action data={studen} onEdit={onEdit} onDelete={onDelete} /></td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </Table>
                <ToastContainer />
            </>
        )
}
export default StudenList;
