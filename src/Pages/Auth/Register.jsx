import React from 'react'
import { useDispatch} from 'react-redux';

import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../Features/Auth/authenticationSlice';

const Register = () => {

    // const { isLogin } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target)
        dispatch(register(formData))
        navigate("/dashboard");
    };

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
                                        <Link to="/login">Login</Link>
                                        <Link to="/register" className="active">Register</Link>
                                    </div>
                                    <form onSubmit={handleRegister}>
                                        <input className="form-control" type="text" name="name" placeholder="User Name" required />
                                        <input className="form-control" type="email" name="email" placeholder="E-mail Address" required />
                                        <input className="form-control" type="password" name="password" placeholder="Password" required />
                                        <div className="form-button">
                                            <button id="submit" type="submit" className="ibtn">Register</button>
                                        </div>
                                    </form>
                                    <div className="other-links">
                                        <p>Or register with</p><Link href="#"><i className="fab fa-facebook-f" /></Link><Link href="#"><i className="fab fa-google" /></Link><Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                    </div> <br />
                                    <Link className="fs-5" to="login"  >Already registerd? please login..</Link>
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