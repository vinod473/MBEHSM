import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {

    }
    
    useEffect((_index, val) => {
        setEmail(val);
    },[email]);

    useEffect((_index, val) => {
        setPassword(val);
    },[password]);

    return (
        <section class="vh-100" style={{backgroundColor: '#508bfc'}}>
            <div class="container py-5">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                            <div class="card-body p-5 text-center">

                                <h3 class="mb-5">Sign in</h3>

                                <div class="form-outline mb-4">
                                    <input type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder="Email" value={email}/>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Password" value={password}/>
                                </div>

                                <div class="form-check d-flex justify-content-start mb-4">
                                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" style={{marginRight: '10px'}}/>
                                    <label class="form-check-label" for="form1Example3"> Remember me </label>
                                </div>

                                <button class="btn btn-success btn-md btn-block" type="submit" onClick={() => login()}>Login</button>

                                <hr class="my-4" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;