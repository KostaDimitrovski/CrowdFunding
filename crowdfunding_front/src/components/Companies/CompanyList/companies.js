import React, { Component } from 'react';
import './companies.css';
import CompanyTerm from '../CompanyTerm/companyTerm';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

class Companies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 3,
            searchQuery: '',
            selectedCategory: 'all' // Default to 'all' category
        };
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.getFilteredCompanies().length / this.state.size);
        const companies = this.getCompaniesPage(offset, nextPageOffset);

        return (
            <div id="kosta">
                <h1 id="text" className="text-left pad mb-5 mt-5 text-black">
                    Fund a company!
                </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search companies"
                                value={this.state.searchQuery}
                                onChange={this.handleSearchChange}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <select
                                className="form-control"
                                value={this.state.selectedCategory}
                                onChange={this.handleCategoryChange}
                            >
                                <option value="all">All Categories</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="IT">IT</option>
                                <option value="Manufacturing">Manufacturing</option>
                                <option value="FinancialServices">Financial Services</option>
                                <option value="Retail">Retail</option>
                            </select>
                        </div>
                        <table className="table table-striped table-bordered">
                            <tbody id="comp">{companies}</tbody>
                        </table>
                    </div>
                    <Link id={"add"} className="btn btn-block btn-dark" to="/companies/add">
                        Add new company!
                    </Link>
                </div>
                <ReactPaginate
                    pageCount={pageCount}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={2}
                    onPageChange={this.handlePageClick}
                    containerClassName="pagination justify-content-center"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    activeClassName="active"
                    previousClassName="page-item"
                    nextClassName="page-item"
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                    breakClassName="page-item disabled"
                    breakLinkClassName="page-link"
                    disabledClassName="disabled"
                />
            </div>
        );
    }

    handlePageClick = (data) => {
        const selected = data.selected;
        this.setState({
            page: selected
        });
    };

    handleSearchChange = (event) => {
        this.setState({
            searchQuery: event.target.value,
            page: 0 // Reset the page to 0 when the search query changes
        });
    };

    handleCategoryChange = (event) => {
        this.setState({
            selectedCategory: event.target.value,
            page: 0 // Reset the page to 0 when the category changes
        });
    };

    getFilteredCompanies = () => {
        const { selectedCategory, searchQuery } = this.state;

        return this.props.companies.filter(company => {
            const matchesCategory = selectedCategory === 'all' || company.category === selectedCategory;
            const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    };

    getCompaniesPage = (offset, nextPageOffset) => {
        const filteredCompanies = this.getFilteredCompanies();

        return filteredCompanies
            .map((term, index) => (
                <CompanyTerm
                    key={index}
                    company={term}
                    onDelete={this.props.onDelete}
                    onEdit={this.props.onEdit}
                    onFund={this.props.onFund}
                />
            ))
            .slice(offset, nextPageOffset);
    };

    handleLoginMessage = () => {
        alert('Please log in to fund a company.');
    };
}

export default Companies;
