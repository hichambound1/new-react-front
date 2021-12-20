import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import swal from 'sweetalert';
import Navbar from '../../components/Navbar';
import Addphoto from '../../components/Addphoto';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Dish = () => {
    const { id } = useParams();
    // const history = useHistory();
  const [dish, setDish] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [gallery, setgallery] = useState(false);
  const [isloadingdish, setIsLoadingdish] = useState(true);
  const [isloadingphotos, setIsLoadingphotos] = useState(true);
    useEffect( ()=>{
        fetch(`http://localhost:8000/api/dish/${id}`)
        .then(response =>response.json())
        .then(json => {
            setIsLoadingdish(false)
             setDish(json)

        })
        fetch(`http://localhost:8000/api/dish/photos/${id}`)
        .then(response =>response.json())
        .then(json => {
            setIsLoadingphotos(false)
             setPhotos(json)        
            
        })

      },[id])
     
      
    const options = {
        
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        // navText: ["Prev", "Next"],
        smartSpeed: 100,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            600: {
                items: 3,
            },
            700: {
                items: 3,
            },
            1000: {
                items:4,
    
            }
        },
    };

   
    // delete dish
    const handeldelete = (id) =>   {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {

                axios.defaults.withCredentials = true;
                axios.get('http://localhost:8000/sanctum/csrf-cookie')
                .then(response => {
                axios.delete('http://localhost:8000/api/delete/gallery/'+id)
                .then(response => {               
                    // history.go(0)    
                    setgallery('photo deleted')
                }).catch( err =>{
                           
                    setgallery('somethings went wrong')
                })
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
              });
              

            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }

    return ( 
        <div>
            <div>
                <Navbar />
            </div>
            <div className="container mt-5 dishpage">
        {isloadingdish && 'loading...'}
                <div className="row">
                   <div className="col-md-6 p-3">
                        <img src={`http://localhost:8000/`+dish.photo} width="auto" height="250px"  alt="" />
                   </div>
                   <div className="col-md-6 p-3">
                        <h3>{dish.name_en}</h3>
                        <strong>Description :</strong>
                        <p className="text-secondary">{dish.description_en}</p>
                        <strong>Ingredients :</strong>
                        <p className="text-secondary">{dish.ingredients_en}</p>
                        <strong>Price :</strong>
                        <p className="text-secondary">{dish.prix} {dish.currency} </p>
                   </div>
                </div>
            
                <div className="row">
                    <h3 className="text-center text-uppercase text-danger">Gallery</h3>
                    
                    { JSON.parse(localStorage.getItem('auth_user')).id === dish.user_id &&
                    
                    <Addphoto dish={dish.id} />
                 
                    }
                    {isloadingphotos && 'loading...'}
                    {gallery && <div className="alert alert-primary" role="alert"> {gallery}</div>}
                    {photos && !!photos.length && (



                        <OwlCarousel className='owl-theme'  {...options}>
                          
                            { photos.map((item)=>(
                                <div  key={item.id} className='item'>
                                   <img src={`http://localhost:8000/${item.photo}`} width="100px" height="200px" alt="" />
                                   <p  onClick={()=> handeldelete(item.id)} className="close">x</p>
                                </div>
                            ))}
                            
                        </OwlCarousel>      
                        )
                     } 
                </div>
            </div>
        </div>
     );
}
 
export default Dish;