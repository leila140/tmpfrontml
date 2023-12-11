import {React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from "../store/actions/user";
import { MdKeyboardArrowDown } from "react-icons/md";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import './traduction.css'


export default () => {
  const userState = useSelector(state => state.user);
  const [state, setState] = useState(false)
  const dispatch = useDispatch();

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <a href="/" >
        <b style={{ fontFamily: "Great Vibes', cursive" }} className='text-3xl ml-[15px]'><ion-icon name="home-outline"></ion-icon></b>
      </a>
      <div className="md:hidden">
        <button className="menu-btn text-gray-500 hover:text-gray-800"
          onClick={() => setState(!state)}
        >
          {
            state ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )
          }
        </button>
      </div>
    </div>
  )
  const logoutHandler = () => {
    dispatch(logout());
  };
  const navigate = useNavigate();

  const [navIsVisible, setNavIsVisible] = useState(false);

  const [profileDrowpdown, setProfileDrowpdown] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  return (

    <div className='relative' >

      <header>
        <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
          <Brand />
        </div>
        <nav className={`pb-5 md:text-sm ${state ? "absolute top-0 inset-x-0  backdrop-blur-lg shadow-lg rounded-xl border mx-2  md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
          <div className="gap-x-14 items-center max-w-screen mx-auto  backdrop-blur-sm border-b border-white bg-gray-50 bg-opacity-20  px-4 md:flex md:px-8">
            <Brand />
            <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'}  `}>
              <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0"> </ul>
             
              {userState.userInfo ? (
                <div className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
                  <div className="relative group">
                    <div className="flex flex-col items-center">
                      <button
                        className="flex gap-x-1 items-center mt-5 lg:mt-0 border-2 border-orange-600 px-6 py-2 rounded-full text-orange-600 font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300"
                        onClick={() => setProfileDrowpdown(!profileDrowpdown)} >
                        <span>Account</span>
                        <MdKeyboardArrowDown />
                      </button>
                      <div
                        className={`${profileDrowpdown ? "block" : "hidden"
                          } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`} >
                        <ul className="bg-dark-soft lg:bg-option text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                          {userState?.userInfo?.admin && (
                            <button
                              onClick={() => navigate("/dashboard")}
                              type="button"
                              className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft">
                              Admin Dashboard
                            </button>
                          )}
                          <button
                            onClick={() => navigate("/dashboard")}
                            type="button"
                            className="hover:bg-dark-hard hover:text-orange-600 px-4 py-2 text-black lg:text-dark-soft" >
                            Admin Dashboard
                          </button>
                          <button
                            onClick={() => navigate("/profile")}
                            type="button"
                            className="hover:bg-dark-hard hover:text-orange-600 px-4 py-2 text-black lg:text-dark-soft">
                            Profile Page
                          </button>
                          <button
                            onClick={logoutHandler}
                            type="button"
                            className="hover:bg-dark-hard hover:text-orange-600 px-4 py-2 text-black lg:text-dark-soft" >
                            Logout
                          </button>
                          <hr className='border-white' />
                          {/* translation */}
                          <div id="google_translate_element"></div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="mt-5 lg:mt-0 border-2 border-orange-600 px-6 py-2 rounded-full text-orange-600 font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300">
                  Sign in
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

    </div>
  )
}