import React from 'react'
import { Link } from 'react-router-dom'
import Contacte from './Contacte'
import  About from './About'
import LiquidButton1 from './LiquidButton1'
import Slides from './Slides';
import Navbar from './Navbar'

export default function Home() {
  return (
    <> 
 
        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start  md:px-1  " style={{marginTop:'400px'}} >
                <div className="max-w-lg mx-auto space-y-3 text-center">
                    <div className="text-indigo-600 font-semibold">
                    <img src="/logo.png" width={490} className="animate-bounce mx-auto mt-[-70%]"/>
                    </div>
                    <p className=" animate-pulse text-white text-4xl font-semibold sm:text-4xl">
                        <p className='text-bold '>Welcome To MyLaayoune</p>
                    </p>
                </div> 
            </div>
            <div style={{marginTop:'100px'}}  >
       <LiquidButton1  />
</div>
        </main>
        <br/>
        <About/>
        <br/><br/>
        <Slides/>
        <div id='contacte'>
        <Contacte/>
        </div>
    </>
  )
}
