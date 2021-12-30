import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Mydishes from '../../components/Mydishes';


const Menu = () =>{
    let {id} = useParams(); 
    const  [resto,setResto] = useState(''); 
    const [isloading, setIsLoading] = useState(true);
    useEffect( ()=>{
        fetch(`http://localhost:8000/api/oneresto/`+JSON.parse(localStorage.getItem('auth_user')).id)
        .then(response =>response.json())
        .then(json => {
            setIsLoading(false)
            setResto(json)
        }).catch(err=>{
            setIsLoading('faild to fetch')
        })
    },[id]);
    
        return(
        <div>
            <div className="home">
                <div className="position-relative " >    
                    <div className="">
            
                        <header className="text-white header-content">
                            <div className="col-12 px-lg-3 px-1">
                                    <div className="w-100 p-0  img-header-left">
                                        <div className=" header-image  ">
                                     {isloading ?? 'loading...'}
                                     <img src={`http://localhost:8000/`+resto.cover}  width="100%" alt="" />
                                        </div>
                                    </div>
                                <div className="container p-0 position-relative ">

                                    <div className=" col-12 px-0 py-2 py-sm-4 py-md-5 d-flex content-header-right">
                                        <div className="my-auto mb-5">
                                            <div className="d-flex ">
                                         <img src={`http://localhost:8000/`+resto.logo} style={{ margin: '0 auto' }} width="305px" alt="" />
                                            </div>
                                            <div className="d-flex">
                                                <h1 className="mt-3 mt-md-5 mb-3 fs-0 text-dark mx-auto font-weight-light" > {resto.name_en} </h1>
                                            </div>
                                            <div className="d-flex">
                                            <h5 className="mb-3 mb-md-5 text-center mx-auto font-weight-lighter"> 
                                            {resto.description_en}
                                            </h5>
                                            </div>

                                            <div className="">
                                                <span className="col-6 mx-auto d-flex justify-content-around">
                                                    <a href='#' className="text-light fa fa-facebook-square fs-3 "></a>
                                                    <a href='#' className="text-light fa fa-instagram fs-3 "></a>
                                                    <a href='#' className="text-light fa fa-twitter fs-3 "></a>
                                                    <a href='#' className="text-light fa fa-youtube fs-3 "></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="col-12 px-lg-3 px-0 row m-0 justify-content-around position-absolute top-100 start-50 translate-middle">
                                        <div className="col-4 col-md-3 p-0">
                                            <div className="bg-white rounded-hero-icon h-100 shadow py-2 px-1 mx-1 mx-sm-2">
                                                <img src="http://localhost:3000/assets/images/Group-tele.png" className="d-flex mx-auto mb-2" width="42px" alt="" />
                                                <p className=" row justify-content-center m-0 text-center">{resto.address_en}</p>
                                            </div>
                                        </div>
                                        <div className="col-4 col-md-3 p-0">
                                            <div className="bg-white rounded-hero-icon h-100 shadow py-2 px-1 mx-1 mx-sm-2">
                                                <img src="http://localhost:3000/assets/images/Group-tele.png" className="d-flex mx-auto mb-2" width="42px" alt="" />
                                                <p className=" row justify-content-center m-0 text-center">{resto.phone}</p>
                                            </div>
                                        </div>
                                        <div className="col-4 col-md-3 p-0">
                                            <div className="bg-white rounded-hero-icon h-100 shadow py-2 px-1 mx-1 mx-sm-2">
                                                <img src="http://localhost:3000/assets/images/Group-time.png" className="d-flex mx-auto mb-2" width="42px" alt="" />
                                                <p className=" row justify-content-center m-0 text-center">Mn-Fr 8:00 to 19:00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>

                    </div>
                </div>                        
            </div>

            <div className="my-5">
                <Mydishes/>
            </div>
        </div>
    );
}

export default Menu;