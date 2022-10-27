import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./Video";
import db from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      {/* <img
        className="app__logo"
        src="https://pyxis.nymag.com/v1/imgs/110/4b3/605e7a8354f39b484d8a68a4b26678b026-tiktok.2x.rsocial.w600.jpg"
        alt=""
      /> */}
      <div className="app__videos">
        {posts.map(
          ({ channel, description, song, url, likes, shares, messages }) => (
            <Video
              channel={channel}
              description={description}
              song={song}
              url={url}
              likes={likes}
              shares={shares}
              messages={messages}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
