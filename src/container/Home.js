import React ,{useState,useEffect}from "react"
import useGeoLocation from "./GeoLocation"
import Googlemap from "../components/GoogleMaps"
import { useDispatch, useSelector } from "react-redux";
import {gallery} from "../services/actions/gallery"
import ÌmageShow from "./ImageShow";
import { select } from "@redux-saga/core/effects";
import { Button, Container, Form } from "react-bootstrap";
const Home = () =>{
  const dispatch = useDispatch()
  const [values,setValue] = useState({
    image:"",
    lat:"",
    long:""
  })
  const location = useGeoLocation()
  const handleChange = (e) =>{
      const file = e.target.files[0]
      // EXIF.getData(img1, function() {
      //   var make = EXIF.getTag(this, "Make");
      //   var model = EXIF.getTag(this, "Model");
        
    // });
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
    <Container  fluid>
      <div style={{marginTop:'15px',marginBottom:'15px',textAlign:'center'}}>
      <Form onSubmit={handleSubmit}>
      {/* <Form.Control type="file" placeholder="Select Image" /> */}
      <div className="image-upload-wrap">
       <h3>Image Upload </h3>
       </div>
       <div className="d-flex gap-2 align-items-center justify-content-center ">
       <input  style={{height:"42px",width:"400px", border:"1px solid grey", borderRadius:"5px",padding:"5px"}}className="file-upload-input" name="image" type='file' onChange={handleChange} accept="image/*" />
     <Button variant="primary" type="submit">
       Submit
    </Button> 
     </div>
    
   
     {/* </div> */}
    
      </Form>
      </div>
      <ÌmageShow />
    </Container>
  );
}


export default Home;
