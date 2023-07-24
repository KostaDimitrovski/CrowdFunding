import React from 'react';
import { Link } from 'react-router-dom';
import './companyTerm.css'; // Import a CSS file for custom styling

const CompanyTerm = (props) => {
    // const isAuthenticated = props.isAuthenticated;
    //
    // const handleFundClick = () => {
    //     if (!isAuthenticated) {
    //         alert('Please log in to fund the company.');
    //     } else {
    //         props.onFund(props.company.id);
    //     }
    // };

    return (
        <div className="company-term">
            {/*<h3 className="company-term-heading">Fund Companies</h3>*/}
            <div className="company-info">
                <div className="logo-container">
                    <img
                        id="pic"
                        src={props.company.logoUrl}
                        alt="Company Logo"
                        className="company-logo"
                    />
                </div>
                <div className="text-container">
                    <div className="company-name">{props.company.name}</div>
                    <div className="company-category">{props.company.category}</div>
                    <div className="company-about">{props.company.aboutTheCompany}</div>
                    <div className="company-ceo">
                        CEO: {props.company.ceo.name} {props.company.ceo.surname}
                    </div>
                    <div className="company-funding">
                        Funding Needed: {props.company.fundingNeeded} | Funding Till Now: {props.company.fundingTillNow}
                    </div>
                </div>
            </div>
            <div className="actions-container">

                    {/*<button className="btn btn-success" disabled>*/}
                    {/*    Fund*/}
                    {/*    <span className="tooltip">Please log in for funding</span>*/}
                    {/*</button>>*/}
                        <a
                            title="Delete"
                            className="btn btn-danger"
                            onClick={() => props.onDelete(props.company.id)}
                        >
                            Delete
                        </a>
                        <Link
                            className="btn btn-info"
                            onClick={() => props.onEdit(props.company.id)}
                            to={`/companies/edit/${props.company.id}`}
                        >
                            Edit
                        </Link>
                        <Link
                            className="btn btn-success"
                            // onClick={handleFundClick}
                            onClick={() => props.onFund(props.company.id)}
                            to={`/companies/addFunding/${props.company.id}`}
                        >
                            Fund
                        </Link>

            </div>
        </div>
    );
};

export default CompanyTerm;
