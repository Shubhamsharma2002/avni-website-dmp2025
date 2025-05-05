import React from 'react';

const Profilecard = ({ img, content, detail , goto , text}) => {
  return (
    <div className="border-2 flex flex-col md:flex-row items-center md:items-start gap-4 border-amber-300 rounded-md p-5 mt-5 w-full bg-white shadow-sm">
      <img src={img} alt="profile" className="w-40 h-40 object-cover rounded-full" />
      <div className="flex flex-col justify-center text-center md:text-left">
        <p className="italic text-gray-800 mb-1 font-medium">{content}</p>
        <small className="text-gray-500 font-bold">{detail}
            <a href={goto} target='_blank' className='cursor-pointer text-blue-600'>{text}</a>
        </small>
      </div>
    </div>
  );
};

export default Profilecard;
