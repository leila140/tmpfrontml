import React, { useState, useEffect } from 'react';
import "./lll.css";
import axios from 'axios';
import StarRating from '../../dashboard/component/starRating';



function Education({education}) {

    
    
    return (

        <div style={{ margin: 0 }}>
            <div className="searchItem">
                <img
                    src={education.imageName}
                    alt={education.title}
                    className="siImg" />
                <div className="siDesc">
                    <h1 className="siTitle">{education.title}</h1>
                   
                    <span className="siSubtitle"> {education.desc} </span>
                    <span className="siTaxiOp"> {education.phone}</span>
                </div>
                <div className="siDetails">
                <div className="flex items-center ml-1 mb-4 h-auto rating rating-sm ">
          <StarRating rating={education.ratings} id={education._id} title={education.title} />
      
        </div>
                    <div className="siDetailTexts">

                        <button  className="siCheckButton">See Details</button>
                    </div>
                </div>
            </div></div>

    );

}
function EducationList() {
    const [education, setEducation] = useState([]);
   
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchEducation = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/api/Business/getAllBusiness/654b9a20474edc5d7e0d438a`);
                const data = response.data;
                setEducation(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchEducation();
    }, []);
  
    
    
    
    return (
      <div className="app-container">
        <h2 style={{ color: '#a67003', textAlign: 'center', fontSize: '50px', marginBottom:'10px' }}>List of Education</h2>
        
        {loading && <p>Loading...</p>}
          
          {error && <p>Error: {error.message}</p>}
  
  
        {education && Array.isArray(education) && education.map((education) => (
           <Education key={education._id} education={education}  />
        ))}
      </div>
    );
  }
  
  export default EducationList;
  

