import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    
    return (
        <>
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
                                    <Link to="/login" className="active">Login</Link><Link to="/register">Register</Link>
                                </div>
                                <div className="alert alert-warning alert-dismissible fade show with-icon" role="alert">
                                    Please fill the following form with your information
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <form>
                                    <input className="form-control" type="text" name="username" placeholder="E-mail Address" required />
                                    <input className="form-control" type="password" name="password" placeholder="Password" required />
                                    <div className="form-button">
                                        <button id="submit" type="submit" className="ibtn">Login</button> <a href="forget3.html">Forget password?</a>
                                    </div>
                                </form>
                                <div className="other-links">
                                    <span>Or login with</span><a href="#"><i className="fab fa-facebook-f" /></a><a href="#"><i className="fab fa-google" /></a><a href="#"><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login