import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Get = () => {
const[data,setData]=useState([])


useEffect(()=> {
     axios.get('https://reqres.in/api/users').then((res)=> {
                setData(res.data.data)
       }).then(res=> console.log(data))
},[])

  return (
    <div>
      {/* <h1>Get</h1> */}
      {
               data.map((x,y)=> {
              return  <h1 key={y}>{x.email} {<img src='x.avatar'></img>}</h1> 
             
               })
      }
    </div>
  )
}

export default Get
