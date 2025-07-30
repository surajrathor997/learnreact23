import React from "react";

function Card({username, btnText="visit me"}){
  console.log(username);


    return (
        <>
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.unsplash.com/photo-1602524209040-61df6d40f94b"
          alt= ""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <h1>  {username}</h1>
        <h2>{btnText}</h2>
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
        </>
    )
}

export default Card