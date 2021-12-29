import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";


const Home = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Hero />    
     {/* about */}
    <section id="about" className="about-area pt-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div className="section-title">
                            <div className="line"></div>
                            <h3 className="title">Quick & Easy <span>to Use Bootstrap Template</span></h3>
                        </div> 
                        <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                        <Link to="#" className="main-btn">Try it Free</Link>
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <img src="assets/images/about1.svg" alt="about"/>
                    </div> 
                </div>
            </div> 
        </div> 
        <div className="about-shape-1">
            <img src="assets/images/about-shape-1.svg" alt="shape" />
        </div>
    </section>
    {/* services */}
    <section id="features" className="services-area pt-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="section-title text-center pb-40">
                        <div className="line m-auto"></div>
                        <h3 className="title">Clean and simple design, <span> Comes with everything you need to get started!</span></h3>
                    </div> 
                </div>
            </div> 
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-7 col-sm-8">
                    <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div className="services-icon">
                            <img className="shape" src="assets/images/services-shape.svg" alt="shape"/>
                            <img className="shape-1" src="assets/images/services-shape-1.svg" alt="shape"/>
                           
                            <i className="lni lni-headphone-alt"></i>
                        </div>
                        <div className="services-content mt-30">
                            <h4 className="services-title"><Link to="#">24/7 SUPPORT</Link></h4>
                            <p className="text">Our support team helps you online 24/7 on our website</p>
                            {/* <Link className="more" to="#">Learn More <i className="lni-chevron-right"></i></Link> */}
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-7 col-sm-8">
                    <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div className="services-icon">
                            <img className="shape" src="assets/images/services-shape.svg" alt="shape"/>
                            <img className="shape-1" src="assets/images/services-shape-2.svg" alt="shape"/>
                            <i className="lni-cog"></i>
                        </div>
                        <div className="services-content mt-30">
                            <h4 className="services-title"><Link to="#">Robust</Link></h4>
                            <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
                            {/* <Link className="more" to="#">Learn More <i className="lni-chevron-right"></i></Link> */}
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-7 col-sm-8">
                    <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div className="services-icon">
                            <img className="shape" src="assets/images/services-shape.svg" alt="shape"/>
                            <img className="shape-1" src="assets/images/services-shape-3.svg" alt="shape"/>
                            <i className="lni-bolt-alt"></i>
                        </div>
                        <div className="services-content mt-30">
                            <h4 className="services-title"><Link to="#">Powerful</Link></h4>
                            <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
                            {/* <Link className="more" to="#">Learn More <i className="lni-chevron-right"></i></Link> */}
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
   {/* partners */}
    <div className="brand-area pt-90">
        <div className="container">
        <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="section-title text-center pb-40">
                        <div className="line m-auto"></div>
                        <h3 className="title">Owr best menu, <span> Comes with the best dishes you need !</span></h3>
                    </div> 
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-12">
                    <div className="brand-logo d-flex align-items-center justify-content-center justify-content-md-between">
                        <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <img src="assets/images/brand-1.png" alt="brand"/>
                        </div> 
                        <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.2s">
                            <img src="assets/images/brand-2.png" alt="brand"/>
                        </div> 
                        <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.3s">
                            <img src="assets/images/brand-3.png" alt="brand"/>
                        </div> 
                        <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.4s">
                            <img src="assets/images/brand-4.png" alt="brand"/>
                        </div> 
                        <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
                            <img src="assets/images/brand-5.png" alt="brand"/>
                        </div> 
                    </div> 
                </div>
            </div>   
        </div> 
    </div>
    
  
{/*     
    <section className="about-area pt-70">
        <div className="about-shape-2">
            <img src="assets/images/about-shape-2.svg" alt="shape"/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 order-lg-last">
                    <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div className="section-title">
                            <div className="line"></div>
                            <h3 className="title">Modern design <span> with Essential Features</span></h3>
                        </div> 
                        <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                        <Link to="#" className="main-btn">Try it Free</Link>
                    </div> 
                </div>
                <div className="col-lg-6 order-lg-first">
                    <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <img src="assets/images/about2.svg" alt="about" />
                    </div> 
                </div>
            </div> 
        </div> 
    </section>


    
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
    
    
    
    <section id="team" className="team-area pt-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="section-title text-center pb-30">
                        <div className="line m-auto"></div>
                        <h3 className="title"><span>Meet Our</span> Creative Team Members</h3>
                    </div>
                </div>
            </div> 
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-7 col-sm-8">
                    <div className="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div className="team-image">
                            <img src="assets/images/team-1.png" alt="Team"/>
                            <div className="social">
                                <ul>
                                    <li><Link to="#"><i className="lni-facebook-filled"></i></Link></li>
                                    <li><Link to="#"><i className="lni-twitter-filled"></i></Link></li>
                                    <li><Link to="#"><i className="lni-instagram-filled"></i></Link></li>
                                    <li><Link to="#"><i className="lni-linkedin-original"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="team-content">
                            <h5 className="holder-name"><Link to="#">Isabela Moreira</Link></h5>
                            <p className="text">Founder and CEO</p>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-7 col-sm-8">
                    <div className="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div className="team-image">
                            <img src="assets/images/team-2.png" alt="Team" />
                            <div className="social">
                                <ul>
                                    <li><Link to="#"><i className="lni-facebook-filled"></i></Link></li>
                                    <li><Link to="#"><i className="lni-twitter-filled"></i></Link></li>
                                    <li><Link to="#"><i className="lni-instagram-filled"></i></Link></li>
                                    <li><Link to="#"><i className="lni-linkedin-original"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="team-content">
                            <h5 className="holder-name"><Link to="#">Elon Musk</Link></h5>
                            <p className="text">Sr. Software Engineer</p>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-7 col-sm-8">
                    <div className="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div className="team-image">
                            <img src="assets/images/team-3.png" alt="Team"/>
                            <div className="social">
                                <ul>
                                    <li><Link to="#"><i className="lni-facebook-filled"></i></Link></li>
                                    <li><Link to="#"><i className="lni-twitter-filled"></i></Link></li>
                                    <li><Link to="#"><i className="lni-instagram-filled"></i></Link></li>
                                    <li><Link to="#"><i className="lni-linkedin-original"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="team-content">
                            <h5 className="holder-name"><Link to="#">Fiona Smith</Link></h5>
                            <p className="text">Business Development Manager</p>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
    
    
    <section id="testimonial" className="testimonial-area pt-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="section-title text-center pb-40">
                        <div className="line m-auto"></div>
                        <h3 className="title">Users sharing<span> their experience</span></h3>
                    </div> 
                </div>
            </div> 
            <div className="row testimonial-active wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.8s">
                <div className="col-lg-4">
                    <div className="single-testimonial">
                        <div className="testimonial-review d-flex align-items-center justify-content-between">
                            <div className="quota">
                                <i className="lni-quotation"></i>
                            </div>
                            <div className="star">
                                <ul>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial-text">
                            <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                        </div>
                        <div className="testimonial-author d-flex align-items-center">
                            <div className="author-image">
                                <img className="shape" src="assets/images/textimonial-shape.svg" alt="shape"/>
                                <img className="author" src="assets/images/author-1.png" alt="author"/>
                            </div>
                            <div className="author-content media-body">
                                <h6 className="holder-name">Jenny Deo</h6>
                                <p className="text">CEO, SpaceX</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4">
                    <div className="single-testimonial">
                        <div className="testimonial-review d-flex align-items-center justify-content-between">
                            <div className="quota">
                                <i className="lni-quotation"></i>
                            </div>
                            <div className="star">
                                <ul>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial-text">
                            <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                        </div>
                        <div className="testimonial-author d-flex align-items-center">
                            <div className="author-image">
                                <img className="shape" src="assets/images/textimonial-shape.svg" alt="shape" />
                                <img className="author" src="assets/images/author-2.png" alt="author"/>
                            </div>
                            <div className="author-content media-body">
                                <h6 className="holder-name">Marjin Otte</h6>
                                <p className="text">UX Specialist, Yoast</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4">
                    <div className="single-testimonial">
                        <div className="testimonial-review d-flex align-items-center justify-content-between">
                            <div className="quota">
                                <i className="lni-quotation"></i>
                            </div>
                            <div className="star">
                                <ul>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial-text">
                            <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                        </div>
                        <div className="testimonial-author d-flex align-items-center">
                            <div className="author-image">
                                <img className="shape" src="assets/images/textimonial-shape.svg" alt="shape" />
                                <img className="author" src="assets/images/author-3.png" alt="author" />
                            </div>
                            <div className="author-content media-body">
                                <h6 className="holder-name">David Smith</h6>
                                <p className="text">CTO, Alphabet</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4">
                    <div className="single-testimonial">
                        <div className="testimonial-review d-flex align-items-center justify-content-between">
                            <div className="quota">
                                <i className="lni-quotation"></i>
                            </div>
                            <div className="star">
                                <ul>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                    <li><i className="lni-star-filled"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial-text">
                            <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                        </div>
                        <div className="testimonial-author d-flex align-items-center">
                            <div className="author-image">
                                <img className="shape" src="assets/images/textimonial-shape.svg" alt="shape"/>
                                <img className="author" src="assets/images/author-2.png" alt="author"/>
                            </div>
                            <div className="author-content media-body">
                                <h6 className="holder-name">Fajar Siddiq</h6>
                                <p className="text">COO, MakerFlix</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
    
    <section id="blog" className="blog-area pt-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-title pb-35">
                        <div className="line"></div>
                        <h3 className="title"><span>Our Recent</span> Blog Posts</h3>
                    </div>
                </div>
            </div> 
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-7">
                    <div className="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div className="blog-image">
                            <img src="assets/images/blog-1.jpg" alt="blog" />
                        </div>
                        <div className="blog-content">
                            <ul className="meta">
                                <li>Posted By: <Link to="#">Admin</Link></li>
                                <li>03 June, 2023</li>
                            </ul>
                            <p className="text">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</p>
                            <Link className="more" to="#">Learn More <i className="lni-chevron-right"></i></Link>
                        </div>
                    </div> 
                </div> 
                <div className="col-lg-4 col-md-7">
                    <div className="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div className="blog-image">
                            <img src="assets/images/blog-2.jpg" alt="blog" />
                        </div>
                        <div className="blog-content">
                            <ul className="meta">
                                <li>Posted By: <Link to="#">Admin</Link></li>
                                <li>03 June, 2023</li>
                            </ul>
                            <p className="text">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</p>
                            <Link className="more" to="#">Learn More <i className="lni-chevron-right"></i></Link>
                        </div>
                    </div>
                </div> 
                <div className="col-lg-4 col-md-7">
                    <div className="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div className="blog-image">
                            <img src="assets/images/blog-3.jpg" alt="blog" />
                        </div>
                        <div className="blog-content">
                            <ul className="meta">
                                <li>Posted By: <Link to="#">Admin</Link></li>
                                <li>03 June, 2023</li>
                            </ul>
                            <p className="text">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</p>
                            <Link className="more" to="#">Learn More <i className="lni-chevron-right"></i></Link>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div> 
    </section> */}
            <Footer/>
        
      
        
        </div>
    );
}

export default Home;









