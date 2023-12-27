import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import DirectorCard from "../components/DirectorCard";

function Directors() {
  const[directors, setDirector]=useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/directors')
      .then(r=>r.json())
      .then(data=>{
        //console.log(data);
        setDirector(data)})
      .catch(error=>console.log(error))
  },[])
  if(directors==[]){
    return <h1>Loading...</h1>
  }
  return (
    <>
      <header>
        {<NavBar/>}
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map(director=>(
          <DirectorCard key={director.id} name={director.name} movies={director.movies}/>
        ))}
      </main>
    </>
  );
};

export default Directors;
