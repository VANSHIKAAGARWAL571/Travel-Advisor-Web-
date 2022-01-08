import axios from 'axios';
//const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
/*const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'cfeb0f1001msh20ef0f91135e47ap12e531jsn14f1708b1357'
  }
};*/


  export const getPlacesData = async(type,sw, ne) => {
  try{
    type = type.toLowerCase()
    const {data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary` , {
      params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
      
    },
    headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '9bf0224102mshc9c542c151a6fbdp10cd88jsn04f035b0b8e2'
    }
      
    });
   return data;

  } catch (error) {
     console.log(error)
  }
}

export const getWeatherData = async(lat,lng) => {
  try{
    const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/find',{
      params: {lon: lng,lat: lat,},
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '9bf0224102mshc9c542c151a6fbdp10cd88jsn04f035b0b8e2'
      }
    });
    return data;
  }catch(error){
    console.log(error)
  }
}