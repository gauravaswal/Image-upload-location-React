import React from 'react'
import { Map, GoogleApiWrapper,Marker  } from 'google-maps-react';



 const GoogleMap=(props)=>{
   const lat = props.history.location.state.lat
   const long = props.history.location.state.long
    const mapStyles = {
        width: '100%',
        height: '100%',
      };
     return <Map
     google={props.google}
     zoom={8}
     style={mapStyles}
     initialCenter={{ lat:lat, lng: long}}>
     <Marker position={{ lat:lat, lng:long}} />
    </Map>
 }
 export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
  })(GoogleMap);
  