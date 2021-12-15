import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Forgetpassword = () => {
   
   
    return (
        <div className="forgetpassword">
            <Navbar/>
            <section className="ftco-section">
                        <div className="container">
                            <div className="row justify-content-center ">
                                <div className="col-md-6 ">
                                    <div className="wrap d-md-flex bg-white">
                                        
                                        <div className="login-wrap w-100 m-auto p-4 p-lg-5">
                                            <div className="d-flex">
                                                <div className="w-100">
                                                    <h3 className="mb-4">Forgot Password</h3>
                                                </div>
                                            </div>
                                            {/* {msgsuccess && <div className="alert alert-primary" role="alert"> {msgsuccess}</div>} */}
                                            <form  className="signin-form">
                                                <div className="form-group mb-3">
                                                    <label className="label" htmlFor="name">Email</label>
                                                    <input type="email"
                                                    //  value={email} 
                                                    //   onChange={e => setEmail(e.target.value)} 
                                                      className="form-control" placeholder="Email" required />
                                                    {/* <span className="text-danger">{errormail}</span> */}
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit"
                                                    //  disabled={isloadingsubmit} 
                                                     className="form-control btn btn-primary rounded submit px-3">
                                                         {/* {isloadingsubmit ? 'loading...' : 'Send' } */}
        Send
                                                         </button>
                                                </div>
                                            </form>
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
 
export default Forgetpassword;