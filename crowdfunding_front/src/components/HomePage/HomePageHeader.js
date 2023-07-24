import React from 'react';
import './HomePageHeader.css'
import investorImage from '../Images/investor-image.jpg';
import slika from '../Images/slika.png'
import {Link} from "react-router-dom";
const HomePageHeader = () => {
    return (
        <div>
            <div className="header-blue">
                <div className="container hero">
                    <div id={"roww"} className="row">
                        <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                            <h1 className={"tx-1"}>CrowdPower: Empowering Online Fundraising</h1>
                            <p className={"tx"}>Join CrowdPower, the platform that empowers individuals and organizations worldwide to
                                launch successful online fundraising campaigns. With 0% platform fees, let's start
                                making a difference together!</p>
                            <Link to={"/register"} className="btn btn-light btn-lg action-button" type="button" >
                                Join now !
                                {/*<i className="fa fa-long-arrow-right ml-2"></i>*/}
                            </Link>
                        </div>
                        <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                            <div className="iphone-mockup">
                                <img className="device" src={slika}/>
                                {/* <div className="screen"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageHeader;
