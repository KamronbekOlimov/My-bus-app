import React from 'react';
import Map from '../../components/map/Map';
import Navbar from '../../components/navbar/Navbar';
function Home(){
  return (
    <div>
      <Navbar/>
        <Map/>
      <div style={{ position: "relative", zIndex: 1, padding: "20px" }}>
        <input
          type="text"
          placeholder="Qayerga borasiz?"
          style={{
            width: "300px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        />
      </div>
    </div>
  );
}
export default Home;