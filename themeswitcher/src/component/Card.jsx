import React from 'react'
export default function Card() {
    return (
      <div className="w-full rounded-lg shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white transition duration-300">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
          
         
           <div className="px-5 pb-5 text-gray-900 dark:text-white">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      Cute Baby Basket with Furr for smooth touch and comfortable carrying, perfect for newborn photography and baby shower gifts   
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$120</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
