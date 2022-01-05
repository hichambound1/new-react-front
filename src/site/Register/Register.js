import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from 'axios';
import { useState } from 'react';


const Register = () => {
    const [name_en, setName_en] = useState('');
    // const [statu, setStatu] = useState(0);
    const statu = 0;
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const [errormail, setErrormail] = useState('');
    const [errorpass, setErrorpass] = useState('');
    const [errorpassword_conf, setErrorpassword_conf] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
        const [isloadingsubmit, setIsLoadingsubmit] = useState(false);
    const handleSubmit = (e) => {
        // e.presist();
        e.preventDefault();
        setIsLoadingsubmit(true);

        axios.defaults.withCredentials = true
        // CSRF COOKIE
        axios.get("http://localhost:8000/sanctum/csrf-cookie").then(
          (response) => {
           
            // SIGNUP / REGISTER
            axios.post("http://localhost:8000/api/register", {
                name_en: name_en,
                statu: statu,
                password: password,
                email: email,
                password_confirmation: passwordConfirmation,
              }).then(response => {
                            
                        
                        setErrormail('')
                        setErrorpass('')
                        setError('')
                        setIsLoadingsubmit(false);
                        localStorage.setItem('auth_token',response.data.token)
                        // localStorage.setItem('auth_user',response.data.user)
                        localStorage.setItem('auth_user', JSON.stringify(response.data.user))
                        navigate('/profileregister')

                }).catch(error =>{
                    setIsLoadingsubmit(false);
                   
                    if(error.response.status === 401){
                        setError(error.response.data.message)
                        
                    }
                    if(error.response.data.errors){
                        setErrormail(error.response.data.errors.email)
                        setErrorpass(error.response.data.errors.password)
                        setErrorpassword_conf(error.response.data.errors.password)
                    }
                })
          },
        )
      }
   
    return (
        <div className="register">
            <Navbar/>
            <section className="ftco-section pt-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-12 col-lg-10">
                                    <div className="wrap d-md-flex">
                                        <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                                            <div className="text w-100">
                                                <h2>Welcome to Sing up</h2>
                                                <p className="text-light">You have an account?</p>
                                                <Link to="/login" className="btn btn-white btn-outline-white">Sign in</Link>
                                            </div>
                                        </div>
                                        <div className="login-wrap p-4 p-lg-5">
                                            <div className="d-flex">
                                                <div className="w-100">
                                                    <h3 className="mb-4">Create an accont</h3>
                                                </div>
                                            </div>
                                            <form onSubmit={handleSubmit} className="signin-form">
                                            <span className="text-danger">{error}</span>
                                            
                                            <div className="form-group mb-3">
                                                    <label className="label" htmlFor="name">Business Name</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Username" 
                                                        onChange={(e) => setName_en(e.target.value)}
                                                        value={name_en}
                                                         />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label className="label" htmlFor="name">Email</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Email"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        value={email}
                                                         />
                                                         <span className="text-danger">{errormail}</span>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label className="label" htmlFor="password">Password</label>
                                                    <input 
                                                        type="password" 
                                                        className="form-control" 
                                                        placeholder="Password"
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        value={password}
                                                         />
                                                         <span className="text-danger">{errorpass}</span>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label className="label" htmlFor="password">Re-Password</label>
                                                    <input 
                                                        type="password" 
                                                        className="form-control" 
                                                        placeholder="Password" 
                                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                                        value={passwordConfirmation}
                                                         />
                                                         <span className="text-danger">{errorpassword_conf}</span>
                                                </div>
                                                <div className="form-group">
                                                    <button  disabled={isloadingsubmit} type="submit" className="form-control btn btn-primary rounded submit px-3">{isloadingsubmit ? 'loading...' : 'Create an accont'}</button>
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
 
export default Register;