import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';


export default function Footers() {
  return (
    // <Footer container>
      <div className="w-full p-6 border-t  bg-gray-50 bg-opacity-20 backdrop-blur-lg">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              alt="Flowbite Logo"
              href="/"
              name="MyLaayoune"
              src="Logo.png"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Ads MyLaayoune
                </Footer.Link>
                <Footer.Link href="#">
                 Contact us
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Facebook
                </Footer.Link>
                <Footer.Link href="#">
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div  className=' my-6 '  />
        <div className="w-full b sm:flex sm:items-center sm:justify-between">
          <p className='text-[#d6d3d1]'>MyLaayoune 2024</p>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
            className='text-white '
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
            className='text-white'
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
            className='text-white'
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
            className='text-white'
              href="#"
              icon={MdMarkEmailRead}
            />
            
          </div>
        </div>
      </div>
    // </Footer>
  )
}


