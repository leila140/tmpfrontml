import React from 'react';
import { AiFillDelete ,AiFillEdit} from 'react-icons/ai';

import { AiOutlineEdit } from 'react-icons/ai';
// Import DaisyUI classes
import 'daisyui/dist/full.css';

import { ToastContainer} from 'react-toastify';

import StarRating from './starRating';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Tooltip from './Tooltip';

const BusinessCard = ({ title, genre, rating, imageUrl,desc, id, setAllbusiness, businessList, watchLater}) => {
  const navigate = useNavigate()
  const handleDelete = async () => {

    const response = await axios("http://localhost:7000/api/business", {
      method: "DELETE",
      data: { id }
    })

    const newList = businessList.filter((item) => item._id !== response.data._id)
    setAllbusiness(newList)

  }
 

  return (
    <div className="flex ">
      <img src={imageUrl} alt={title} className="  w-[140px] h-[300px] object-cover rounded-lg " />

      <div className="bg-gray-100 flex flex-col justify-between  shadow-2xl rounded-md p-4">
        <h2 className="text-xl text-gray-800 font-bold mb-2 capitalize">{title}</h2>
        <p className="text-gray-600 font-normal mb-2">{desc}</p>
        <div className="">
          {genre?.map((item, index) => (
            <div className="badge badge-accent badge-outline ml-1" key={item?._id} >{item.title}</div>
          ))}
        </div>

        <div className="flex items-center ml-1 mb-4 h-auto rating rating-sm">
          <StarRating rating={rating} id={id} title={title} />
          <p className="text-orange-600 mb-1 mt-1 ml-3 font-bold">{(rating / 25) + 1} Star</p>
        </div>
        <div className="flex items-center justify-between">
          <div className=""></div>
          <div className=" flex items-center">
           
            {watchLater && (<>
             
              <Tooltip data={"Click and Edit"} > <Link to={`/business/${id}`} className=' btn text-[21px] hover:text-stone-500' ><AiFillEdit /></Link></Tooltip>
              <Tooltip data={"Permenantaly delete!"} > <div onClick={handleDelete} className=" btn text-[21px] hover:text-red-500"><AiFillDelete /></div></Tooltip></>)}
            
          </div>

        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BusinessCard;
