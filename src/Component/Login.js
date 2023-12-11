import React, {useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { useDispatch , useSelector} from 'react-redux'
import Footers from './Footer'
import { login } from '../services/index/users.js'
import { userActions } from '../store/reducers/userReducers'
import toast from 'react-hot-toast'



export default function Login() {
   
   
    const navigate= useNavigate();
    const dispatch = useDispatch();
   const userState= useSelector(state => state.user);
   
    
   const {mutate,isLoading} = useMutation({
           mutationFn :({email,password})=>{
               return login({email,password});
           },
           onSuccess:(data)=>{
              dispatch(userActions.setUserInfo(data));
              localStorage.setItem('account', JSON.stringify(data))
           },
           onError:(error)=>{
            toast.error(error.message);
               console.log(error);
           },
       });
    
       useEffect(()=> {
          if(userState.userInfo){
               navigate("/");
          }
       },[navigate,userState.userInfo])
   
       const {
           register,
           handleSubmit,
           formState: {errors,isValid},
           
       } = useForm({
           defaultValues:{
                 
           email:"",
           password:"",
           
           },
           mode:'onChange',
         
   
       })
       const submitHandler =(data)=>{
          const {email,password} = data;
           mutate({email,password})
       };
   
    



  return (
    <div className='delay-[300ms] duration-[600ms] taos:scale-[1.2] taos:opacity-0" data-taos-offset="400"'>
    
         <main className="  flex flex-col items-center  justify-center px-2 z-2"   >
            <div className="max-w-lg shadow-lg w-full text-gray-600 border border-white rounded-lg backdrop-blur-lg  p-6">
                <div className="text-center ">
                    <img src="/logo.png" width={490} className="mx-auto " />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-white text-2xl font-bold sm:text-3xl">Login to your account</h3>
                        <p className="text-[#d4d4d8]">You don't have account?<Link to="/SingUp" href="javascript:void(0)" className="font-medium text-[#ea580c] hover:text-[#f97316]  "> SingUp</Link></p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(submitHandler) }
                    className="mt-8 space-y-5"
                >
                   
                    <div>
                        <label className="font-medium text-white ">
                            Email
                        </label>
                        <input
                            type="email"
                            id='email'
                            {...register('email',{
                               pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email'
                               },
                                required:{
                                    value:true,
                                    message:"Email is required",
                                }
                            })}
                            placeholder='Enter Email'
                         
                            className={` w-full mt-2 px-3 py-2 text-gray-50 bg-transparent outline-none border focus:border-[#fb923c]shadow-sm rounded-lg ${errors.email? "border-red-500" : "border-white"}`}
                        />
                         {errors.email?.message && (
                            <p className='text-red-500 text-xs mt-1'>
                                {errors.email?.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="font-medium text-white ">
                            Password
                        </label>
                        <input
                            type="password"
                            id='password'
                            {...register('password',{
                                 required:{
                                    value:true,
                                    message:'Password is required'

                                 },
                                 minLength:{
                                    value:6,
                                    message:'Password length must be at least 6 character',
                                 },
                            })}
                            placeholder='Enter Password'
                         
                            className={` w-full mt-2 px-3 py-2 text-gray-50 bg-transparent outline-none border focus:border-[#fb923c]shadow-sm rounded-lg ${errors.password? "border-red-500" : "border-white"}`}
                        />
                         {errors.password?.message && (
                            <p className='text-red-500 text-xs mt-1'>
                                {errors.password?.message}
                            </p>
                        )}
                    </div>
                    <button
                       type='submit'
                       disabled={!isValid || isLoading}
                        className="  animate-shake animate-infinite animate-duration-700 animate-delay-[600ms] animate-ease-linear animate-normal animate-fill-backwards  w-full px-4 py-2 text-white font-medium bg-[#ea580c] hover:bg-[#f97316] active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Login
                                            </button>
                    
                </form>
            </div>
        </main><br/>
        <Footers/>
    </div>
  )
}
