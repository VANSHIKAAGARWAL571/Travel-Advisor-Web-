import React from 'react' ;
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';
const Map = ({setCoordinates,setBounds, coordinates,places,setChildClicked, weatherData}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width: 600px)');
  
  
  return (
      <div className={classes.mapContainer}>
        <GoogleMapReact 
        bootstrapURLKeys={{ key: 'AIzaSyC2EnyDBamB9KpzatULxDK8NLEdByw8n5M',key:'AIzaSyC0hP2uJzaw488HW0PeCtIfUNYh2iK0bqQ'}}
        //center = {{lat:41, lng: -71}}   //therefore i have commenter this part
        //defaultCenter={coordinates}
        center={coordinates}  //first we had considered this center it did not worked but after using lat 0 lng 0 in 13 lninapp work
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e)=>{
          setCoordinates({ lat: e.center.lat , lng: e.center.lng});
          setBounds({ ne: e.marginBounds.ne , sw: e.marginBounds.sw});
        }}
        onChildClick={(child)=> setChildClicked(child)}
        >
          {places?.map((place,i) =>(
          <div
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
              >
                {  
                !isDesktop ? (
                      <LocationOnOutlinedIcon color="primary" fontSize="large" />
                ) :(
                  <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                       {place.name}
                       </Typography>
                       <img
                       className={classes.pointer}
                       src={place.photo ? place.photo.images.large.url : 'https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_960_720.jpg'}
                        alt={place.name}
                       />
                       <Rating size="small" value={Number(place.rating)} readOnly />
                       </Paper>

                )


                }
          </div>
          ))}
          {weatherData?.list?.map((data , i)=> (
            <div key ={i} lat={data.coord.lat} lng={data.coord.lon}>
              <img height={100} src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>
            </div>
           ))}
        </GoogleMapReact>
        </div>
        );
}
export default Map;