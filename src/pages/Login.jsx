import React from "react";
import { useState, useEffect } from "react";
import { getUserToken, setCookie, setLoginInfo } from "../services/authentication";
import { useLocation, useNavigate } from 'react-router-dom';


const Login = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            const user = { email, password };
            const tokenResp = await getUserToken(user);
            tokenResp.token && setCookie({ token: tokenResp.token });
            setLoginInfo({ name: tokenResp.name, email: tokenResp.email });
            navigate('/dashboard/stats');
        } catch (error) {
            console.error(error);
        }
    }
    const onEmailChange = (event) => {
        const email = event.target.value;
        setEmail(email);
    }
    const onPasswordChange = (event) => {
        const password = event.target.value;
        setPassword(password);
    }
    useEffect(() => {
        console.log('hello in login');
    },[email, password]);
    useEffect(() => {
        console.log('in login: ', location.state);
    })

    return (
        <section className="vh-100" style={{backgroundColor: '#508bfc'}}>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Sign in</h3>

                                <div className="form-outline mb-4">
                                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Email" onChange={onEmailChange}/>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Password" value={password} onChange={onPasswordChange}/>
                                </div>
                                <button className="btn btn-success btn-md btn-block" type="submit" onClick={() => login()}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;