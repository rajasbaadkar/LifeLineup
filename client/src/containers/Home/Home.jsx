import React from 'react'
import "./home.css";
import {BiSolidGift} from "react-icons/bi"
import {BsHeartFill} from "react-icons/bs"
import {FaPeace} from "react-icons/fa"

const Home = () => {
  return (
  <div>
    <section id="title">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                </div>
                <div className="col-lg-6 iphone-div">
                </div>
            </div>
        </div>
    </section>

    <section id="features">
        <div className="fea">
            <div className="row">
                <div className="col-lg-4 fea-head">
                    <BiSolidGift size="75px"/>
                    <h3 className="h3-styling">Gift of Life<br/><br/>Organ donation is the ultimate gift, offering a second chance at life and the beauty it holds.</h3>
                </div>
                <div className="col-lg-4 fea-head">
                    <FaPeace size="75px"/>
                    <h3 className="h3-styling">Every Organ Counts<br/><br/>Each organ and tissue has life-transforming potential—never underestimate your generous impact.</h3>
                </div>
                <div className="col-lg-4 fea-head">
                    <BsHeartFill size="75px"/>
                    <h3 className="h3-styling">Chain of Compassion<br/><br/>One donor can ignite a chain of kindness, inspiring others to save lives too.</h3>
                </div>
            </div>
        </div>
    </section>

    <section id="testimonials">
        <div id="carousel-test-button" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="3500">
            <div className="carousel-indicators test-but">
                <button type="button" data-bs-target="#carousel-test-button" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel-test-button" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carousel-test-button" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container-fluid caro-mar">
                        <h2 className="h2-styling">No problem even if you don't trust online delivery of groceries, we've got both the options!</h2>
                        <div className="row test-photo-1">
                            <div className="col-lg-6">
                                {/* <img className="img-test-1" src="/images/groceries.jpeg" alt="grocery-photo"> */}
                            </div>
                            <div className="col-lg-6 test-text-1">
                                <em>Fresh groceries delivered instantly.</em>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container-fluid caro-mar">
                        <h2 className="h2-styling">No problem even if you don't trust online delivery of groceries, we've got both the options!</h2>
                        <div className="row test-photo-2">
                            <div className="col-lg-6">
                                {/* <img className="img-test-2" src="/images/grains.jpeg" alt="grains-photo"> */}
                            </div>
                            <div className="col-lg-6 test-text-2">
                                <em>Organic grains from the farms to you.</em>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container-fluid caro-mar">  
                        <h2 className="h2-styling">No problem even if you don't trust online delivery of groceries, we've got both the options!</h2>
                        <div className="row test-photo-3">
                            <div className="col-lg-6">
                                {/* <img className="img-test-3" src="/images/fmcg.jpg" alt="fmcg-photo"> */}
                            </div>
                            <div className="col-lg-6 test-text-3">
                                <em>Expert-verified products for you daily needs.</em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel-test-button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel-test-button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>

    <section id="cta">
        <div className="container-fluid">
            <h3 className="cta-text">Join GroceryMe today and buy or sell groceries at amazing discounts.</h3>
            <button className="btn btn-dark btn-lg down-but" type="button"><i className="fa-brands fa-apple"></i>  Download</button>
            <button className="btn btn-outline-light btn-lg down-but" type="button"><i className="fa-brands fa-google-play"></i> Download</button>
        </div>
    </section>
    </div>
)
}

export default Home;
