import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorCard from "../components/ActorCard";

function Actors() {
  const [actors, setActors]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/actors')
    .then(r=>r.json())
    .then(data=>setActors(data))
    .catch(error=>console.log(error))
  },[])
  if(actors==[]){
    return<h1>Loading...</h1>
  }
  return (
    <>
      <header>
        {<NavBar/>}
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {actors.map(actor=>(
          <ActorCard key={actor.id} name={actor.name} movies={actor.movies}/>
        ))}
      </main>
    </>
  );
};

export default Actors;
