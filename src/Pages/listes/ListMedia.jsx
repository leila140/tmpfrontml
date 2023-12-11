import React, { useState, useEffect } from 'react';
import "./lll.css";
import axios from 'axios';
import StarRating from '../../dashboard/component/starRating';



function Media({media}) {

    
    
    return (

        <div style={{ margin: 0 }}>
            <div className="searchItem">
                <img
                    src={media.imageName}
                    alt={media.title}
                    className="siImg" />
                <div className="siDesc">
                    <h1 className="siTitle">{media.title}</h1>
                   
                    <span className="siSubtitle"> {media.desc} </span>
                    <span className="siTaxiOp"> {media.phone}</span>
                </div>
                <div className="siDetails">
                <div className="flex items-center ml-1 mb-4 h-auto rating rating-sm ">
          <StarRating rating={media.ratings} id={media._id} title={media.title} />
      
        </div>
                    <div className="siDetailTexts">

                        <button  className="siCheckButton">See Details</button>
                    </div>
                </div>
            </div></div>

    );

}
function MediaList() {
    const [media, setMedia] = useState([]);
   
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchMedia = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/api/Business/getAllBusiness/654b9a14474edc5d7e0d4387`);
                const data = response.data;
                setMedia(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchMedia();
    }, []);
  
    
    
    
    return (
      <div className="app-container">
        <h2 style={{ color: '#a67003', textAlign: 'center', fontSize: '50px', marginBottom:'10px' }}>List of Media</h2>
        
        {loading && <p>Loading...</p>}
          
          {error && <p>Error: {error.message}</p>}
  
  
        {media && Array.isArray(media) && media.map((media) => (
           <Media key={media._id} media={media}  />
        ))}
      </div>
    );
  }
  
  export default MediaList;
  

