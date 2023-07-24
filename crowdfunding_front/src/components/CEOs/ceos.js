import React from "react";
import "./ceos.css";

const CeoCard = ({ ceo }) => {
    return (
        <div className="ceo-card">
            <div className="ceo-card-left">
                <img src={ceo.profilePicture} alt="..." className={"picture"} />
                <div className="ceo-contact-card card mt-3">
                    <div className="card-body">
                        <h3 className="h4 mb-0" id={"name"}>
                            {ceo.name} {ceo.surname}
                        </h3>
                        <h5 className="card-title">Contact Details</h5>
                        <ul className="list-unstyled">
                            <li>
                                <i className="fas fa-envelope display-25 me-2 text-secondary"></i>
                                <a href={`mailto:${ceo.email}`}>{ceo.email}</a>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt display-25 me-2 text-secondary"></i>
                                <a href={`tel:${ceo.phoneNumber}`}>{ceo.phoneNumber}</a>
                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt display-25 me-2 text-secondary"></i>
                                <a href={`https://maps.google.com/?q=${ceo.address}`}>{ceo.address}</a>
                            </li>
                        </ul>
                        {/*<ul className="social-icon-style2 ps-0">*/}
                        {/*    {ceo.socialMedia.map((social, i) => (*/}
                        {/*        <li key={i}>*/}
                        {/*            <a href={social.url} className="rounded-3">*/}
                        {/*                <i className={`fab ${social.icon}`}></i>*/}
                        {/*            </a>*/}
                        {/*        </li>*/}
                        {/*    ))}*/}
                        {/*</ul>*/}
                    </div>
                </div>
            </div>
            <div className="ceo-card-right">
                <span className="position">{ceo.position}</span>
                <div className="about-me">
                    <h2 className="mb-0">#About Me</h2>
                    <p>{ceo.about}</p>
                </div>
                <div className="skills">
                    <h2 className="mb-0">#Skills &amp; Experience</h2>
                    <p>{ceo.skills}</p>
                </div>
            </div>
        </div>
    );
};

const Ceos = (props) => {
    // Pagination logic (assuming 1 CEO per page for simplicity)
    const itemsPerPage = 1;
    const totalPages = Math.ceil(props.ceos.length / itemsPerPage);

    const [currentPage, setCurrentPage] = React.useState(1);
    const ceosToShow = props.ceos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
         <div className="ceos-container">
         {/*    <h1 id="text" className="mb-5 mt-5">*/}
         {/*        The CEOs*/}
         {/*</h1>*/}
            <div className="container">
                <div className="row justify-content-center">
                    {ceosToShow.map((ceo, index) => (
                        <div key={index} className="col-md-7 col-lg-12 mb-5 mb-lg-0 wow fadeIn">
                            <CeoCard ceo={ceo} />
                        </div>
                    ))}
                    {totalPages > 1 && (
                        <ul className="pagination">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <li
                                    key={index}
                                    className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    <a className="page-link">
                                        {index + 1}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Ceos;
