import React, { useState } from "react";
import crowdFundingRepository from "../../repository/crowdFundingRepository";
import {Link, useNavigate} from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        crowdFundingRepository.login(formData.email, formData.password)
            .then(resp => {
                localStorage.setItem("JWT", resp.data.access_token);
                console.log(localStorage.getItem("JWT"));

                props.onLogin();
                window.location.href = '/fundingIsFun';
            })
            .catch(error => {
                setError("Invalid email or password");
                console.log(error);
            });
    };

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-8 col-xl-6">
                        <div className="card rounded-3">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                className="w-100"
                                style={{ borderTopLeftRadius: ".3rem", borderTopRightRadius: ".3rem" }}
                                alt="Sample photo"
                            />
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login</h3>

                                <form onSubmit={onFormSubmit} className="px-md-2">

                                    {error && <p className="text-danger">{error}</p>}

                                    <div className="form-outline mb-4">
                                        <input type="text" id="formEmail" className="form-control" name="email" required onChange={handleChange} />
                                        <label className="form-label" htmlFor="formEmail">Email</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="formPassword" className="form-control" name="password" required onChange={handleChange} />
                                        <label className="form-label" htmlFor="formPassword">Password</label>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>

                                </form>
                                <p className="text-center mt-3">
                                    Dont have an account? <Link to="/register">Sign up here</Link>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
