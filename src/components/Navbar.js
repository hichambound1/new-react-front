import { Link } from "react-router-dom";

const Navbar = () => {
   
        
   
      
    return (

    
        <header className="header-area">
            <div className="navbar-area" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="index.html">
                                <Link to="/">
                                            
                                    <img src="assets/images/logo.svg" alt="Logo" />
                                        </Link>
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
    
                                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                        <Link to="/" className="page-scroll">
                                            Home
                                        </Link>
                                        </li>
                                       
                                       
                                        <li className="nav-item">
                                            <Link to="/about" className="page-scroll">
                                                About
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/contact" className="page-scroll">
                                                Contact
                                            </Link>
                                        </li>
                                       
                                        
                                        
                                    </ul>
                                </div> 
                                
                                <div className="navbar-btn d-none d-sm-inline-block">
                                    {/* <a href="#pricing">Free Trial</a> */}
                                    <Link to="/login" className="main-btn" data-scroll-nav="0" >
                                        Get started
                                    </Link>
                                </div>
                            </nav> 
                        </div>
                    </div> 
                </div> 
            </div> 
            
                
        </header>
        
     

    );
}
 
export default Navbar;