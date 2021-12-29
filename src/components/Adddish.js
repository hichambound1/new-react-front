import axios from "axios";
import {  useState } from "react";

const Adddish = (props) => {
   
   

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [photoupload, setPhotoupload] = useState('');
    
    const [errorcategory, setErrorcategory] = useState('');
    const [errorphoto, setErrorphoto] = useState('');
    const [errorprice, setErrorprice] = useState('');
    const [errorcurrency, setErrorcurrency] = useState('');
    const [erroruser, setErroruser] = useState('');
    const [errordescription, setErrordescription] = useState('');
    const [erroringredients, setErroringredients] = useState('');
    const [errorname, setErrorname] = useState('');
    const [errorgenerale, setErrorgenerale] = useState('');
    const categories = props.categories;
    
    const [isloadingsubmit, setIsLoadingsubmit] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        setIsLoadingsubmit(true);
        const fd = new FormData();
        fd.append('photo',photoupload)
        fd.append('name_en',name)
        fd.append('category',category)
        fd.append('price',price)
        fd.append('currency',currency)
        fd.append('description_en',description)
        fd.append('user_id',JSON.parse(localStorage.getItem('auth_user')).id)
        fd.append('ingredients_en',ingredients)
        console.log(fd);
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:8000/sanctum/csrf-cookie')
        .then(response => {
            axios.post('http://localhost:8000/api/dish/store',fd
            ).then(response => {
                        console.log('good')
                        setIsLoadingsubmit(false);
            }).catch(error =>{
                
                setIsLoadingsubmit(false);
                if(error.response.data.errors){
                    setErrorphoto(error.response.data.errors.photo)
                    setErrorname(error.response.data.errors.name_en)
                    setErrorcategory(error.response.data.errors.category)
                    setErrorprice(error.response.data.errors.price)
                    setErrorcurrency(error.response.data.errors.currency)
                    setErrordescription(error.response.data.errors.description_en)
                    setErroruser(error.response.data.errors.user_id)
                    setErroringredients(error.response.data.errors.ingredients_en)
                   
                }else{
                    setErrorgenerale('something went wrong')
                }
            }
            )
        });
    }
    return ( 
        <div>         
                <button type="button" className="btn btn-primary   border-0" data-toggle="modal" data-target="#exampleModal">
                <i className="fa fa-plus text-white" aria-hidden="true"></i> Add Dish
                </button>
                

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-danger" id="exampleModalLabel">Add Dish</h5>
                        {/* <button type="button" className="btn-close text-danger" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                            <form onSubmit={handleSubmit}   encType="multipart/form-data">
                            <span className="text-danger">{errorgenerale}</span>
                            <span className="text-danger">{erroruser}</span>
                             <div className="row">
                                <div className="col-md-6 ">
                                    <div className="form-group">
                                        <label htmlFor="name" className="mb-2">Name</label>
                                        <input type="text" value={name}  onChange={e => setName(e.target.value)}   className="form-control" name="name" placeholder="Enter Name" />
                                        <span className="text-danger">{errorname}</span>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="form-group">
                                        <label htmlFor="category" className="mb-2">Category</label>
                                        <select name="category"  onChange={e => setCategory(e.target.value)}  className="form-control">
                                            <option disabled>Select a category</option>
                                            {categories.map((item)=>(
                                                <option key={item.id}  value={item.id}>{item.name_en}</option>
                                            ))}
                                        </select>
                                        <span className="text-danger">{errorcategory}</span>
                                        
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="form-group">
                                        <label htmlFor="price" className="mb-2">Price</label>
                                        <input type="number" value={price}  onChange={e => setPrice(e.target.value)}   className="form-control" name="price" placeholder="Enter price" />
                                        <span className="text-danger">{errorprice}</span>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="form-group">
                                        <label htmlFor="currency" className="mb-2">Currency</label>
                                        <input type="text" value={currency}  onChange={e => setCurrency(e.target.value)}   className="form-control" name="currency" placeholder="$/.د.م/€/£" />
                                        <span className="text-danger">{errorcurrency}</span>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea name="description" value={description}  onChange={e => setDescription(e.target.value)}  id="description" cols="30" rows="4" className="form-control"></textarea>
                                        <span className="text-danger">{errordescription}</span>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="form-group">
                                        <label htmlFor="ingredients">Ingredients</label>
                                        <textarea name="ingredients" value={ingredients}  onChange={e => setIngredients(e.target.value)}  id="ingredients" cols="30" rows="4" className="form-control"></textarea>
                                        <span className="text-danger">{erroringredients}</span>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="form-group">
                                        <label htmlFor="photo">Photo</label>
                                        <input name="photo"   onChange={e => setPhotoupload(e.target.files[0])}  type="file" className="form-control" />
                                        <span className="text-danger">{errorphoto}</span>
                                    </div>
                                </div>
                                <div className="col-md-12  p-3">
                                    <div className="form-group">
                                        <input type="submit" value={isloadingsubmit ? 'loading...' : 'Submit'} disabled={isloadingsubmit} className="w-50 mx-auto form-control text-white btn btn-primary border-0 " name="submit"  />
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