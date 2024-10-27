import React from 'react';
import Map from '../../components/map/Map';
import Navbar from '../../components/navbar/Navbar';
function Home(){
  return (
    <div className='relative'>
      <Navbar/>
        <Map/>
        <input
          type="text"
          placeholder="Qayerga borasiz?"
          className='map-input w-[90%] py-[10px] px-[20px] rounded-[100px] top-5 absolute z-10 outline-none bg-[#E6FAF0]'
        />
    </div>
  );
}
export default Home;