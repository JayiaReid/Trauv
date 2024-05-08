// import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Catalogue(props){
    const [list, setList]=useState([]);
    const [filter, SetFilter]=useState('')

    const fetchItems = async () =>{
        const response = await axios.get("http://127.0.0.1:8080/api/items");
        setList(response.data.Items)
      }
    useEffect(()=>{
        
        fetchItems()
        SetFilter(props.filter);
    
    },[props.filter]);
    
        

    return(
        <div id='catalogue'>
            <ul>
              {list?.map((item, index)=>(
                item.name.toLowerCase().includes(props.search.toLowerCase()) && item.city_id==props.filter? 
                     <div>
                        {item.name}
                     </div>
                : null
            ))}  
            </ul>
            
        </div>
    );

}