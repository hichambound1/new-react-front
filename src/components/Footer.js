import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

const Footer = () => {
    const [email,setEmail] = useState();
    const [Loadinginfo,setIsLoadinginfo] = useState(true);
    const [info,setInfo] = useState('');

    useEffect( ()=>{
        fetch(`http://localhost:8000/api/info/`)
        .then(response =>response.json())
        .then(json => {
            setIsLoadinginfo(false)
             setInfo(json)
        }).catch(error =>{
            setIsLoadinginfo('faild to fetch')             
            })
        },[])

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/news', {
                        email: email,
                    }).then(response => {
                        console.log('good');
                        swal("Thank You for subscribing’ !", {
                            icon: "success",
                          });
                    }).catch(error =>{
                        swal(`Something went wrong  : ${error.response.data.errors.email}`, {
                            icon: "warning",
                          });
                          
                        
                    })
    }
    return ( 
    <div className="footer">
        

        <footer id="footer" className="footer-area pt-120">
    
        <div className="container">
            <div className="subscribe-area wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="subscribe-content mt-45">
                            <h2 className="subscribe-title">Subscribe Our Newsletter <span>get reguler updates</span></h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="subscribe-form mt-50">
                            <form onSubmit={handleSubmit} >
                                <input type="email"  value={email}  onChange={e => setEmail(e.target.value)}  placeholder="Enter eamil" />
                                <button className="main-btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                 </div> 
            </div> 
            <div className="footer-widget pb-100">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="footer-about mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <Link className="logo" to="/">
                                <img src="assets/images/logo.svg" alt="logo" />
                            </Link>
                            <p className="text">{info.description}</p>
                            <ul className="social">
                            
                                <li><a href={ info.facebook} target={'_blank'} rel="noreferrer" ><i className="lni-facebook-filled"></i></a></li>
                                {/* <li><Link to="/"><i className="lni-twitter-filled"></i></Link></li> */}
                                <li><a href={ info.insta} target={'_blank'} rel="noreferrer" ><i className="lni-instagram-filled"></i></a></li>
                                <li><a href={ info.linkdin} target={'_blank'} rel="noreferrer"  ><i className="lni-linkedin-original"></i></a></li>
                            </ul>
                        </div> 
                    </div>
                    <div className="col-lg-5 col-md-7 col-sm-7">
                        <div className="footer-link d-flex mt-50 justify-content-md-between">
                            <div className="link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                                <div className="footer-title">
                                    <h4 className="title">Quick Link</h4>
                                </div>
                                <ul className="link">
                                    {/* <li><Link to="/">Road Map</Link></li> */}
                                    <li><Link to="/policies">Privacy Policy</Link></li>
                                    <li><Link to="/policies">Refund Policy</Link></li>
                                    <li><Link to="/policies">Terms of Service</Link></li>
                                    <li><Link to="/">Pricing</Link></li>
                                </ul>
                            </div> 
                            <div className="link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                                <div className="footer-title">
                                    <h4 className="title">Resources</h4>
                                </div>
                                <ul className="link">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/policies">Policies</Link></li>
                                    {/* <li><Link to="/">Portfolio</Link></li> */}
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div> 
                        </div> 
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-5">
                        <div className="footer-contact mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                            <div className="footer-title">
                                <h4 className="title">Contact Us</h4>
                            </div>
                            {Loadinginfo===true ? <p>loading...</p> : <p className="text-white">{Loadinginfo}</p>} 
                            <ul className="contact">
                                <li>{info.phone}</li>
                                <li>{info.email}</li>
                                {/* <li>www.yourweb.com</li> */}
                                <li>{info.address}</li>
                            </ul>
                        </div> 
                    </div>
                </div> 
            </div> 
            <div className="footer-copyright">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright d-sm-flex justify-content-between">
                            <div className="copyright-content">
                                <p className="text">Developed by <Link to="" rel="nofollow">H&O</Link></p>
                            </div> 
                        </div>
                    </div>
                </div> 
            </div>
        </div> 
        <div id="particles-2"></div>
        </footer>
    </div>
     );
}
 
export default Footer;