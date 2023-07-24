import React, { useState } from "react";
import crowdFundingRepository from "../../repository/crowdFundingRepository";
import { useNavigate, Link } from "react-router-dom";
import "./ContactUs.css";

const ContactUs = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = useState({
        name: "",
        email: "",
        text: ""
    });
    const [error, setError] = useState(null);
    const [showSentNotification, setShowSentNotification] = useState(false);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        crowdFundingRepository
            .email(formData.name, formData.email, formData.text)
            .then((resp) => {
                props.onContact();
                setShowSentNotification(true);
                setTimeout(() => {
                    setShowSentNotification(false);
                }, 4000);


                updateFormData({
                    name: "",
                    email: "",
                    text: ""
                });
            })
            .catch((error) => {
                setError("Error sending the message");
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
                                src="https://theonetechnologies.com/images/contact-us.webp"
                                className="w-100"
                                style={{ borderTopLeftRadius: "150px", borderTopRightRadius: ".3rem" }}
                                alt="Sample photo"
                            />
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Contact Us</h3>

                                <form onSubmit={onFormSubmit} className="px-md-2">
                                    <div className="form-outline mb-4">
                                        <input
                                            type="text"
                                            id="formName"
                                            className="form-control"
                                            name="name"
                                            required
                                            value={formData.name} // Use the value from formData state
                                            onChange={handleChange}
                                        />
                                        <label className="form-label" htmlFor="formName">
                                            Name
                                        </label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            id="formEmail"
                                            className="form-control"
                                            name="email"
                                            required
                                            value={formData.email} // Use the value from formData state
                                            onChange={handleChange}
                                        />
                                        <label className="form-label" htmlFor="formEmail">
                                            Email
                                        </label>
                                    </div>

                                    <div className="form-outline mb-4">
                    <textarea
                        id="formText"
                        className="form-control"
                        name="text"
                        rows="4"
                        required
                        value={formData.text} // Use the value from formData state
                        onChange={handleChange}
                    ></textarea>
                                        <label className="form-label" htmlFor="formMessage">
                                            Message
                                        </label>
                                    </div>

                                    {error && <p className="text-danger">{error}</p>}

                                    <button type="submit" className="btn btn-success btn-lg mb-1">
                                        Submit
                                    </button>
                                </form>

                                {showSentNotification && ( // Show the "Sent" notification when showSentNotification is true
                                    <div className="pop-out-notification alert alert-success" role="alert">
                                        Sent
                                    </div>
                                )}

                                <p className="text-center mt-3">
                                    Need assistance? <Link to="/contact">Contact us here</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
