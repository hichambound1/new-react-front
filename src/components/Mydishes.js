import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
const Mydishes = () => {
    const options = {
        
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        margin: 12,
        // navText: ["Prev", "Next"],
        smartSpeed: 100,
        responsive: {
            0: {
                items: 3,
            },
            400: {
                items: 4,
            },
            600: {
                items: 4,
            },
            700: {
                items: 6,
            },
            1000: {
                items: 12,
    
            }
        },
    };
    
    const [data, setData] = useState([]);
    const [dish, setDish] = useState(data);                     
    const [categories, setCategories] = useState([]);
  
    const [isloading, setIsLoading] = useState(true);
    const [isloadingdish, setIsLoadingdish] = useState(true);
    useEffect( ()=>{
        axios.defaults.withCredentials = true;
        // axios.get('http://localhost:8000/api/mydishes/'+JSON.parse(localStorage.getItem('auth_user')).id)
        //     .then(response => {   
        //         setData(response.data.data) 
        //         setIsLoadingdish(false)           
               
        //     })

        fetch('http://localhost:8000/api/category')
        .then(response =>response.json())
        .then(json => {
            const varr =json.data
            
            setCategories(varr) 
            setIsLoading(false)    
        }
        )
    },[])
      

 

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
            <Navbar/>
            <div className="container mt-5 mydishes">
                <div className="row my-5">
                    <div className="btns">
                    {isloading && <p>loading...</p>}
                    
                        {categories && !!categories.length && (
                         
                        <OwlCarousel className='owl-theme'  {...options}>
                            <div onClick={ () => handleClick('all') } className='item'>
                                <p>All</p>
                            </div>
                            { categories.map((item)=>(
                                <div onClick={ () => handleClick(item.name_en) } key={item.id} className='item'>
                                    <p>{item.name_en}</p>
                                </div>
                            ))}
                            
                        </OwlCarousel>
                        )
                        }
                    </div>
                </div>
                    <div className="row">
                    {isloadingdish && <p>loading...</p>}
                    {data.map((item)=>(

                        <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={item.id}>
                            {/* <Link to="/dish"> */}
                                <div className="small">
                                    <article className="recipe">
                                    <div className="pizza-box">
                                        <img src={`http://localhost:8000/`+item.photo}  width="1500" height="1368" alt="" />
                                    </div>
                                    <div className="recipe-content">
                                            <h1 className="recipe-title"><Link to="/dish">{item.name_en}</Link></h1>
                                            
                                            <p className="recipe-desc">{item.description_en} </p>
                                        
                                    </div>
                                    <div className="price d-flex justify-content-around">
                                        
                                    
                                        <p> {item.prix}<span>{item.currency}</span></p>
                                    </div>
                                    </article>
                                </div>
                            {/* </Link> */}
                        </div>
    ))}

                    </div>
                        
            </div>
            <Footer />
        </div>
     );
}
 
export default Mydishes;