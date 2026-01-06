import React, { useEffect } from "react";
import { useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Dheeraj-Lowanshi")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-4xl">
      Github Repositories: {data.public_repos}
      <img src={data.avatar_url} alt="git image" className="" width={300} />
    </div>
  );
}

export default Github;
