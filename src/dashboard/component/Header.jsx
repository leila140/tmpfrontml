import React, { useEffect, useState } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import FilterBusiness from './FilteredBusiness';
// import Search from './FilteredMovie';

const Header = ({
  selectedGenres, filterGenre, selectedStar, filterStar, hidden,
}) => {
  const navigate = useNavigate()
  const [token, setToken] = useState({})
  const length = localStorage.getItem("length")

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("movieDb")));
  }, []);
  return (
    <header className="bg-slate-600 fixed top-0 w-full text-white py-3">
      <div className="container mx-auto flex justify-between items-center">

        <Link to="/" className='flex items-center' >
          <img
            src="logo.png"
            alt="Logo"
            className="w-12 h-12"
          />
          <h1 className='font-bold text-white' >MyLaayoune</h1>
        </Link>

        <div className="flex items-center gap-5">
          {hidden && <FilterBusiness selectedGenres={selectedGenres}
            filterGenre={filterGenre}
            selectedStar={selectedStar}
            filterStar={filterStar}
          />}
        

         
        </div>
      </div>
    </header>
  );
};

export default Header;
