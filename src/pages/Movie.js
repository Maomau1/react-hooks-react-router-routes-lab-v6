import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const params=useParams()
  const movieID = params.id
  //console.log(movieID)
  //console.log(params)
  const [movie, setMovie]=useState({})
//console.log(movie)
  useEffect(()=>{
    fetch(`http://localhost:5000/movies/${movieID}`)
      .then(r=>r.json())
      .then(data=>{
        setMovie(data)
      })
      .catch(error=>console.log(error))
  },[movieID]
  )
  const movieGenre=movie.genres
  
  if(typeof(movieGenre)=="undefined"){
    console.log(`loading!!!!!!!!`)
     return<h1>Loading...</h1>
   }
   console.log(movieGenre)
  const genres=movie.genres.map(genre=>{
    return <span key={genre}>{genre}</span>
  });
  return (
    <>
      <header>
        {<NavBar/>}
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <>{genres}</>
      </main>
    </>
  );
};

export default Movie;
