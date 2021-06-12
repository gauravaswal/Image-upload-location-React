import React,{useState,useEffect} from "react"
const useGeoLocation = () =>{
  const[location,setlocation ] = useState({
      cordinates:{
      lat:"",
      long:""
      }
  })
  const onSuccess = location =>{
      setlocation({
        cordinates:{
            lat:location.coords.latitude,
            long:location.coords.longitude
        }
      })
  }
  
  useEffect(() => {
    if ("geolocation" in  navigator) {
   navigator.geolocation.getCurrentPosition(onSuccess)
    }
  }, [])
  return location
}

export default useGeoLocation