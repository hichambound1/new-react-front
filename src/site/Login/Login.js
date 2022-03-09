import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import './Login.css';
const  Login = () => {
    let navigate= useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [errormail, setErrormail] = useState('');
    const [error, setError] = useState('');
    const [errorpass, setErrorpass] = useState('');

    // const history = useHistory()
    const [isloadingsubmit, setIsLoadingsubmit] = useState(false);
            const handleSubmit = e => {
                e.preventDefault();
                setIsLoadingsubmit(true);
                axios.defaults.withCredentials = true;
                axios.get('http://localhost:8000/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('http://localhost:8000/api/login', {
                        email: email,
                        password: password,
                    }).then(response => {
                            setErrormail('')
                            setErrorpass('')
                            setError('')
                            localStorage.setItem('auth_token',response.data.token)
                            // localStorage.setItem('auth_user',response.data.user)
                            localStorage.setItem('auth_user', JSON.stringify(response.data.user))
                            setIsLoadingsubmit(false);
                            navigate('/')
                 

                    }).catch(error =>{
                        setIsLoadingsubmit(false);
                        // console.log(error.response.data.message);
                        if(error.response.status === 401){
                            setError(error.response.data.message)
                            
                        }
                        if(error.response.data.errors){
                            setErrormail(error.response.data.errors.email)
                            setErrorpass(error.response.data.errors.password)
                        }
                    }
                    )
                });
            }
   
    return (
        <div className="login">
            <Navbar />
     
           
                         <section className="ftco-section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-12 col-lg-10">
                                    <div className="wrap d-md-flex">
                                        <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                                            <div className="text w-100">
                                                <h2>Welcome to login</h2>
                                                <p className="text-light">Don't have an account?</p>
                                                <a href="register" className="btn btn-white btn-outline-white">Sign Up</a>
                                            </div>
                                </div>
                                        <div className="login-wrap p-4 p-lg-5">
                                    <div className="d-flex">
                                        <div className="w-100">
                                            <h3 className="mb-4">Sign In</h3>
                                        </div>
                                               
                                    </div>

                                        <form  onSubmit={handleSubmit} className="signin-form">
                                        <span className="text-danger">{error}</span>
                                            <div className="form-group mb-3">
                                                <label className="label" htmlFor="name">Username</label>
                                                <input type="text" value={email}  onChange={e => setEmail(e.target.value)} className="form-control"  name="email" placeholder="Exemple@gmail.com"  />
                                                <span className="text-danger">{errormail}</span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="label" htmlFor="password">Password</label>
                                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" name="password" placeholder="Password"  />
                                                <span className="text-danger">{errorpass}</span>
                                                
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="form-control btn btn-primary rounded submit px-3"  disabled={isloadingsubmit}>{isloadingsubmit ? 'loading...' : 'Sing in'} </button>
                                            </div>
                                            <div className="form-group d-md-flex">
                                                <div className="w-100 text-md-right">
                                                    <Link to="/forgetpassword">Forgot Password</Link>
                                                </div>
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
 
export default Login;