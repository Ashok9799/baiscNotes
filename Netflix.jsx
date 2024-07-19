 import seriesData from "../api/seriesApi.json";
import { Netflixcard } from "./Netflixcard";

 const Netflix = ()=> {

     return (
     <ul>
          {seriesData.map((currEle)=>{
               <Netflixcard key={currEle.id} currEle={currEle}/>  
       })}
     </ul>
          
     );
}

export default Netflix;
