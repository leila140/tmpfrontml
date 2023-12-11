import React, { useEffect, useState } from 'react';
import BusinessCard from '../component/BusinessCard';
import Sidebar from '../component/Sidebar';
import axios from 'axios';
import Header from '../component/Header';
import usePagination from '../hooks/userPagination';

const Dashboard = () => {
  const [businessList, setbusinessList] = useState([]);
  const { pagination, pageNo, setTotalPage } = usePagination({
    pageNo: 1,
    pageSize: 6,
    totalPage: ''
  })

  const [selectedGenres, setSelectedGenred] = useState([]);
  const [filterStar, setFilterStar] = useState(0);
  useEffect(() => {
    getbusinessList();
  }, [pagination.pageNo, pagination.totalPage, selectedGenres, filterStar]);
  useEffect(() => {
    getAllbusiness()
  }, [])
  const getbusinessList = async () => {
    try {
      const response = await axios(`http://localhost:7000/api/business/filter?page=${pagination.pageNo}&pageSize=${pagination.pageSize}`,
        {
          method: "POST",
          data: { selectedGenres, filterStar }
        })
      setbusinessList(response?.data?.businessList)
      setTotalPage(response?.data?.totalPage)
    } catch (error) {
      console.log("Error fetching business list", error);
    }
  }
  const [allbusiness, setAllbusiness] = useState([{}])
  const getAllbusiness = async () => {
    const response = await axios.get("http://localhost:7000/api/business/businessWithGenre")
    setAllbusiness(response.data)
  }




  return (
    <div className='bg-white'>
      <Header
      hidden={true}
        selectedGenres={selectedGenres}
        filterGenre={setSelectedGenred}
        selectedStar={filterStar}
        filterStar={setFilterStar} />
      <div className='flex'>
        <Sidebar />
        <div className="flex-grow mt-16 ml-20 bg-primary-200 min-h-screen bg-white"> {/* Converted color class */}
          {/* ... */}
          <main className="container mx-auto px-4 py-8 ">
            <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {businessList.map((item, index) => (
                <BusinessCard
                  key={index}
                  setAllbusiness={setbusinessList}
                  businessList={allbusiness}
                  id={item._id}
                  imageUrl={item.imageName}
                  title={item.title}
                  desc={item.desc}
                  watchLater={true}
                  genre={item.genre}
                  rating={item.ratings}
                />
              ))}

            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
  <div className="join flex justify-center pb-4">{pageNo}</div>
</div>
          </main>
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
