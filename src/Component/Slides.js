import React from 'react'

export default function Slides() {
  const categories = ['Hotel', 'Restaurants', 'Shopping','Health','Beauty',];


  return (
    <>
      {/* ------------1----------------- */}
        <div className="space-y-4">
  <details
    className=" group border-s-[5px] border-[#0284c7] border rounded-lg shadow-lg  py-4 backdrop-blur-lg p-6 [&_summary::-webkit-details-marker]:hidden w-[95%] ml-[3%]"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-[#0284c7] ml-[3%]">
      <b> Accommodations :</b>
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
    <Hotel/>
    </p>
  </details>
     {/* -----------------2----------- */}
     <details
    className="group border-s-[5px] border-[#ea580c] border rounded-lg shadow-lg  py-4 backdrop-blur-lg p-6 [&_summary::-webkit-details-marker]:hidden w-[95%] ml-[3%]"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-[#ea580c] ml-[3%]">
      <b> Food :</b>
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
    <Restaurants/>
    </p>
  </details>
  {/* ----------------------3----------------- */}
  <details
    className="border-[#00235B] group border-s-[5px] border rounded-lg shadow-lg  py-4 backdrop-blur-lg p-6 [&_summary::-webkit-details-marker]:hidden w-[95%] ml-[3%]"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-[#00235B] ml-[3%]">
      <b> Shopping :</b>
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
   <Shopping/>
    </p>
  </details>
  {/* --------------------4------------------ */}
  <details
    className="group border-s-[5px] border-[#65a30d] border rounded-lg shadow-lg  py-4 backdrop-blur-lg p-6 [&_summary::-webkit-details-marker]:hidden w-[95%] ml-[3%]"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-[#65a30d] ml-[3%]">
      <b> Health :</b>
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>
    <p className="mt-4 leading-relaxed text-gray-700">
    <Health/>
    </p>
  </details>
  {/* -------------------5------------------ */}
  <details
    className="group border-s-[5px] border-[#92400e] border rounded-lg shadow-lg  py-4 backdrop-blur-lg p-6 [&_summary::-webkit-details-marker]:hidden w-[95%] ml-[3%]"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-[#92400e] ml-[3%]">
      <b> Beauty :</b>
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
    <Beauty/>
    </p>
  </details>
  {/* --------------------6----------------- */}
  <details
    className="group border-s-[5px] border-[#CECE5A] border rounded-lg shadow-lg  py-4 backdrop-blur-lg p-6 [&_summary::-webkit-details-marker]:hidden w-[95%] ml-[3%]"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-[#CECE5A] ml-[3%]">
      <b> AutoMotive :</b>
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
 <AutoMotive/>
    </p>
  </details>
  {/* --------------------7----------------- */}
  <details
    className="group border-s-[5px] border-[#8F43EE] border rounded-lg shadow-lg  py-4 backdrop-blur-lg p-6 [&_summary::-webkit-details-marker]:hidden w-[95%] ml-[3%]"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-[#8F43EE] ml-[3%]">
      <b> Hobbies :</b>
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
    <Hobbies/>
    </p>
  </details>
  {/* --------------------8----------------- */}
  <details
    className="group border-s-[5px] border-[#ea580c] border rounded-lg shadow-lg  py-4 backdrop-blur-lg p-6 [&_summary::-webkit-details-marker]:hidden w-[95%] ml-[3%]"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-[#ea580c] ml-[3%]">
      <b> Transport :</b>
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
    <Transport/>
    </p>
  </details>
  {/* --------------------9----------------- */}
  <details
    className="group border-s-[5px] border-[#F0EB8D] border rounded-lg shadow-lg  py-4 backdrop-blur-lg p-6 [&_summary::-webkit-details-marker]:hidden w-[95%] ml-[3%]"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-[#F0EB8D] ml-[3%]">
      <b> Adminstration :</b>
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      <Adminstration/>
    </p>
  </details>
  {/* --------------------10----------------- */}
  <details
    className="group border-s-[5px] border-[#FAEAB1] border rounded-lg shadow-lg  py-4 backdrop-blur-lg p-6 [&_summary::-webkit-details-marker]:hidden w-[95%] ml-[3%]"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-[#FAEAB1] ml-[3%]">
      <b> services  :</b>
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
  <Services/>
    </p>
  </details>

</div>
    </>
  )
}
