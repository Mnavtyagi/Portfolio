import React from 'react'
import { FaFacebook ,FaInstagram,FaLinkedin, FaTwitter } from 'react-icons/fa';

function footer() {
  return (<><hr/>
    <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-4 my-20 mt-10">
<div className="flex flex-col items-center justify-center">
    <div className="flex space-x-4">
        <FaFacebook size={24}/>
        <FaTwitter size={24}/>
        <FaInstagram size={24}/>
        <FaLinkedin size={24}/>

    </div>
    <div className="mt-8 border-t border-gray-700 pt-8 flex-col items-center"><p className="text-sm font-semibold">
        &copy; 2024 Company. All rights reserved.</p>
        <p className="text-sm font-semibold">Supportive Partner Manav Tyagi
            </p></div>
</div>
        </div>
    </footer> </>
  )
}

export default footer;