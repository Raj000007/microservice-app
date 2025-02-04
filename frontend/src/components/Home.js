import React, { useEffect, useState } from "react";

const Home = () => {
  const [username, setUsername] = useState("User");
  const [rides, setRides] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5003/home")
      .then((res) => res.json())
      .then((data) => {
        setRides(data.ridesAvailable);
      });
  }, []);

  return (
    <div>
      <h2>Welcome to {username}</h2>
      <h3>Rides Available:</h3>
      <ul>
        {rides.map((ride, index) => (
          <li key={index}>{ride}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
