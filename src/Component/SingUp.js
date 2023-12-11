import React, {useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { useDispatch , useSelector} from 'react-redux'
import Footers from './Footer'
import { signup } from '../services/index/users.js'
import { userActions } from '../store/reducers/userReducers'

export default function SingUp() {

const navigate= useNavigate();
 const dispatch = useDispatch();
const userState= useSelector(state => state.user);

 
const {mutate,isLoading} = useMutation({
        mutationFn :({name,email,password})=>{
            return signup({name,email,password});
        },
        onSuccess:(data)=>{
           dispatch(userActions.setUserInfo(data));
           localStorage.setItem('account', JSON.stringify(data))
        },
        onError:(error)=>{
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
        watch,
    } = useForm({
        defaultValues:{
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        },
        mode:'onChange',
      

    })
    const submitHandler =(data)=>{
       const {name,email,password} = data;
        mutate({name,email,password})
    };

    const password = watch('password');
  
  return (
    <div>
     <main className=" flex flex-col items-center  justify-center px-2 z-2">
            <div className="max-w-lg shadow-lg w-full text-gray-600 border border-white rounded-lg backdrop-blur-lg  p-6">
                <div className="text-center ">
                    <img src="/logo.png" alt="logo" width={490} className="mx-auto " />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-white text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="text-[#d4d4d8]">You have account?<Link to="/Login" className="font-medium text-[#ea580c] hover:text-[#f97316]  "> Login</Link></p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(submitHandler) }
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="font-medium text-white ">
                            Name
                        </label>
                        <input
                            type="text"
                            id='name'
                            {...register('name',{
                                minLength:{
                                    value:1,
                                    message:"Name length must be at least 1 character",
                                },
                                required:{
                                    value:true,
                                    message:"Name is required",
                                }
                            })}
                            placeholder='Enter name'
                           
                            className={` w-full mt-2 px-3 py-2 text-gray-50 bg-transparent outline-none border focus:border-[#fb923c]shadow-sm rounded-lg ${errors.name? "border-red-500" : "border-white"}`}
                        />
                        {errors.name?.message && (
                            <p className='text-red-500 text-xs mt-1'>
                                {errors.name?.message}
                            </p>
                        )}
                    </div>
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
                    <div>
                        <label className="font-medium text-white ">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id='ConfirmPassword'
                            {...register('confirmPassword',{
                                required:{
                                    value:true,
                                    message:'Confirm password is required'
                                },
                                validate:(value)=>{
                                      if(value !== password){
                                        return "Passwords do not match";
                                      }
                                }

                            })}
                            placeholder='Enter Confirm Password'
                            
                            className={` w-full mt-2 px-3 py-2 text-gray-50 bg-transparent outline-none border focus:border-[#fb923c]shadow-sm rounded-lg ${errors.confirmPassword? "border-red-500" : "border-white"}`}
                        />
                         {errors.confirmPassword?.message && (
                            <p className='text-red-500 text-xs mt-1'>
                                {errors.confirmPassword?.message}
                            </p>
                        )}
                    </div>
                    <button
                    type='submit'
                    disabled={!isValid || isLoading}
                        className="w-full px-4 py-2 text-white font-medium bg-[#ea580c] hover:bg-[#f97316] active:bg-indigo-600 rounded-lg duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        Sign Up
                    </button>
                    <button class="animate-jump-in animate-delay-300 animate-once">
  Wait a bit, then jump right in.
</button>
                    
                </form>
            </div>
        </main><br/>
        <Footers/>
</div>
  )
}
