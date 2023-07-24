import React from 'react';
import { useNavigate } from 'react-router-dom';
import './companyFund.css';
const CompanyFund = (props) => {
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        fund: 0,
        name: '',
        fundingNeeded: 0,
        fundingTillNow: 0
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const fund = formData.fund;

        props.onFundCompany(props.company.id, fund);
        navigate('/companies');
    };

    return (
        <div className="row mt-5">
            <div className="col-md-6">
                <div className="card bg-light p-4">
                    <h4 className="card-title text-center mb-4">Add Funds</h4>
                    <form onSubmit={onFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Company Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                required
                                value={props.company.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fundingNeeded">Funding Needed</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fundingNeeded"
                                name="fundingNeeded"
                                value={props.company.fundingNeeded}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fundingTillNow">Funding Till Now</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fundingTillNow"
                                name="fundingTillNow"
                                required
                                value={props.company.fundingTillNow}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fund">Fund</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fund"
                                name="fund"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">
                            Add Funds
                        </button>
                    </form>
                </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
                <div className="text-center">
                    <img className="logo" src={props.company.logoUrl} alt="Company Logo" />
                </div>
                <div className="ml-4">
                    <h5>About the Company</h5>
                    <p>{props.company.aboutTheCompany}</p>
                </div>
            </div>
        </div>
    );
};

export default CompanyFund;
