import React, { useState, useEffect } from 'react';
import './index.scss';
const Recaptcha = require('react-recaptcha');
import md5 from 'md5'

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verify, setVerify] = useState(false);

    const onHandleChangeUsername = (e) => {
        setUsername(e.target.value);

    }
    const onHandleChangePassword = (e) => {
        setPassword(e.target.value);

    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        let users =
        {
            username: username,
            password: password
        }
        fetch('http://localhost:5000/login/authentica', {
            method: 'POST',
            body: JSON.stringify(users),
            headers: {
                'Content-Type': 'application/json'
            },

        })
            .then(res =>res.json())
            .then(data => {
                console.log(data)
                if(data.status === true){
                    let username = data.data.user.username;
                    let password = data.data.user.password;
                    let token = data.data.token;
                    if (verify) {
                        props.Validation(username, password);
                        sessionStorage.setItem('data', JSON.stringify({ username: username, password: md5(password), token:token }));
                    }
                    else {
                        alert('Please verify equal Captcha!!!!!!');
                    }
                } else {
                    alert('Error logging in please try again');
                }
            })
    }
    const verifyCallback = (res) => {
        if (res) {
            setVerify(true);
        }
    }
    const onLoadRecaptcha = (captchaDemo) => {
        if (captchaDemo) {
            captchaDemo.reset();
            captchaDemo.execute();
        }
    }

    useEffect(() => {
        let data = JSON.parse(sessionStorage.getItem('data'));
        if (data !== null) {
            props.Validation(data.username, data.password);
        }
    })
    return (
        <div>
            <div className="wrap">
            <div>
                <img src="../src/asset/image/bg_img.jpg" className="bg_img" />               
            </div>
            <div className="row login">
                <img src="../src/asset/image/genex_logo.png" className="logo_img" />
                <div className="wrap_title">
                <p className="title">GENEX WIFI</p>
                <h6>value through your wifi</h6>
                </div>
                <form onSubmit={onHandleSubmit}>
                    <div className="form-group">
                        <label >Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={onHandleChangeUsername}
                            value={username}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label >Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={onHandleChangePassword}
                            value={password}
                            required
                        />
                    </div>
                    <div className="captchar">
                    <div className="g-recaptcha" data-theme="light" data-sitekey="XXXXXXXXXXXXX" > 
                    <Recaptcha
                            sitekey="6LflFJcUAAAAAIxsWik5qkSM2JqmcJKww7FvjpHD"
                            render="explicit"
                            verifyCallback={verifyCallback}
                            onloadCallback={onLoadRecaptcha}
                        />
                    </div> 
                    </div>
                    <div className="btn_login">
                        <button type="submit" className="btn btn-primary" disabled={(verify && username && password) ? false : true}>Login</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}






