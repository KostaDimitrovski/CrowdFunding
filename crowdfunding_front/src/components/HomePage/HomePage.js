import React from 'react';
import { Link } from 'react-router-dom';
import startupImage from '../Images/startup-image.jpg';
import investorImage from '../Images/investor-image.jpg';
import people from '../Images/people.jpg';
import HomePageHeader from "./HomePageHeader";
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Finance1 from '../Images/Finance1.jpg'
import med from '../Images/med.jpg'
import ret from '../Images/ret.jpg'

import manufacturing from '../Images/manufacturing.jpg'
import it from '../Images/it.jpg'
import healthCare from '../Images/health.jpg'
import retail from '../Images/retail.png'


const HomePage = () => {
    return (
        <div className="container-fluid homepage-container">
            <HomePageHeader />
            <section className="investors-entrepreneurs-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={startupImage} alt="Startup" className="img-fluid rounded" />
                            <div className="1">
                                <h2 className="section-title">For Entrepreneurs</h2>
                                <p className="section-text">
                                    Are you a passionate entrepreneur with a groundbreaking idea? Get access to potential investors and
                                    showcase your startup to secure funding and support.
                                </p>
                                <Link to="/register" className="btn btn-primary">Register as an Entrepreneur</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={investorImage} alt="Investor" className="img-fluid rounded" />
                            <div className="2">
                                <h2 className="section-title">For Investors</h2>
                                <p className="section-text">
                                    Discover a wide range of startup companies and investment opportunities. Browse through various
                                    categories, read company profiles, and make informed investment decisions.
                                </p>
                                <Link to="/companies" className="btn btn-primary">Browse Companies</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={people} alt="People" className="people" />
                            <div className="people-div">
                                <h2 className="section-title">Meet some of our CEOs</h2>
                                <p className="section-text">
                                    During this exclusive gathering, the CEOs of these diverse startups converge to share their unique journeys, exchange invaluable insights, and explore potential collaborations that promise to shape the future of healthcare, IT, manufacturing, financial services, and retail industries. The synergy among these visionary leaders sparks innovation and sets the stage for groundbreaking advancements across multiple sectors.
                                </p>
                                <Link to="/ceos" className="btn btn-primary">Meet our CEOs</Link>
                            </div>
                        </div>
                        <div className="represent">
                            {/*<img src={people} alt="companies" className="companies" />*/}
                            <div className="represent">
                                <h2 className="represent-title">What type of companies do we represent</h2>
                                <div className="company-logos">
                                    <div><p className={"types"}>FINANCE</p><img src={Finance1} alt="Startup" className="comp" /></div>
                                    <div><p className={"types"}>HEALTH CARE</p><img src={med} alt="Startup" className="comp" /></div>
                                    <div><p className={"types"}>IT</p><img src={it} alt="Startup" className="comp" /></div>
                                    <div><p className={"types"}>MANUFACTURING</p><img src={manufacturing} alt="Startup" className="comp" /></div>
                                    <div><p className={"types"}>RETAIL</p><img src={ret} alt="Startup" className="comp" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;
