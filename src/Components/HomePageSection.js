import React from "react";
import { useState, useEffect } from "react";
import Card from "./Shared/Card";

const HomePageSection = () => {
  const [search, setSearch] = useState("");
  const [videoData, setVideoData] = useState([]);
  const handleInputChange = (e) => [setSearch(e.target.value)];
  useEffect(() => {
    const getVideoData = async () => {
      const url = search
        ? `https://crio-xflix.herokuapp.com/v1/videos?title=${search}`
        : "https://crio-xflix.herokuapp.com/v1/videos";
      const response = await fetch(url);
      const finalData = await response.json();
      console.log(finalData.videos);
      const filtered = finalData.videos.filter(
        (video) => video.previewImage !== ""
      );
      console.log(filtered);
      setVideoData(finalData.videos);
    };
    getVideoData();
  }, [search]);
  console.log(videoData);

  return (
    <div className=" container mx-auto p-6 mt-3 items-center">
      <h1 className="text-center text-3xl text-bold ">
        I am going to implement a search feature here like the ones you see in
        youtube or Instagram
      </h1>

      <p className="text-2xl text-center decoration-veryLightGray mt-2">
        This will fetch data from a server using a API call
      </p>

      <div className="text-center">
        Implemented using useState and UseEffect hook and responsive grid design
        implmented
      </div>
      <input
        onChange={handleInputChange}
        value={search}
        type="text"
        className="w-full m-5 min-h-min mt-3 border-gray-900 h-7 mx-6 snap-center focus:border-veryPaleRed"
      />
      <div className=" grid grid-cols-1 gap-x-auto gap-y-auto items-center md:mx-auto md:grid-cols-2 md:ml-3xl xl:grid-cols-3">
        {videoData.map((vid, idx) => {
          const {
            id = "",
            previewImage = "",
            genre = "",
            title = "",
            releaseDate = "",
          } = vid;
          return (
            <Card
              key={idx}
              imgSrc={previewImage}
              genre={genre}
              title={title}
              date={releaseDate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePageSection;
