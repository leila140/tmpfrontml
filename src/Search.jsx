import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getDataAPI } from './axios/fetchData';
import { FaSearch } from 'react-icons/fa';
import ListeHotel from './Pages/listes/ListeHotel';
import { Link } from 'react-router-dom';

const Search = () => {
    const [search, setSearch] = useState('');
    const [businesses, setBusinesses] = useState([]);

    const { auth } = useSelector(state => state);
    const [load, setLoad] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!search || !auth) return;

        try {
            setLoad(true);
            const res = await getDataAPI(`business-search?name=${search}`, auth.token);
            setBusinesses(res.data.businesses);
            setLoad(false);
        } catch (err) {
            console.error('Error searching businesses:', err);
        }
    }

    const handleClose = () => {
        setSearch('');
        setBusinesses([]);
    }

    return (
        <div className='flex flex-col lg:flex-row lg:items-stretch lg:min-h-90 sm:min-h-full mt-11'>
            <div className='text-center w-72 h-auto py-2 ml-48 border-2 border-orange-600 rounded-full'>
                <input
                    type='search'
                    className='bg-transparent border-none focus:outline-none focus:ring-0 text-gray-800'
                    placeholder='search...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className='text-gray-800' onClick={handleSearch}><FaSearch /></button>
                <ul>
                    {search && businesses.map(business => (
                        <Link key={business._id} to={`/business/${business._id}`}>
                            <ListeHotel
                                key={business._id}
                                business={business}
                                border="border"
                                handleClose={handleClose}
                            />
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Search;
