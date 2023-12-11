import React, { useState, useEffect } from 'react';
import "./lll.css";
import axios from 'axios';
import StarRating from '../../dashboard/component/starRating';



function BanK({bank}) {

    
    
    return (

        <div style={{ margin: 0 }}>
            <div className="searchItem">
                <img
                    src={bank.imageName}
                    alt={bank.title}
                    className="siImg" />
                <div className="siDesc">
                    <h1 className="siTitle">{bank.title}</h1>
                   
                    <span className="siSubtitle"> {bank.desc} </span>
                    <span className="siTaxiOp"> {bank.phone}</span>
                </div>
                <div className="siDetails">
                <div className="flex items-center ml-1 mb-4 h-auto rating rating-sm ">
          <StarRating rating={bank.ratings} id={bank._id} title={bank.title} />
      
        </div>
                    <div className="siDetailTexts">

                        <button  className="siCheckButton">See Details</button>
                    </div>
                </div>
            </div></div>

    );

}
function BankList() {
    const [banks, setBanks] = useState([]);
   
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchBanks = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/api/Business/getAllBusiness/654b9a0c474edc5d7e0d4384`);
                const data = response.data;
                setBanks(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchBanks();
    }, []);
  
    
    
    
    return (
      <div className="app-container">
        <h2 style={{ color: '#a67003', textAlign: 'center', fontSize: '50px', marginBottom:'10px' }}>List of Banks</h2>
        
        {loading && <p>Loading...</p>}
          
          {error && <p>Error: {error.message}</p>}
  
  
        {banks && Array.isArray(banks) && banks.map((bank) => (
           <BanK key={bank._id} bank={bank}  />
        ))}
      </div>
    );
  }
  
  export default BankList;
  

