import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Contact = () => {
   
    const [Loadinginfo,setIsLoadinginfo] = useState(true);
    const [info,setInfo] = useState('');
    useEffect( ()=>{
        fetch(`http://localhost:8000/api/info/`)
        .then(response =>response.json())
        .then(json => {
            setIsLoadinginfo(false)
             setInfo(json) 

        })
        },[])


        const handleSubmit = e => {
            e.preventDefault();
            alert('ggg');
        }
    return (
        <div className="contact">
            <Navbar/>
            <div className="contact-hero">
                <h3 className="text-center">Get In Touch</h3>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium id voluptates </p>
            </div>
            <section className="contact-section">
		        <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="">
                                <div className="row mb-5">
                                    <div className="col-md-3">
                                        <div className=" w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-map-marker"></span>
                                    </div>
                                    <div className="team-content">
                                        <h5 className="holder-name">
                                            <Link to="#">Address</Link>
                                        </h5>
                                        <p className="text">{info.address}</p>
                                    </div>
                            </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-phone"></span>
                                    </div>
                                    
                                    <div className="team-content">
                                        <h5 className="holder-name">
                                            <Link to="#">Phone: </Link>
                                        </h5>
                                        <p className="text">{info.phone}</p>
                                    </div>
                                
                            </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-paper-plane"></span>
                                    </div>
                                    <div className="team-content">
                                        <h5 className="holder-name">
                                            <Link to="#">Email :</Link>
                                        </h5>
                                        <p className="text">{info.email}</p>
                                    </div>
                            </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-globe"></span>
                                    </div>
                                    <div className="team-content">
                                        <h5 className="holder-name">
                                            <Link to="#">Musk</Link>
                                        </h5>
                                        <p className="text">+212 654523223</p>
                                    </div>
                            </div>
                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-md-7">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3 className="mb-4">Contact Us</h3>
                                            <div id="form-message-warning" className="mb-4"></div> 
                                    <div id="form-message-success" className="mb-4">
                                    Your message was sent, thank you!
                                    </div>
                                            <form  onSubmit={handleSubmit} id="contactForm" name="contactForm" className="contactForm">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="name">Full Name</label>
                                                            <input type="text" className="form-control shadow-0" name="name" id="name" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6"> 
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="email">Email Address</label>
                                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="subject">Subject</label>
                                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="#">Message</label>
                                                            <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="submit" value="Send Message" className="main-btn" />
                                                            <div className="submitting"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-5 d-md-flex d-none align-items-stretch">
                                        {/* <div className="info-wrap w-100 p-5 img" style={{ backgroundImage: 'url(/images/contact.svg)' }}> */}
                                        <div className="info-wrap w-100 d-flex p-5 img" >
                                            <img src="assets/images/contact.svg" alt="" />
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
 
export default Contact;