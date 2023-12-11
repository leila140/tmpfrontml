import React, { useState, useEffect } from 'react';
import "./lll.css";
import axios from 'axios';
import StarRating from '../../dashboard/component/starRating';
import Search from '../../Search';

// Sample data for hotels


function ListeHotel({ hotel }) {



  return (
    <div style={{ margin: 0 }}>

      <div className="searchItem">
        <img src={hotel.imageName} alt={hotel.title} className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{hotel.title}</h1>
         {/*  <span className="siDistance">{hotel.distance}</span> */}

          <span className="siSubtitle">{hotel.desc}</span>
          <span className="siTaxiOp">{hotel.phone}</span>
        </div>
        <div className="siDetails">
        <div className="flex items-center ml-1 mb-4 h-auto rating rating-sm ">
          <StarRating rating={hotel.ratings} id={hotel._id} title={hotel.title} />
      
        </div>
          <div className="siDetailTexts">
            <button className="siCheckButton">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function HotelList() {
  const [hotels, setHotels] = useState([]);
 
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
      const fetchHotels = async () => {
          try {
              const response = await axios.get(`http://localhost:7000/api/Business/getAllBusiness/6551f0ea71a531383b84b711`);
              const data = response.data;
              setHotels(data);
          } catch (error) {
              setError(error);
          } finally {
              setLoading(false);
          }
      };
  
      fetchHotels();
  }, []);

  
  
  
  return (
    <div className="app-container">
      <h2 style={{ color: '#a67003', textAlign: 'center', fontSize: '50px', marginBottom:'10px' }}>List of Hotels</h2>
      
      {/* search */}
      <Search />

      {loading && <p>Loading...</p>}
        
        {error && <p>Error: {error.message}</p>}


      {hotels && Array.isArray(hotels) && hotels.map((hotel) => (
         <ListeHotel key={hotel._id} hotel={hotel}  />
      ))}
    </div>
  );
}

export default HotelList;
