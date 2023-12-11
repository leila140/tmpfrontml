import React, { useState, useEffect } from 'react';
import "./lll.css";
import axios from 'axios';
import StarRating from '../../dashboard/component/starRating';



function Public({publi}) {

    
    
    return (

        <div style={{ margin: 0 }}>
            <div className="searchItem">
                <img
                    src={publi.imageName}
                    alt={publi.title}
                    className="siImg" />
                <div className="siDesc">
                    <h1 className="siTitle">{publi.title}</h1>
                   
                    <span className="siSubtitle"> {publi.desc} </span>
                    <span className="siTaxiOp"> {publi.phone}</span>
                </div>
                <div className="siDetails">
                <div className="flex items-center ml-1 mb-4 h-auto rating rating-sm ">
          <StarRating rating={publi.ratings} id={publi._id} title={publi.title} />
      
        </div>
                    <div className="siDetailTexts">

                        <button  className="siCheckButton">See Details</button>
                    </div>
                </div>
            </div></div>

    );

}
function PublicList() {
    const [publi, setPubli] = useState([]);
   
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchPublic = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/api/Business/getAllBusiness/654b9a29474edc5d7e0d438d`);
                const data = response.data;
                setPubli(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchPublic();
    }, []);
  
    
    
    
    return (
      <div className="app-container">
        <h2 style={{ color: '#a67003', textAlign: 'center', fontSize: '50px', marginBottom:'10px' }}>List of Public</h2>
        
        {loading && <p>Loading...</p>}
          
          {error && <p>Error: {error.message}</p>}
  
  
        {publi && Array.isArray(publi) && publi.map((publi) => (
           <Public key={publi._id} publi={publi}  />
        ))}
      </div>
    );
  }
  
  export default PublicList;
  

