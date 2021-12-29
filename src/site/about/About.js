import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const About = () => {
   
   
    return (
        <div className="about">
            <Navbar />
            <div className="row justify-content-center mt-5">
                <div className="col-lg-5">
                    <div className="section-title text-center pb-30">
                        <div className="line m-auto"></div>
                            <h3 className="title"><span>What </span>We do ?</h3>
                        </div>
                    </div>
            </div>
            <section className="about-area pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="section-title">
                                    <div className="line"></div>
                                    <h3 className="title"><span>Crafted for</span> SaaS, App and Software Landing Page</h3>
                                </div> 
                                <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                                <Link to="#" className="main-btn">Try it Free</Link>
                            </div> 
                        </div>
                        <div className="col-lg-6">
                            <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img src="assets/images/about3.svg" alt="about"/>
                            </div> 
                        </div>
                    </div> 
                </div> 
                <div className="about-shape-1">
                    <img src="assets/images/about-shape-1.svg" alt="shape" />
                </div>
            </section>
            
            
            
            <section id="facts" className="video-counter pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="video-content mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img className="dots" src="assets/images/dots.svg" alt="dots"/>
                                <div className="video-wrapper">
                                    <div className="video-image">
                                        <img src="assets/images/video.png" alt="video"/>
                                    </div>
                                    <div className="video-icon">
                                        <Link to="https://www.youtube.com/watch?v=r44RKWyfcFw" className="video-popup"><i className="lni-play"></i></Link>
                                    </div>
                                </div> 
                            </div> 
                        </div>
                        <div className="col-lg-6">
                            <div className="counter-wrapper mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                                <div className="counter-content">
                                    <div className="section-title">
                                        <div className="line"></div>
                                        <h3 className="title">Cool facts <span> this about app</span></h3>
                                    </div>
                                    <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                </div> 
                                <div className="row no-gutters">
                                    <div className="col-4">
                                        <div className="single-counter counter-color-1 d-flex align-items-center justify-content-center">
                                            <div className="counter-items text-center">
                                                <span className="count"><span className="counter">125</span>K</span>
                                                <p className="text">Downloads</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="col-4">
                                        <div className="single-counter counter-color-2 d-flex align-items-center justify-content-center">
                                            <div className="counter-items text-center">
                                                <span className="count"><span className="counter">87</span>K</span>
                                                <p className="text">Active Users</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="col-4">
                                        <div className="single-counter counter-color-3 d-flex align-items-center justify-content-center">
                                            <div className="counter-items text-center">
                                                <span className="count"><span className="counter">4.8</span></span>
                                                <p className="text">User Rating</p>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div> 
            </section>
            <Footer/>
        </div>

    );
}
 
export default About;