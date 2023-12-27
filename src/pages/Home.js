import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies,setMovies]= useState([])
  useEffect(()=>{
    fetch('http://127.0.0.1:5000/movies/')
    .then(r=>r.json())
    .then(data=>{
      //console.log(data)
      setMovies(data)})
    .catch(error=>console.log(error))
  },[])

  const movieOnDisplay=movies.map(movie=>{
    //console.log(movie.title);
    return <MovieCard key={movie.id} title={movie.title} id={movie.id}/>
  })
  return (
    <>
      <header>
        {<NavBar/>}
      </header>
      <main>
        <h1>Home Page</h1>
        {movieOnDisplay}
      </main>
    </>
  );
};

export default Home;
