
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'

import Login from 'Login';
import Studen from 'Student'
import StudenList from 'StudenList'
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txt_username: '',
            txt_password: ''
        }
    }
    Validation = (username, password) => {
        this.setState({
            txt_username: username,
            txt_password: password
        })
    }
    onLogout = () => {
        sessionStorage.removeItem('data');
        location.reload();
    }
    render() {
        const { txt_username, txt_password } = this.state;
        if ((txt_username && txt_password) === '') {
            return (
                <div>
                    <Login Validation={this.Validation} />
                </div>
            );
        }
        else {
            return (
                <Router>
                    <div className="container">
                        <Navbar color="light" light expand="md">
                            <div className="linkTag">
                                <Link to="/">Quản Lý Studen</Link>
                            </div>
                            <div className="linkTag">
                                <Link to="/StudenList/">Danh Sách Studen</Link>
                            </div>
                        </Navbar>
                        <div className="container">
                            <Route path="/" exact component={Studen} />
                            <Route path="/StudenList/" component={StudenList} />
                        </div>
                    </div>
                </Router>
            );
        }

    }
}
export default App;





