import React from 'react';
import {useNavigate} from "react-router-dom";
import './companyEdit.css'
const CompanyEdit = (props) => {
    const navigate = useNavigate();

    const [formData, updateFormData] = React.useState({
        name: "",
        category: "", // Remove the default value
        ceoId: 1,
        fundingNeeded: 0,
        fundingTillNow: 0,
        aboutTheCompany: "",
        logoURL: ""
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    };



    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.company.name;
        const category = formData.category !== "" ? formData.category : props.company.category;
        const ceoId = formData.ceoId !== 1 ? formData.ceoId : props.company.ceo.id;
        const fundingNeeded = formData.fundingNeeded !== 0 ? formData.fundingNeeded : props.company.fundingNeeded;
        const fundingTillNow = formData.fundingTillNow !== 0 ? formData.fundingTillNow : props.company.fundingTillNow;
        const aboutTheCompany = formData.aboutTheCompany !== "" ? formData.aboutTheCompany : props.company.aboutTheCompany;
        const logoURL = formData.logoURL !== "" ? formData.logoURL : props.company.logoUrl;


        props.onEditCompany(props.company.id,name, category, ceoId, fundingNeeded, fundingTillNow,aboutTheCompany,logoURL);
        navigate(`/companies`);
    }



    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Company name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            required
                            defaultValue={formData.name || props.company.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="fundingNeeded">FundingNeeded</label>
                        <input type="text"
                               className="form-control"
                               id="fundingNeeded"
                               name="fundingNeeded"
                               defaultValue={formData.fundingNeeded || props.company.fundingNeeded}
                            // defaultValue={props.company.fundingNeeded}
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fundingTillNow">FundingTillNow</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fundingTillNow"
                            name="fundingTillNow"
                            defaultValue={formData.fundingTillNow || props.company.fundingTillNow}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) => {
                                if(props.company.category !== undefined &&
                                    props.company.category === term)
                                    return <option selected={props.company.category} value={term}>{term}</option>
                                else return <option value={term}>{term}</option>
                            })}
                        </select>
                    </div>


                    <div className="form-group">
                        <label>CEO</label>
                        <select name="ceoId" className="form-control" onChange={handleChange}>
                            {props.ceos.map((term) =>
                            {
                                if(
                                    props.company.ceo &&
                                    props.company.ceo.id !== undefined &&
                                    props.company.ceo.id === term.id
                                ) {
                                    return ( <option key={term.id} defaultValue={term.id} selected={term.name}>{term.name}</option>
                                    );
                                }else {
                                    return (
                                        <option key={term.id} value={term.id}>
                                            {term.name}
                                        </option>
                                    );
                                }


                            })}
                        </select>


                    </div>
                    <div className="form-group">
                        <label htmlFor="aboutTheCompany">AboutTheCompany</label>
                        <input
                            type="text"
                            className="form-control"
                            id="aboutTheCompany"
                            name="aboutTheCompany"
                            // placeholder={formData.aboutTheCompany || props.company.aboutTheCompany}
                            defaultValue={formData.aboutTheCompany || props.company.aboutTheCompany}
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
                               defaultValue={formData.logoURL || props.company.logoUrl}
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

export default CompanyEdit;