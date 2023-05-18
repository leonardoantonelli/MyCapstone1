import React from "react";
import video from "../../assets/video/BB_19556b0b-4a29-4092-9824-94b481b38e0a_preview.mp4";

function Video() {
  return (
    <>
      <div className=" videoheight">
        <video
          className="my-3 py-3 w-100 videoheight fade-in-bottom "
          src={video}
          autoPlay
          loop
          muted
        />
      </div>
    </>
  );
}

export default Video;
