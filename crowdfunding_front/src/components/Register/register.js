import React, { useState } from "react";
import crowdFundingRepository from "../../repository/crowdFundingRepository";
import { useNavigate, Link } from "react-router-dom";

const Register = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
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
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        crowdFundingRepository
            .register(
                formData.firstname,
                formData.lastname,
                formData.email,
                formData.password
            )
            .then((resp) => {
                props.onRegister();
                window.location.href = "/login";
            })
            .catch((error) => {
                setError("This email already has an account");
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
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                                <form onSubmit={onFormSubmit} className="px-md-2">

                                    <div className="form-outline mb-4">
                                        <input type="text" id="formFirstname" className="form-control" name="firstname" required onChange={handleChange} />
                                        <label className="form-label" htmlFor="formFirstname">First Name</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="formLastname" className="form-control" name="lastname" required onChange={handleChange} />
                                        <label className="form-label" htmlFor="formLastname">Last Name</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="formEmail" className="form-control" name="email" required onChange={handleChange} />
                                        <label className="form-label" htmlFor="formEmail">Email</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="formPassword" className="form-control" name="password" required onChange={handleChange} />
                                        <label className="form-label" htmlFor="formPassword">Password</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="formConfirmPassword" className="form-control" name="confirmPassword" required onChange={handleChange} />
                                        <label className="form-label" htmlFor="formConfirmPassword">Confirm Password</label>
                                    </div>

                                    {error && <p className="text-danger">{error}</p>}

                                    <button type="submit" className="btn btn-success btn-lg mb-1">Submit</button>

                                </form>

                                <p className="text-center mt-3">
                                    Have already an account? <Link to="/login">Login here</Link>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
