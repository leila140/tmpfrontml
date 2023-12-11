import React, { useEffect, useState } from 'react';
import 'daisyui/dist/full.css';
import Sidebar from '../component/Sidebar';
import axios from 'axios';
import Header from '../component/Header';
import {AiOutlineUpdate} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const BusinessForm = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('')
  const [genres, setGenres] = useState([{}]);

  const [rating, setRating] = useState(0);
  const [businessId, setbusinessId] = useState(0);
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState("");
  const [cImage, setCImage] = useState("");
  const [uImage, setUImage] = useState("");
  const [loading, setLoading] = useState(false)
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [localisation,setLocalisation] = useState('');
  const [webLink,setWebLink] = useState('');
  const [facebook,setFacebook] = useState('');
  const [instagram,setInstagram] = useState('');
  const [twiter,setTwiter] = useState('');

  const params = useParams();
  const navigation = useNavigate();
  const isEditing= !!params.id;
  
  useEffect(() => {
    getAllGenre()
    if (isEditing) {
      getbusinessUpdate()
    }
  }, [isEditing]);

  const getbusinessUpdate = async () => {
    try {
      const response = await axios.post('http://localhost:7000/api/business/businessById', { id: params.id });
      const data = response?.data;
  
      if (data) {
        const { ratings, genre, title, desc, _id, imageName, phone, email, localisation, webLink, faceBook, instagram, twiter } = data;
        setTitle(title);
        setDesc(desc);
        setbusinessId(_id);
        setGenre(genre);
        setUImage(imageName);
        setRating(ratings);
        setPhone(phone);
        setEmail(email);
        setLocalisation(localisation);
        setWebLink(webLink);
        setFacebook(faceBook);
        setInstagram(instagram);
        setTwiter(twiter);
      }
    } catch (error) {
      console.error('Error fetching business update:', error);
    }
  };

  const getAllGenre = async () => {
    const response = await axios.get('http://localhost:7000/api/genres')
    setGenres(response.data)
}
const handleLocalisationChange = (event) => {

  setLocalisation(event.target.value);
};
const handleWebLinkChange = (event) => {
 setWebLink(event.target.value);
};
const handleFacebookChange = (event) => {

  setFacebook(event.target.value);
};
const handleInstagramChange = (event) => {

  setInstagram(event.target.value);
};
const handleTwiterChange = (event) => {

  setTwiter(event.target.value);
};
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescChange = (event) =>{
    setDesc(event.target.value);
  }

  const handleRatingChange = (event) => {

    setRating(event.target.value);
  };
  const handlePhoneChange = (event) => {

    setPhone(event.target.value);
  };
  const handleEmailChange = (event) => {

    setEmail(event.target.value);
  };
  const handleGenreChange = (event) => {

    const id = event.target.id;
    if (!genre.includes(id) && event.target.checked) {
      setGenre([...genre, id]);
    } else {
      const newList = genre.filter((item) => item != id);
      setGenre(newList);
    }

  };

  const handleImageChange = (event) => {
    const img = event.target.files[0];
    setImage(img);
    setUImage(URL.createObjectURL(img));

  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    let businessImageUrlCondition = businessId == 0 ? "" : uImage;
    if (businessId == 0) {
      setLoading(true)
      var data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "kbdydx0z");
      data.append("cloud_name", "doonbcqw7");

      const config = {
        method: "POST",
        body: data,
      };

      try {
        const response = await fetch("https://api.cloudinary.com/v1_1/doonbcqw7/image/upload", config);
        const responseData = await response.json();

        businessImageUrlCondition = responseData.url
        setUImage(responseData.url)
        // Do something with the responseData
      } catch (error) {
        console.log(error);
        // Handle the error
      }
      try {

        if (businessImageUrlCondition != "") {
          setLoading(true)
          const response = await axios("http://localhost:7000/api/business/CreateBusiness", {
            method: "POST",
            data: {
              imageName: businessImageUrlCondition,
              title,
              // id: businessId,
              desc,
              ratings: rating,
              genre,
              phone ,
              email, 
              localisation, 
              webLink ,
              facebook ,
              instagram ,
              twiter
            },
          });
          if (response.status === 200) {

            navigation('/dashboard')
          }
        }
      } catch (error) {
        console.log(error);
        setLoading(false)
      } finally {
        setLoading(false)
      }

    }


    try {
      if (businessId != 0) {
        setLoading(true)
        const response = await axios('http://localhost:7000/api/business/update', {
          method: "PUT",
          data: {
            id: businessId,
            title,

            ratings: rating,
            desc,
            genre,
            phone ,
            email, 
             localisation, 
             webLink ,
             facebook ,
             instagram ,
             twiter,
            imageName: uImage
          },
        })
        if (response.status == 200) {
          navigation('/dashboard')
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }


  };


  return (
    < div className='bg-gray-100  '  >
 <Header  />
      <div className='flex'></div>
      <Sidebar />
      <div className="max-w-md ml-[100px] sm:mx-auto mt-20 bg-gray-200 p-4 shadow-2xl border border-gray-300 rounded-md " style={{Height: '100%', overflowY: 'auto' }}>
        <h2 className="text-2xl font-semibold mb-4">{params.id ? 'Edit business' : 'Add business'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex justify-between items-center">
            <div className="">
              <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
                Add Image
              </label>
              <input type="file" onChange={handleImageChange} className="file-input file-input-bordered text-gray-900 w-full max-w-xs" />
            </div>
            {uImage && <div className="rounded-xl ml-3">
              <img src={uImage} className='w-44 h-44 object-contain rounded-xl' alt="" />
            </div>}

          </div>

          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Title
            </label>
            <input
              placeholder='Title'
              type="text"
              id="title"
              className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Desc" className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              placeholder='Description'
              
              id="title"
              className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={desc}
              onChange={handleDescChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-700 font-semibold mb-2">
              Rating
            </label>
            <input onChange={handleRatingChange} type="range"
              min={0}
              max="100"
              value={rating}
              className="range"
              step="25" />
            <div className="w-full flex justify-between text-xs px-2">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>

          </div>
          <div className="my-3 flex justify-between flex-wrap">


            {genres.map((item, index) => (
              <div className="form-control ">
                <label key={index} className="label cursor-pointer space-x-2">
                  <span className="label-text font-semibold capitalize">{item.title}</span>
                  <input
                    id={item._id}
                    name={item.title}
                    onChange={handleGenreChange}
                    type="checkbox"
                    checked={genre.includes(item._id) || false}
                    className="checkbox checkbox-secondary"

                  />
                </label>
              </div>
            ))
            }


          </div>
          <div className="mb-4">
            <label htmlFor="Phone" className="block text-gray-700 font-semibold mb-2">
              Phone
            </label>
            <input
              placeholder='Phone'
              type="tel"
              id="phone"
              className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              placeholder='Email'
              type="email"
              id="email"
              className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="localisation" className="block text-gray-700 font-semibold mb-2">
              Localisation
            </label>
            <input
              placeholder='localisation'
              type="url"
              id="localisation"
              className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={localisation}
              onChange={handleLocalisationChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="webLink" className="block text-gray-700 font-semibold mb-2">
              Web Link
            </label>
            <input
              placeholder='Web Link'
              type="url"
              id="webLink"
              className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={webLink}
              onChange={handleWebLinkChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="facebook" className="block text-gray-700 font-semibold mb-2">
              Facebook
            </label>
            <input
              placeholder='Facebook account'
              type="url"
              id="facebook"
              className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={facebook}
              onChange={handleFacebookChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="instagram" className="block text-gray-700 font-semibold mb-2">
              Instagram
            </label>
            <input
              placeholder='instagram account'
              type="url"
              id="instagram"
              className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={instagram}
              onChange={handleInstagramChange}
            />
          </div> <div className="mb-4">
            <label htmlFor="twiter" className="block text-gray-700 font-semibold mb-2">
              twiter
            </label>
            <input
              placeholder='twiter account'
              type="url"
              id="twiter"
              className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={twiter}
              onChange={handleTwiterChange}
            />
          </div>
          <button onClick={handleSubmit} className="bg-blue-600 text-white font-bold hover:text-black p-2 rounded">
  {loading && <span className="loading loading-spinner"></span>}
  {loading ? "Loading..." : "Submit"}
</button>

        </form>

      </div>
    </div>
  );
};

export default BusinessForm;
