import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper';
import './Bg.css'

function TestimonialSlider() {
  const [hotelData, setHotelData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/Business/getAllBusiness/6551f0ea71a531383b84b711');
        const data = await response.json();
        setHotelData(data);
        initializeSwiper(); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  // Function to initialize Swiper
  const initializeSwiper = () => {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 32,
      autoplay: {
        delay: 8000,
      },
      breakpoints: {
        640: {
          centeredSlides: true,
          slidesPerView: 1.25,
        },
        1024: {
          centeredSlides: false,
          slidesPerView: 1.5,
        },
      },
      navigation: {
        nextEl: '.next-button',
        prevEl: '.prev-button',
      },
    });
  };



  return (
    
 <>
      <section className=" border rounded-lg shadow-lg border-[#0284c7] py-4 backdrop-blur-lg w-[94%] ml-[3%]">
{/* 
      <div id="container-stars">
      <div id="stars"></div>
      </div> */}
      
        <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Find a suitable accommodation for you
        </h2>
        
        <p className="mt-4 text-gray-500">
        You are A new visitor looking for a place to stay, welcome, as there is a series of good hotels, you will find what you want
        </p>

        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
          <button
            className="prev-button rounded-full border border-[#0284c7] p-3 text-[#0284c7] hover:bg-[#0284c7] hover:text-white"
          >
            <span className="sr-only">Previous Slide</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            className="next-button rounded-full border border-[#0284c7] p-3 text-[#0284c7] hover:bg-[#0284c7] hover:text-white"
          >
            <span className="sr-only">Next Slide</span>
            <svg
              className="h-5 w-5 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
{/* ------------------------------MAP--------------------------------------------------------- */}
            <div className="-mx-6 lg:col-span-2 lg:mx-0">
              <div className="swiper-container !overflow-hidden">
                <div className="swiper-wrapper">
                  {hotelData.map((hotelItem) => (
                    <div key={hotelItem.id} className="swiper-slide">
                      <blockquote
                        className="flex h-full flex-col justify-between p-12"
                        style={{ backgroundImage: `url(${hotelItem.imageName})`, backgroundSize: 'cover' }}
                      >
                        <div>
                          <div className="flex gap-0.5 text-[#fbbf24]">
                          <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>

                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>

                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>

                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>

                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                          </div>

                          <div className="mt-4">
                            <p className="text-2xl font-bold text-white sm:text-3xl">
                              {hotelItem.title}
                            </p>

                            <p className="mt-4 leading-relaxed text-white">
                              {hotelItem.desc}
                            </p>
                          </div>
                        </div>

                        <footer className="mt-8 text-sm text-gray-500">
                          <button className='justify-center w-[45%] px-4 py-4 mb-5 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full hover:bg-orange-600 focus:bg-orange-600 '>
                            <Link to={`/portfolio/${hotelItem._id}`}>  &mdash; See More </Link>
                          </button>
                        </footer>
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
{/* ------------------------END MAP--------------------------------------------------- */}
          <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
  aria-label="Previous slide"
  className="prev-button rounded-full border border-[#0284c7] p-3 text-[#0284c7] hover:bg-[#0284c7] hover:text-white"
>
        <svg
          className="h-5 w-5 -rotate-180 transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>

      <button
  aria-label="Next slide"
  className="next-button rounded-full border border-[#0284c7] p-3 text-[#0284c7] hover:bg-[#0284c7] hover:text-white"
>
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button> 
          </div>
        </div>
     
      </section>
    </>
 


  );
}

export default TestimonialSlider;
