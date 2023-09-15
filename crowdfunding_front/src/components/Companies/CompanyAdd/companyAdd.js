import React from 'react';
import {useNavigate} from "react-router-dom";
import './companyAdd.css'
const CompanyAdd = (props) => {

    const navigate = useNavigate();

    const [formData, updateFormData] = React.useState({
        name : "",
        category : "IT",
        ceoId: 1,
        fundingNeeded: 0,
        fundingTillNow: 0,
        aboutTheCompany: "",
        logoURL: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name
        const category = formData.category
        const ceoId = formData.ceoId
        const fundingNeeded = formData.fundingNeeded
        const fundingTillNow = formData.fundingTillNow
        const aboutTheCompany = formData.aboutTheCompany
        const logoURL = formData.logoURL

        props.onAddCompany(name,category,ceoId,fundingNeeded,fundingTillNow,aboutTheCompany,logoURL);
        navigate('/companies');
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Company name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter Company name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fundingNeeded">FundingNeeded</label>
                        <input type="text"
                               className="form-control"
                               id="fundingNeeded"
                               name="fundingNeeded"
                               placeholder="fundingNeeded"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fundingTillNow">FundingTillNow2</label>
                        <input type="text"
                               className="form-control"
                               id="fundingTillNow"
                               name="fundingTillNow"
                               placeholder="fundingTillNow"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) =>
                                <option key={term} value={term}>{term} </option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>CEO</label>
                        <select name="ceoId" className="form-control" onChange={handleChange}>
                            {props.ceos.map((term) =>(
                                <option key={term.id} value={term.id}>
                                    {term.name}
                                </option>

                            ))}
                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="aboutTheCompany">AboutTheCompany</label>
                        <input type="text"
                               className="form-control"
                               id="aboutTheCompany"
                               name="aboutTheCompany"
                               placeholder="aboutTheCompany"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="logoURL">LogoURL</label>
                        <input type="text"
                               className="form-control"
                               id="logoURL"
                               name="logoURL"
                               placeholder="logoURL"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )



}

export default CompanyAdd;