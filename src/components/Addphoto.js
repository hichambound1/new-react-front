import axios from "axios";
import {  useState } from "react";

const Adddish = (props) => {
    const dish_id = props.dish;

    const [photoupload, setPhotoupload] = useState('');
    const [errorphoto, setErrorphoto] = useState('');
    const [isloadingsubmit, setIsLoadingsubmit] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        setIsLoadingsubmit(true);
        const fd = new FormData();
        fd.append('photo',photoupload)
        fd.append('dish_id',dish_id)
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:8000/sanctum/csrf-cookie')
        .then(response => {
            axios.post('http://localhost:8000/api/add_photo',fd
            ).then(response => {
                        console.log('good')
                        setIsLoadingsubmit(false);
            }).catch(error =>{
                setIsLoadingsubmit(false);
                if(error.response.data.errors){
                    setErrorphoto(error.response.data.errors.photo)
                }else{
                    setErrorphoto('SOMETHING WENT WRONG')
                }
            }
            )
        });
    }
    return ( 
        <div >       
            <button type="button" class="main-btn" data-toggle="modal" data-target="#exampleModal">
            <i className="fa fa-plus text-white" aria-hidden="true"></i> Add Photo
            </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title text-danger" id="exampleModalLabel">Add Photo</h5>
                                        <button type="button" className="btn-close text-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                            <form onSubmit={handleSubmit}   encType="multipart/form-data">
                                            <div className="row">
                                            
                                                <div className="col-md-6 ">
                                                    <div className="form-group">
                                                        <label htmlFor="photo">Photo</label>
                                                        <input name="photo"   onChange={e => setPhotoupload(e.target.files[0])}  type="file" className="form-control" />
                                                        <span className="text-danger">{errorphoto}</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12  p-3">
                                                    <div className="form-group">
                                                        <input type="submit" value={isloadingsubmit ? 'loading...' : 'Submit'} disabled={isloadingsubmit}  className=" mx-auto form-control bg-danger text-white btn btn-danger" name="submit"  />
                                                    </div>
                                                </div>
                                            </div>
                                            </form>
                                    </div>

                                    </div>
                </div>
                </div>
        </div>

     );
}
 
export default Adddish;