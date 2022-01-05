
import React from 'react';
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

import swal from 'sweetalert';
import Navbar from '../../components/Navbar';
import Addphoto from '../../components/Addphoto';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Dish = () => {
    const { id } = useParams();
    console.log(styles);
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
     
      


   
    // delete dish
    const handleDelete = (id) =>   {
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
                  window.location.reload() 
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

                <Navbar />

            <div className="container mt-5 dishpage">

        {isloadingdish && 'loading...'}
                <div className="row">
                   <div className="col-md-6 p-0 p-md-3 ">
                    <div className='div_imgdetail_product'>
                    {isloadingphotos && 'loading...'}
                    {gallery && <div className="alert alert-primary" role="alert"> {gallery}</div>}
                      {photos && !!photos.length ?(
                          <Carousel autoPlay>
                                  <div className='gallery_scroll' style={{height: '320px'}}>
                                    <img src={`http://localhost:8000/`+dish.photo} width="auto"   alt="" />
                                  </div>
                              { photos.map((item)=>(
                                  <div  key={item.id} className='gallery_scroll position-relative' style={{height: '320px'}}>
                                    <div role="button" className='position-absolute top-0 end-0 mx-5 my-3 px-3' onClick={()=>handleDelete(item.id)}>
                                      <i class=" lni lni-trash  bg-danger text-white p-2 rounded-pill"></i>
                                    </div>
                                    <img src={`http://localhost:8000/${item.photo}`} alt="" />
                                  </div>
                                ))}
                          </Carousel>
                        )
                     :
                          <Carousel autoPlay>
                                  <div className='gallery_scroll' style={{height: '320px'}}>
                                    <img src={`http://localhost:8000/`+dish.photo} width="auto"   alt="" />
                                  </div>
                          </Carousel>
                      }
                    </div>
                      <div className="col-lg-12 px-3 my-4 my-lg-0 d-flex justify-content-start">
                            { JSON.parse(localStorage.getItem('auth_user')).id === dish.user_id &&

                                <Addphoto dish={dish.id} />

                            }
                      </div>
                   </div>
                   <div className="col-md-6 p-3">
                        <div className='d-flex justify-content-between mb-5'>
                          <h3 className='font-weight-light'>{dish.name_en}</h3>
                          <h3 className='font-weight-normal text-main'>{dish.prix} {dish.currency}</h3>
                        </div>
                        <strong>Description :</strong>
                        <p className="text-secondary mb-4 mx-3">{dish.description_en}</p>
                        <strong>Ingredients :</strong>
                        <p className="text-secondary mx-3">{dish.ingredients_en}</p>
                        
                   </div>
                </div>
            
               
            </div>
        </div>
     );
}
 
export default Dish;