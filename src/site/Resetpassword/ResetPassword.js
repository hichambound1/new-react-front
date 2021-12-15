import axios from 'axios';
import { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';


const ResetPassword = () => {
    // get the url 
    const thePath= window.location.href;
    // get the last part of url
    const lastItem = thePath.substring(thePath.lastIndexOf('/resetpassword/') + 1)
    // remove a part from  it / result 
    const token = lastItem.replace('resetpassword/','');
    

    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');
    const [isloadingsubmit,setIsLoadingsubmit ] = useState('');
   
    
    const handleSubmit = e => {
        e.preventDefault();
        setIsLoadingsubmit(true);
        
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:8000/sanctum/csrf-cookie')
        .then(response =>{

            axios.post('http://localhost:8000/api/update/thepass', {
                token: token,
                password: password,
                password_confirmation: password_confirmation,
                _method: 'PUT',
               
            }).then(response => {
                    
                    console.log('good');
                    
                    setIsLoadingsubmit(false);
                    // history.push('/')

            }).catch(error =>{
                    console.log('bad');
                 setIsLoadingsubmit(false);
                 setError(error.response.data['errors']['password']);
                   
               
            }
            );
        });
    }
    return (
        <div>
        <div className="home">
            <div className="position-relative" >

                <div className="">

               <Navbar/>

                    <section className="ftco-section">
                        <div className="container">
                            <div className="row justify-content-center ">
                                <div className="col-md-6 ">
                                    <div className="wrap d-md-flex bg-white">
                                        
                                        <div className="login-wrap w-100 m-auto p-4 p-lg-5">
                                            <div className="d-flex">
                                                <div className="w-100">
                                                    <h3 className="mb-4">Reset Password</h3>
                                                </div>
                                            </div>
                                            {error && <div className="alert alert-danger" role="alert"> {error}</div>}
                                            <form onSubmit={handleSubmit} className="signin-form">
                                               
                                                <div className="form-group ">
                                                    <label htmlFor="password" >Password</label>                                                   
                                                        <input id="password" required value={password}  onChange={e => setPassword(e.target.value)} type="password" className="form-control " name="password" required="" autoComplete="new-password"/>                                                
                                                </div>
                                                <div className="form-group ">
                                                    <label htmlFor="password-confirm" >Confirm Password</label>
                                                        <input id="password-confirm"  required value={password_confirmation}  onChange={e => setPasswordConfirmation(e.target.value)} type="password" className="form-control" name="password_confirmation" required="" autoComplete="new-password" />                            
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" disabled={isloadingsubmit} className="form-control btn btn-primary rounded submit px-3">{isloadingsubmit ? 'loading...' : 'Send' }</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> 

                </div>
            </div>        
        </div>
        <Footer/>
        </div>
    );
}

export default ResetPassword;









