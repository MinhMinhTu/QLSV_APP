
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'

import Login from 'Login';
import Studen from 'Student'
import StudenList from 'StudenList'
import Home from './components/Home/index'
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './components/spinner/circle'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ''
        }
    }
    Validation = (token) => {
        this.setState({
            token: token
        })
    }

    onLogout = () => {
        localStorage.removeItem('data');
        location.reload();
    }

    render() {
        const { token } = this.state;
        if (!token) {
            return (
                <div>
                    <Login Validation={this.Validation} />
                </div>
            );
        }
        else {
            return (
                <Router>
                    <>
                        <Loading />
                        <div>
                            <Navbar color="light" light expand="md">
                            <div className="linkTag">
                                    <Link to="/">Trang Chủ</Link>
                                </div>
                                <div className="linkTag">
                                    <Link to="/Management">Quản Lý Student</Link>
                                </div>
                                <div className="linkTag">
                                    <Link to="/StudenList/">Danh Sách Student</Link>
                                </div>
                                <div className="btn_logout">
                                    <button className="btn btn-primary" onClick={this.onLogout}>Logout</button>
                                </div>
                            </Navbar>
                            <div className="container">
                                <Route path="/Management" exact component={Studen} />
                                <Route path="/StudenList/" component={StudenList} />
                            </div>
                            <Route path="/" exact component={Home} />
                        </div>
                    </>
                </Router>
            );
        }

    }
}
export default App;





