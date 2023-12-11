import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from 'react-rating-stars-component';
import CommentsContainer from '../Comments/CommentsContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Portfolio() {

  const { businessId } = useParams(); 
  const [data, setData] = useState({});


  const handleLinkClick = (linkType, linkValue) => {
    if (!linkValue || linkValue.trim() === "") {
      // Show the toast message when the link is empty
      toast.info(`This business doesn't have a ${linkType} account!`, {
        autoClose: 6000,  // 6sec
      });
    }
  };
  
  
  
  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:7000/api/business/${businessId}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [businessId]);

 


  return (
    <>
      <br />


      <div className="relative w-[95%] h-[40%] ml-[39px]  ">
        <section className="border rounded-lg border-white py-4 ">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[100px] ">

         {data &&(   <div className="">
              <div className="max-w-screen-xl justify-start ">
                <header className="pl-2 relative w-screen ">
                  <img className="w-[93%] h-[300px] rounded-lg " src={data.imageName} alt="image" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg w-[93.7%]"></div>
                  <div className="absolute top-20  pl-28 pt-8 font-bold">
                    <h2 className="font-bold text-[5rem] text-white ">{data.title}</h2>
                    <Rating
                      count={5}
                      value={data.ratings}
                     
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                </header>
              </div>

              <div className="relative px-4  pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-4 lg:text-left " >

                <h1 className="font-bold text-4xl mt-6">Description</h1>
                <p className="mt-4  text-black"> {data.desc}</p><br />
                <div className=' text-xl pl-16'> <ion-icon name="call-outline"></ion-icon> {data.phone}</div><br/>
                <div className='text-xl pl-16'><ion-icon name="mail-outline"></ion-icon> {data.email}</div>

                <form className="max-w-xl mx-auto mt-6  lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl">
                  <div className=" pl-28 flex flex-col items-start sm:flex-row space-x-4 ">
                  <Link to={data.localisation} className=" text-center justify-center w-[45%] px-4 py-4 mb-5 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full hover:bg-orange-600 focus:bg-orange-600 ml-0 ">
                      Localisation
                    </Link>
                    
                    <Link to={data.webLink} 
                    className="text-center justify-center w-[45%] px-4 py-4 mb-5 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full hover:bg-orange-600 focus:bg-orange-600 ml-0 "
                    onClick={() => handleLinkClick("WebLink", data.webLink)}
                    > WebLink</Link>

              
                
                </div>
                </form>

                <p className=" text-base text-black space-y-6">

                  <ul class="flex items-center space-x-3 ml-[-4%]">

                    <li>
                    
                    <Link
  to={data.facebook}
  className="flex items-center justify-center text-white transition-all duration-200 bg-black rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600"
  onClick={() => handleLinkClick("Facebook account", data.facebook)}
>
  <ion-icon name="logo-facebook"></ion-icon>
</Link>
    
                    </li>

                    <li>
                    
                    <Link
  to={data.instagram}
  className="flex items-center justify-center text-white transition-all duration-200 bg-black rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600"
  onClick={() => handleLinkClick("Instagram account", data.instagram)}
>
  <ion-icon name="logo-instagram"></ion-icon>
</Link>
    
                    </li>

                    <li>
                    
                    <Link
  to={data.twitter}
  className="flex items-center justify-center text-white transition-all duration-200 bg-black rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600"
  onClick={() => handleLinkClick("Twitter account", data.twitter)}
>
  <ion-icon name="logo-twitter"></ion-icon>
</Link>
      
    
                    </li>

                  </ul>
                </p>

              </div>
              <ToastContainer />
            </div>
)}
          </div>
         
        </section>

        <section className="border rounded-lg border-white py-4 mt-4">
          <div className=" pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-4 lg:text-left ">
            <CommentsContainer logginedUserId="a" />
          </div>
        </section>
        <br />
      </div>
    </>
  )
}





