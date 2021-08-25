import React, {useEffect, useState} from "react";

const User = (props) => {
  const [planet, setPlanet] = useState("Earth");
  
  // ComponentDidMount
  useEffect(() => {
    console.log("Component Mounting");
  }, []);

  // ComponentDidUpdate
  useEffect(() => {
    console.log("Planet Changes");
  }, [planet]);

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <button onClick={()=>setPlanet("Pluto")}>{planet}</button>
    </div>
  );
}

export default User;