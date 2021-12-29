import axios from "axios";
import { useState } from "react";

const Editdish = (props) => {
    
    const categories = props.categories;
    const olddish = props.olddish;
    // console.log(olddish);
    let targetid = '#exampleModaledit'+olddish.id;
    let idvalue = 'exampleModaledit'+olddish.id;

    const [name, setName] = useState(olddish.name_en);
    const [category, setCategory] = useState(olddish.category.id);
    const [price, setPrice] = useState(olddish.prix);
    const [currency, setCurrency] = useState(olddish.currency);
    const [description, setDescription] = useState(olddish.description_en);
    const [ingredients, setIngredients] = useState(olddish.ingredients_en);
    const [photoupload, setPhotoupload] = useState('');

    const [errorcategory, setErrorcategory] = useState('');
    const [errorphoto, setErrorphoto] = useState('');
    const [errorprice, setErrorprice] = useState('');
    const [errorcurrency, setErrorcurrency] = useState('');
    const [errordescription, setErrordescription] = useState('');
    const [erroringredients, setErroringredients] = useState('');
    const [errorname, setErrorname] = useState('');
    const [errorgenerale, setErrorgenerale] = useState(''); 

    const [isloadingsubmit, setIsLoadingsubmit] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        setIsLoadingsubmit(true);
        const fd = new FormData();
        if(photoupload){

            fd.append('photo',photoupload)
        }
        fd.append('name_en',name)
        fd.append('category',category)
        fd.append('price',price)
        fd.append('_method','PUT')
        fd.append('currency',currency)
        fd.append('description_en',description)
        fd.append('user_id',JSON.parse(localStorage.getItem('auth_user')).id)
        fd.append('ingredients_en',ingredients)
        console.log(fd);
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:8000/sanctum/csrf-cookie')
        .then(response => {
            axios.post('http://localhost:8000/api/dish/update/'+olddish.id,fd
            ).then(response => {
                        console.log('good')
                        setIsLoadingsubmit(false);
                        window.location.reload()
            }).catch(error =>{
                
                setIsLoadingsubmit(false);
                if(error.response.data.errors){
                    setErrorphoto(error.response.data.errors.photo)
                    setErrorname(error.response.data.errors.name_en)
                    setErrorcategory(error.response.data.errors.category)
                    setErrorprice(error.response.data.errors.price)
                    setErrorcurrency(error.response.data.errors.currency)
                    setErrordescription(error.response.data.errors.description_en)
                    setErroringredients(error.response.data.errors.ingredients_en)
                   
                }else{
                    setErrorgenerale('something went wrong')
                }
            }
            )
        });
    }
    return ( 
        
        <div   key={olddish.id}>
          
            <button type="button" className="border-0 bg-transparent" data-toggle="modal" data-target={targetid}>
            <i className="lni lni-pencil bg-warning text-white p-2 rounded-pill"></i>
            </button>


                <div  className="modal fade" id={idvalue} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                
                    <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-danger" id="exampleModalLabel">Edit Dish</h5>
                                {/* <button type="button" className="btn-close text-danger" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                                <div className="modal-body">
                                <form  onSubmit={handleSubmit}   encType="multipart/form-data">
                                <span className="text-danger">{errorgenerale}</span>
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <label htmlFor="name" className="mb-2">Name</label>
                                            <input type="text" onChange={e => setName(e.target.value)} value={name} className="form-control" name="name" placeholder="Enter Name" />
                                            <span className="text-danger">{errorname}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <label htmlFor="category" className="mb-2">Category</label>
                                            <select name="category" onChange={e => setCategory(e.target.value)} value={category} className="form-control">
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
                                            <input type="number" onChange={e => setPrice(e.target.value)} value={price}  className="form-control" name="price" placeholder="Enter price" />
                                            <span className="text-danger">{errorprice}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <label htmlFor="currency" className="mb-2">Currency</label>
                                            <input type="text"  onChange={e => setCurrency(e.target.value)} value={currency} className="form-control" name="currency" placeholder="$/.د.م/€/£" />
                                            <span className="text-danger">{errorcurrency}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <textarea name="description"  onChange={e => setDescription(e.target.value)} value={description} id="description" cols="30" rows="4" className="form-control"></textarea>
                                            <span className="text-danger">{errordescription}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <label htmlFor="ingredients">Ingredients</label>
                                            <textarea name="ingredients" onChange={e => setIngredients(e.target.value)} value={ingredients} id="ingredients" cols="30" rows="4" className="form-control"></textarea>
                                            <span className="text-danger">{erroringredients}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <img src={`http://localhost:8000/`+olddish.photo} width="100px" alt="" />
                                            <label htmlFor="photo">Photo</label>
                                            <input name="photo"   onChange={e => setPhotoupload(e.target.files[0])}  type="file" className="form-control" />
                                            <span className="text-danger">{errorphoto}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-12  p-3">
                                        <div className="form-group">
                                            <input type="submit" value={isloadingsubmit ? 'loading...' : 'Update'}  disabled={isloadingsubmit}  className="w-50 mx-auto form-control bg-warning text-white btn btn-warning" name="submit"  />
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
 
export default Editdish;