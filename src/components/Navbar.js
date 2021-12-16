
import axios from 'axios';
import { Link, NavLink, } from 'react-router-dom';
const Navbar = () => {
   
    // const history = useHistory()
    const handleLogout = (e) =>{
        e.preventDefault();
        
        
            axios.post('http://localhost:8000/api/logout').then(response => {
                                localStorage.removeItem('auth_token')
                                localStorage.removeItem('auth_user')
                                // history.push('/') 
            //             }).catch(error =>{
            //                 // console.log(error.response.data.message);
            //                 if(error.response.status === 401){
            //                 console.log('error 401')  
            //                 }
            //                 else{
            //                     console.log('error')  
            //                 }
            })
      
    }

    let authbnts = ''
    if(!localStorage.getItem('auth_token')){
        authbnts= (
            <div className="navbar-btn d-none d-sm-inline-block">
                {/* <Link to="#pricing">Free Trial</Link> */}
                <Link to="/login" className="main-btn" data-scroll-nav="0" >
                    Get started
                </Link>
            </div>
        );
    }else{
        authbnts= (
            <ul className="navbar-nav ">
                <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                        {JSON.parse(localStorage.getItem('auth_user')).name_en}
                        </Link>
                    <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item text-dark text-center" to="/profile">Profile</Link>
                        <Link className="dropdown-item text-dark text-center" to="/myresto">My menu</Link>
                        <Link className="dropdown-item text-dark text-center" to="#">Preview  my menu</Link>
                        <p className="dropdown-item text-dark text-center" style={{cursor:'pointer'} }onClick={handleLogout}>Logout</p>
                    
                    </div>
                </li>
            </ul>
        );

    }
   
      
    return (

    
        <header className="header-area">
            <div className="navbar-area" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand" to="index.html">
                                <Link to="/">
                                            
                                    <img src="assets/images/logo.svg" alt="Logo" />
                                        </Link>
                                </Link>
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
                                        {/* <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                            </Link>
                                            <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item text-dark text-center" to="/profile">Profile</Link>
                                            <Link className="dropdown-item text-dark text-center" to="/myresto">My menu</Link>
                                            <Link className="dropdown-item text-dark text-center" to="#">Preview  my menu</Link>
                                            
                                            </div>
                                        </li> */}
                                       
                                        
                                        
                                    </ul>
                                   
                                   
                                    {authbnts}
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