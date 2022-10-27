import React,{useState,useEffect} from 'react'

const GifListContainer = () => {
    const[gifs,setGifs] =useState([])

const API_URL='https://api.giphy.com/v1/gifs/search?q=fun&api_key=m2AFthhg0WNDsfX7JXG2LUYtuf6jdgQD&rating=g&limit=3'


    useEffect(()=>{
        fetch(API_URL)
        .then((r)=>r.json())
        .then((data)=>{
            const urls = data.data.map(gif=>gif.images.original.url)
            setGifs(urls)
        });
    },[])

    console.log(gifs)

  return (
    <div>testing</div>
  )
}

export default GifListContainer