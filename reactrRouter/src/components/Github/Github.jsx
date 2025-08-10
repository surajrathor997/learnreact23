import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

const userData = useLoaderData()

//   const [userData, setUserData] = useState({});
  const [followers, setFollowers] = useState([]);

//   useEffect(() => {
//     // 1. User data (count, etc.)
//     fetch('https://api.github.com/users/surajrathor997')
//       .then(response => response.json())
//       .then(data => {
//         console.log("User Data:", data);
//         setUserData(data);
//       })
//       .catch(err => console.error("Error fetching user:", err));

//     // 2. Followers list
//     // fetch('https://api.github.com/users/surajrathor997/followers')
//     //   .then(response => response.json())
//     //   .then(data => {
//         // console.log("Followers List:", data);
//         // setFollowers(data);
//     //   })
//     //   .catch(err => console.error("Error fetching followers:", err));
//   }, []);

  return (
    <div className="bg-gray-600 text-white p-6">
       
        Github Followers: {userData.followers || 0}

         <img
                src={userData.avatar_url}
                alt= "git picture"
                className="w-16 h-16 rounded-full mb-2"
                width={300}
              />
       

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {followers.length > 0 ? (
          followers.map(follower => (
            <div
              key={follower.id}
              className="bg-gray-700 p-4 rounded-lg flex flex-col items-center"
            >
             
              {/* <a
                href={follower.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {follower.login}
              </a> */}
            </div>
          ))
        ) : (
          <p>No followers found.</p>
        )}
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/surajrathor997')
    return response.json()
}
