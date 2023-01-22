import React from 'react'
import searchicon from "../Images/Search_Icon/search_24px.png";
import "../Styles/SearchBar.css"
// import "../App.css"
import { useState } from 'react';

export const SearchBar = ({setValue}) => {
 const [data,setData]=useState("")
 let id;
 const handleChange=(e)=>{
  setData(e.target.value)
  if(id){
    clearInterval(id)
  }
  else{
    let id = setTimeout(() => {
      setValue(e.target.value)
      console.log("anyufshadads")
    }, 100);
  }
 }

  return (
  <div className="search_box">
     <input data-cy="search_bar" className='search' type="text" placeholder='enter your search request' value={data} onChange={(e)=>handleChange(e)}/>
     <img className='searchicon' src={searchicon} alt="" /> 
  </div>
  )
}
