import './App.css';
import React, {Component} from "react";
import CEOs from "../CEOs/ceos";
import Categories from "../Categories/categories"
import Companies from "../Companies/CompanyList/companies"
import CrowdFundingService from "../../repository/crowdFundingRepository";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navigate} from 'react-router-dom'
import Header from '../Header/header'
import CompanyAdd from  '../Companies/CompanyAdd/companyAdd'
import CompanyEdit from '../Companies/CompanyEdit/companyEdit'
import Footer from "../Footer/footer";
import CompanyFund from '../Companies/CompanyFund/companyFund'
import Login from '../Login/login'
import HomePage from "../HomePage/HomePage";
import Register from '../Register/register'
import ContactUs from "../ContactUs/ContactUs";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ceos: [],
            categories: [],
            companies: [],
            selectedCompany: {}
        }
    }


    render() {
        return (
            <Router>
                <Header/>
                <Routes>

                    <Route path={"/ceos"} exact element={<CEOs ceos={this.state.ceos}/>}/>
                    <Route path={"/fundingIsFun"} exact element={<HomePage/>}/>
                    <Route path={"/categories"} exact element={<Categories categories={this.state.categories} />} />
                    <Route path={"/companies/add"} exact element={<CompanyAdd categories={this.state.categories}
                                                                              ceos={this.state.ceos}
                                                                              onAddCompany={this.addCompany} /> } />
                    <Route path={"/companies/edit/:id"} exact element={<CompanyEdit categories={this.state.categories}
                                                       ceos={this.state.ceos} onEditCompany={this.editCompany}
                                                       company={this.state.selectedCompany} /> } />
                    <Route path={"/companies/addFunding/:id"} exact element={<CompanyFund categories={this.state.categories}
                                                                                    ceos={this.state.ceos} onFundCompany={this.fundACompany}
                                                                                    company={this.state.selectedCompany} /> } />
                    <Route path={"/Login"} exact element={<Login onLogin={this.fetchData}/>}/>
                    <Route path={"/register"} exact element={<Register onRegister={this.fetchData}/>}/>
                    <Route path={"/contact"} exact element={<ContactUs onContact={this.fetchData}/>}/>
                    <Route path={"/companies"} exact element={ <Companies companies={this.state.companies} onDelete={this.deleteCompany} onEdit={this.getCompany} onFund={this.getCompany}/>}/>

                    <Route path={"/"} element={<Navigate to={"/fundingIsFun"}/>}/>
                </Routes>
                <Footer/>
            </Router>
        );
    }

    componentDidMount() {
        this.fetchData()

    }
    fetchData = () => {
        this.loadCompanies();
        this.loadCategories();
        this.loadCEOs();
    }


    loadCEOs = () => {
        CrowdFundingService.fetchCEOs()
            .then((data) => {
                this.setState({
                    ceos: data.data
                })
            });
    }

    loadCompanies = () => {
        CrowdFundingService.fetchCompanies()
            .then((data) => {
                    this.setState({
                        companies: data.data
                    })
                }
            );
    }

    loadCategories = () => {
        CrowdFundingService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    deleteCompany = (id) => {
        CrowdFundingService.deleteCompany(id)
            .then(() => {
                this.loadCompanies();
            });
    }

    addCompany = (name, category, ceoId, fundingNeeded, fundingTillNow, aboutTheCompany, logoURL ) => {
        CrowdFundingService.addCompany(name, category, ceoId, fundingNeeded, fundingTillNow, aboutTheCompany, logoURL)
            .then(() => {
                this.loadCompanies();
            });

    }

    getCompany = (id) => {
        CrowdFundingService.getCompany(id)
            .then((data) => {
                this.setState({
                    selectedCompany: data.data
                })
            });
    }

    editCompany = (id,name, category, ceoId, fundingNeeded, fundingTillNow,aboutTheCompany, logoURL) => {
        CrowdFundingService.editCompany(id,name, category, ceoId, fundingNeeded, fundingTillNow,aboutTheCompany, logoURL)
            .then(() => {
                this.loadCompanies();
            });
    }

    fundACompany = (id, money) => {
        CrowdFundingService.fundACompany(id,money)
            .then(() => {
                this.loadCompanies();
            });
    }
}

export default App;