import React, { useState, useRef } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({
  autoplay,
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.play();
      setPlay(false);
    } else {
      videoRef.current.pause();
      setPlay(true);
    }
  };

  return (
    <section className="video">
      <video
        ref={videoRef}
        onClick={onVideoPress}
        autoPlay={autoplay}
        loop
        className="video__player"
        src={url}
      ></video>
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <VideoFooter channel={channel} description={description} song={song} />
    </section>
  );
}

export default Video;
