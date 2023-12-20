import React, { useEffect, useState } from 'react'
import FeatureCard from "../components/FeatureCard"

function Categories() {
    const[categories,setCategories]=useState([])

    useEffect(()=>{
      const fetchCategories =async()=>{
        const response =await fetch('https://fakestoreapi.com/products/categories')
        const data = await response.json()
        console.log(data,'data')
        setCategories(data)
      }
      fetchCategories()
    },[])
 
  
    if(categories.length === 0) return <div>loading......</div>
    return (
    
      <FeatureCard cards={categories}/>
    )
  }

export default Categories
