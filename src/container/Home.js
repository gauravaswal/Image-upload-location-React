import React ,{useState,useEffect}from "react"
import useGeoLocation from "./GeoLocation"
import Googlemap from "../components/GoogleMaps"
import { useDispatch, useSelector } from "react-redux";
import {gallery} from "../services/actions/gallery"
import ÌmageShow from "./ImageShow";
import { select } from "@redux-saga/core/effects";
const Home = () =>{
  const dispatch = useDispatch()
  const [values,setValue] = useState({
    image:"",
    lat:"",
    long:""
  })
  const location = useGeoLocation()
  const handleChange = (e) =>{
    setValue({...values,[e.target.name]:e.target.files[0],lat:location.cordinates.lat,long:location.cordinates.long})
  }
  const selector = useSelector(state=>state.gallery.GALLERY)
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(gallery(values))
    
  }
  useEffect(() => {
    if(selector.success && selector.code ===201)
    {
        alert("Image uploaded successfully")
        setValue({})
    }else if(selector.success === false)
    {
        alert("Failed to upload image")
    }
  }, [selector])
  return (
    <div className="App">
      <div style={{marginTop:'15px',marginBottom:'15px'}}>
      <form onSubmit={handleSubmit}>
      <input type="file" name="image" onChange={handleChange}/>
      <input type="submit" />
      </form>
      </div>
      <ÌmageShow />
    </div>
  );
}


export default Home;
