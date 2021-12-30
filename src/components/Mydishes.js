import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Carousel from 'react-elastic-carousel';
// import Adddish from './Adddish';
// import Footer from './Footer';
const Mydishes = () => {
    
    const [data, setData] = useState([]);
    const [dish, setDish] = useState(data);                     
    const [categories, setCategories] = useState([]);
  
    const [isloading, setIsLoading] = useState(true);
    const [isloadingdish, setIsLoadingdish] = useState(true);
    useEffect( ()=>{
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:8000/api/mydishes/'+JSON.parse(localStorage.getItem('auth_user')).id)
            .then(response => {   
                const newdata = response.data.data.filter(item=>item.statu==='1');
                setData(newdata) 
                setIsLoadingdish(false)           
               
            }).catch(err=>{
                setIsLoadingdish('faild to fetch')
            })

        fetch('http://localhost:8000/api/category')
        .then(response =>response.json())
        .then(json => {
            const varr =json.data
            
            setCategories(varr) 
            setIsLoading(false)    
        }).catch(err=>{
            setIsLoading('faild to fetch')
        })
    },[])
      

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]
    

    const handleClick = (name_en) =>   {
        if(name_en === 'all'){
            setDish(data);
        }else{
            
            setDish(data);
            const newdata = dish.filter(item=>item.category===name_en);
            setDish(newdata);
        }
    }
    return ( 
        <div className="">
           
            <div className="container mt-5 mydishes">
            <div className="row my-5 justify-content-between">
                    <div className="col-12">
                    {isloading===true ? <p>loading...</p> : isloading} 

                        {categories && !!categories.length && (                           
                            <Carousel breakPoints={breakPoints} itemsToShow={6} enableAutoPlay autoPlaySpeed={2500}>
                                        <div onClick={ () => handleClick('all') } className='item'>
                                            <p>All</p>
                                        </div>
                                { categories.map((item)=>(
                                        <div onClick={ () => handleClick(item.name_en) } key={item.id} className='item'>
                                            <p>{item.name_en}</p>
                                        </div>
                                    ))}
                            </Carousel>                         
                        )
                        }

                    </div>
                    {/* <Adddish categories={categories}/> */}
                </div>
                  
    <section id="blog" className="blog-area pt-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-title pb-35">
                        <div className="line"></div>
                        <h3 className="title"><span>Our Recent</span> Blog Posts</h3>
                    </div>
                </div>
            </div> 

            <div className="row justify-content-center">
            {isloadingdish && <p>loading...</p>}
                    {data.map((item)=>(
                    <div className="col-lg-3 col-md-7 p-2 " key={item.id}>
                        <div className="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <div className="blog-image ">
                                <img src={`http://localhost:8000/`+item.photo}  height='200px' alt="blog" />
                            </div>
                            <div className="blog-content p-2">
                            
                    
                                <Link className="more text-capitalize font-weight-bold" to={`/dish/${item.id}`} >{item.name_en} </Link>
                                <p className="text text_description_2 my-2 text-secondary text-capitalize">{item.description_en}</p>
                                <div className='d-flex justify-content-between mt-2'>
                                    <p className="text text_description_2 my-0 text-capitalize">{item.category.name_en}</p>
    
                                    <h3 className='font-weight-light'> {item.prix}<span>{item.currency}</span></h3>
                                </div>
                            </div>
                        </div> 
                    </div> 
                ))}
               
            </div> 
        </div> 
    </section>
                        
            </div>
        
        </div>
     );
}
 
export default Mydishes;