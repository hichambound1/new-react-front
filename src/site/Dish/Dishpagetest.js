import React from 'react';
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

import swal from 'sweetalert';
import Navbar from '../../components/Navbar';
import Addphoto from '../../components/Addphoto';
// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Dish = () => {
    // const { id } = useParams();
    // const history = useHistory();
  const [dish, setDish] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [gallery, setgallery] = useState(false);
  const [isloadingdish, setIsLoadingdish] = useState(true);
  const [isloadingphotos, setIsLoadingphotos] = useState(true);
    useEffect( ()=>{
        fetch(`http://localhost:8000/api/dish/3`)
        .then(response =>response.json())
        .then(json => {
            setIsLoadingdish(false)
             setDish(json)

        })
        fetch(`http://localhost:8000/api/dish/photos/3`)
        .then(response =>response.json())
        .then(json => {
            setIsLoadingphotos(false)
             setPhotos(json)        

        })

      },[])
     
      


   
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
         
                <Navbar />
           
            <div className="container mt-5 dishpage">
            
        {isloadingdish && 'loading...'}
                <div className="row">
                   <div className="col-md-6 p-0 p-md-3 ">
                    <div className='div_imgdetail_product'>
                      {photos && !!photos.length && (
                          <Carousel autoPlay>
                            <div className='gallery_scroll' style={{height: '320px'}}>
                              <img src={`http://localhost:8000/`+dish.photo} width="auto"   alt="" />
                                  </div>
                              { photos.map((item)=>(
                                  <div className='gallery_scroll' style={{height: '320px'}}>
                                    <img src={`http://localhost:8000/${item.photo}`} alt="" />
                                  </div>
                                ))}
                          </Carousel>
                        )
                      }
                    </div>
                      <div class="col-lg-12 px-0 mx-3 my-4 my-lg-0 d-flex justify-content-start">
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
            
                <div className="row">
                    {isloadingphotos && 'loading...'}
                    {gallery && <div className="alert alert-primary" role="alert"> {gallery}</div>}
                    {/* {photos && !!photos.length && (

                        <section id="testimonial" class="testimonial-area pt-5">
                            <div class="">
                                <div class="row ">
                                    <div class="col-lg-12 ">
                                        <div class="d-flex justify-content-between">
                                          <div class="section-title text-center pb-40">
                                              <div class="line m-auto"></div>
                                              <h3 class="title"><span> See more</span></h3>
                                          </div> 
                                          { JSON.parse(localStorage.getItem('auth_user')).id === dish.user_id &&
                      
                                              <Addphoto dish={dish.id} />

                                          }
                                        </div>
                                    </div>
                                </div> 
                                <div  class="row testimonial-active wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.8s">
                                    { photos.map((item)=>(
                                        <div class="col-lg-4 gallery_scroll" >
                                          <img src={`http://localhost:8000/${item.photo}`} alt="" />
                                        </div>
                                      ))}
                                    
                                </div> 
        
                            </div>
                        </section>

                        )
                     } */}

                     
                </div>
            </div>
        </div>
     );
}
 
export default Dish;