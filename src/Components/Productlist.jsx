import  { useEffect, useState } from 'react'
import axios from "axios"
export const Productlist = () => {
    const [item ,setItem]=useState([])
    useEffect(()=>{
     const fetchData= async()=>{
        try {
            const res= await axios.get("https://api.restful-api.dev/objects")
            const result=res.data
            setItem(result)
            console.log(result);
        } catch (error) {
            console.log("Error something went worng",error.message);
        }
     }
     fetchData()
    },[])
  return (
    <div>
        <h1>Productlist</h1>
        {
            item.map((i,index)=>(

                <div key={index}>
                    <li>{i.name}</li>
                </div>
            ))
        }

    </div>
  )
}

