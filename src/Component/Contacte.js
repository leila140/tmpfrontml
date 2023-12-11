import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8zjn1up', 'template_m3szv8j', form.current, 'YzUVYRRccktngwkZw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
return (
    <>
       <main className="  py-14  delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300"  >
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 border rounded-lg shadow-lg border-white py-4 backdrop-blur-lg" >
                <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                    <h1 className="text-[#ea580c] text-3xl  font-semibold sm:text-4xl ">
                        Contact
                    </h1>
                    <p className="text-gray-800 font-semibold ">
                        Get in touch
                    </p>
                    <p>
                        We'd love to hear from you! Please fill out the form bellow.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                    <form
                        ref={form} onSubmit={sendEmail}
                        className="space-y-5"
                    >
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                            <div>
                                <label className="font-medium text-gray-900">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    name='first_name'
                                    required
                                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium text-gray-900">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    name='last_name'
                                    required
                                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium text-gray-900">
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                required
                                className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium text-gray-900">
                                Phone number
                            </label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                    <select className="text-sm bg-transparent outline-none rounded-lg h-full text-gray-900">
                                        <option>US</option>
                                        <option>ES</option>
                                        <option>MR</option>
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    placeholder="+1 (555) 000-000"
                                    name='number'
                                    required
                                    className="w-full pl-[4.5rem] pr-3 py-2 text-white appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium text-gray-900">
                                Message
                            </label>
                            <textarea required name='message' className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-white"></textarea>
                        </div>
                        <button type='submit'
                            className="w-full px-4 py-2 text-white font-medium bg-[#ea580c] hover:bg-[#f97316] active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </main>
    </>
  )
}

export default Contact;