import axios from 'axios';

const searchImages = async (term) => {
   
    const response= await axios.get(`https://api.unsplash.com/search/photos`,{
       headers:{
         Authorization: `Client-ID -ouhSn1me1YfEVaCQMUHA3IwdV3K6j3nSP-HEiJ9JOQ` //bana ait id
       },
       params:{
         query:term //aradığım kelime
       }
     })

     return response.data.results;
     };


     export default searchImages;