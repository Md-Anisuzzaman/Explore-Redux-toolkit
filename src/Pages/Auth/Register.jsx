import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allInput, setAllInput] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newInput = { name: name, email: email, password: password };
        setAllInput([...allInput, newInput])
    }

    return (
        <>
            <div>
                <div className="form-body">
                    <div className="website-logo">
                        <a href="index.html">
                            <div className="logo">
                                <img className="logo-size" src="images/logo-light.svg" alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="row">
                        <div className="img-holder">
                            <div className="bg" />
                            <div className="info-holder">
                            </div>
                        </div>
                        <div className="form-holder">
                            <div className="form-content">
                                <div className="form-items">
                                    <h3>Get more things done with Loggin platform.</h3>
                                    <p>Access to the most powerfull tool in the entire design and web industry.</p>
                                    <div className="page-links">
                                        <Link to="/login">Login</Link><Link to="/register" className="active">Register</Link>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <input onChange={(e) => setName(e.target.value)} className="form-control" type="text" name="name" placeholder="Full Name" value={name} required />
                                        <input onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" name="email" placeholder="E-mail Address" value={email} required />
                                        <input onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" name="password" placeholder="Password" value={password} required />
                                        <div className="form-button">
                                            <button id="submit" type="submit" className="ibtn">Register</button>
                                        </div>
                                    </form>
                                    <div className="other-links">
                                        <span>Or register with</span><a href="#"><i className="fab fa-facebook-f" /></a><a href="#"><i className="fab fa-google" /></a><a href="#"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register