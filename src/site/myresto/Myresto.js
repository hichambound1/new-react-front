import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Mydishes from '../../components/Mydishes';

const Myresto = () =>{

    const { id } = useParams(); 

    const  [resto,setResto] = useState(''); 
    const [isloading, setIsLoading] = useState(true);
    useEffect( ()=>{
        
            fetch(`http://localhost:8000/api/oneresto/`+id)
            .then(response =>response.json())
            .then(json => {
                setIsLoading(true)
                setResto(json)
            })
        },[id])
    
        return(
        <div>
            {/* <div className="home">
                <div className="position-relative " >    
                    <div className="">
            
                        <header className="text-white header-content">
                            <div className="col-12">
                                    <div className="w-100 p-0  img-header-left">
                                        <div className=" header-image  ">
                                     
                                           {isloading && <img src={`http://localhost:8000/`+resto.cover}  width="100%" alt="" />}
                                        </div>
                                    </div>
                                <div className=" p-0 m-0 position-relative">

                                    <div className="col-12 p-2 p-sm-4 p-md-5 d-flex content-header-right">
                                        <div className="my-auto mb-5">
                                            <div className="d-flex ">
                                            {isloading && <img src={`http://localhost:8000/`+resto.logo} style={{ margin: '0 auto' }} width="305px" alt="" />}
                                            </div>
                                            <div className="d-flex">
                                                <h1 className="mt-3 mt-md-5 mb-3 fs-0 text-dark mx-auto" > {resto.name_en} </h1>
                                            </div>
                                            <div className="d-flex">        
                                            <h5 className="mb-3 mb-md-5 text-center mx-auto">   
                                            {resto.description_en}
                                            </h5>
                                            </div>

                                            <div className="">
                                                <span className="col-6 mx-auto d-flex justify-content-evenly">
                                                    <i className="bi bi-facebook fs-3 "></i>
                                                    <i className="bi bi-instagram fs-3 "></i>
                                                    <i className="bi bi-twitter fs-3 "></i>
                                                    <i className="bi bi-youtube fs-3 "></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    

                                    <div className="col-12 row m-0 justify-content-evenly position-absolute top-100 start-50 translate-middle">
                                        <div className="col-4 col-md-3 p-0">
                                            <div className="bg-white rounded-hero-icon h-100 shadow py-2 px-1 mx-1 mx-sm-2">
                                                <img src="/images/Group-time.png" className="d-flex mx-auto mb-2" width="42px" alt="" />
                                                <p className=" row justify-content-center m-0 text-center">Mn-Fr 8:00 to 19:00</p>
                                            </div>
                                        </div>
                                        <div className="col-4 col-md-3 p-0">
                                            <div className="bg-white rounded-hero-icon h-100 shadow py-2 px-1 mx-1 mx-sm-2">
                                                <img src="/images/Group-tele.png" className="d-flex mx-auto mb-2" width="42px" alt="" />
                                                <p className=" row justify-content-center m-0 text-center">{resto.phone}</p>
                                            </div>
                                        </div>
                                        <div className="col-4 col-md-3 p-0">
                                            <div className="bg-white rounded-hero-icon h-100 shadow py-2 px-1 mx-1 mx-sm-2">
                                                <img src="/images/Group-time.png" className="d-flex mx-auto mb-2" width="42px" alt="" />
                                                <p className=" row justify-content-center m-0 text-center">Mn-Fr 8:00 to 19:00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>

                    </div>
                </div>                        
            </div> */}

            <div className="my-5">
                <Mydishes/>
            </div>
        </div>
    )
}

export default Myresto