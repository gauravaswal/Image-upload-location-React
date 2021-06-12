import React,{useEffect}from 'react'
import { getgallery } from '../services/actions/gallery';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

// import {getgallery} from "../"
const ImageShow = () => {
const history=useHistory();
    const dispatch = useDispatch();
 const state = useSelector(state => state.gallery.GALLERY.data)
    const getImage = (e) =>{
        e.preventDefault()
        dispatch(getgallery())
    }
    return (
        <div >
        <input type="submit" name="button" value="Show images" onClick={getImage}/>
           {(state && state.length>0)?state.map((image,idx)=>{return <div style={{display:'flex',flexWrap:'wrap'}} key={idx}>{
          <img style={{margin:'10px'}} src={process.env.REACT_APP_API_URL +"/uploads/" + image.name} height={240} width={240}/>
           }
           <div style={{display:'flex',flexDirection:'column',textAlign:'left',justifyContent:'space-evenly'}}>
               <div>
           ImageName:{
               image.name
           }</div>
           <div>
             Height:{
               image.height
           }</div>
           <div>
             Width:{
               image.width
           }</div>
             <div>
             Extension:{
               image.extension
           }</div>
           <div>
           Size:{image.size}
           </div>
           <button onClick={()=>history.push({
               pathname:'/imagelocation',
               state: { 
               lat:image.location.coordinates[1], 
               long:image.location.coordinates[0]
           }
       }
               )}>show on map</button>
           </div>
           </div>
           })
           
        :<> </>}        </div>
    )
}

export default ImageShow
