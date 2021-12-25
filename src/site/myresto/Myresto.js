import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Mydisheswidthactions from '../../components/Mydisheswidthactions';

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
            }).catch(err =>{
                console.log('faild to fetch');
            })
        },[id])
    
        return(
        <div>
            

            <div className="mt-5">
                <Mydisheswidthactions />
            </div>
        </div>
    )
}

export default Myresto