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
            size: 3
        };
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.companies.length / this.state.size);
        const companies = this.getCompaniesPage(offset, nextPageOffset);

        return (
            <div id="kosta">
                <h1 id="text" className="text-left pad mb-5 mt-5 text-black">
                    Fund a company!
                </h1>
                <div className="container">
                    <div className="row">
                            <table className="table table-striped table-bordered">
                                <tbody className={"comp"}>{companies}</tbody>
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

    getCompaniesPage = (offset, nextPageOffset) => {


        // const { isAuthenticated, onFund } = this.props;
        return this.props.companies
            .map((term, index) => (
                <CompanyTerm
                    key={index}
                    company={term}
                    onDelete={this.props.onDelete}
                    onEdit={this.props.onEdit}
                    onFund={this.props.onFund}
                    // onFund={isAuthenticated ? onFund : this.handleLoginMessage}
                    // isAuthenticated={isAuthenticated}
                />
            ))
            .filter((company, index) => index >= offset && index < nextPageOffset);
    };

    handleLoginMessage = () => {
        alert('Please log in to fund a company.'); // You can modify this to show a modal or a more sophisticated message component
    };
}

export default Companies;
