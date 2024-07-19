
 export const Netflixcard = ({currEle})=>{
  console.log(currEle);

  const {name,img_url,description,genre,cast,watch_url,rating} = currEle;

   return(
    <li>                  
    <div>
 <img 
 src={img_url} 
 width="30%"
  height="40%"/>
  </div>  
      <h2>{name}</h2>
      <p>{rating}</p>
      <p>{description}</p>
      <p>{cast}</p>
      <p>genre:{genre}</p>
      <a href={watch_url} target="_blank">
      <button>Watch Now</button>
      </a>

 </li>

  );

};
