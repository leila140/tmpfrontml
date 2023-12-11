import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '../Ads/Data.json';
import Rating from 'react-rating-stars-component';
import CommentsContainer from '../Comments/CommentsContainer';


import { useSelector } from 'react-redux';



export default function AdminstrationP() {

  const ProfileId = useParams().adminstrationItem;
  const [img, setImg] = useState('')
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')




  const userState = useSelector((state => state.user))

  useEffect(() => {
    const data = Data.adminstration.find(item =>
      parseInt(item.id) === parseInt(ProfileId)
    )
    setImg(data.img)
    setTitle(data.title)
    setEmail(data.email)


  }, [])

  // Rating
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <>
      <br />


      <div className="relative w-[95%] h-[40%] ml-[39px]  ">
        <section className="border rounded-lg border-white py-4 ">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[100px] ">

            <div className="">
              <div className="max-w-screen-xl justify-start ">
                <header className="pl-2 relative w-screen ">
                  <img className="w-[93%] h-[300px] rounded-lg " src={img} alt="" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg w-[93.7%]"></div>
                  <div className="absolute top-20  pl-28 pt-8 font-bold">
                    <h2 className="font-bold text-[5rem] text-white ">{title}</h2>
                    <Rating
                      count={5}
                      value={rating}
                      onChange={handleRatingChange}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                </header>
              </div>

              <div className="relative px-4  pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-4 lg:text-left " >

                <h1 className="font-bold text-4xl mt-6">Description</h1>
                <p className="mt-4  text-black">We help you to make your remote work life easier. Build a distruction free working experience  distruction free working experience.In Laayoune City .</p><br />
                <Link to="/" className=' text-xl pl-16'> <ion-icon name="call-outline"></ion-icon> +212 5288-94168</Link><br />
                <Link to="/" className='text-xl pl-16'><ion-icon name="mail-outline"></ion-icon> {email}</Link>

                <form className="max-w-xl mx-auto mt-6  lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl">
                  <div class=" pl-28 flex flex-col items-start sm:flex-row space-x-4 ">
                    <button type="submit" className=" mb-[16%] justify-center w-[45%] px-4 py-4 mb-5 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full hover:bg-orange-600 focus:bg-orange-600 ml-0 ">
                      Localisation
                    </button>
                    <Link to="/" className="mb-[16%] text-center justify-center w-[45%] px-4 py-4 mb-5 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full hover:bg-orange-600 focus:bg-orange-600 ml-0 ">
                      WebLink
                    </Link>
                  </div>
                </form>

                <p className=" text-base text-black space-y-6">

                  <ul class="flex items-center space-x-3 ml-[-4%]">

                    <li>
                      <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-black rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600">
                        <ion-icon name="logo-facebook"></ion-icon>
                      </a>
                    </li>

                    <li>
                      <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-black rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600">
                        <ion-icon name="logo-instagram"></ion-icon>
                      </a>
                    </li>

                    <li>
                      <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-black rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600">
                        <ion-icon name="logo-google"></ion-icon>
                      </a>
                    </li>

                  </ul>
                </p>

              </div>

            </div>

          </div>

        </section>

        <section className="border rounded-lg border-white py-4 mt-4">
          <div className=" pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-4 lg:text-left ">
            <CommentsContainer logginedUserId="a" />

            <CommentsContainer 
            
            logginedUserId={userState?.userInfo?._id}
              />

          </div>
        </section>
        <br />
      </div>
    </>
  )
}





