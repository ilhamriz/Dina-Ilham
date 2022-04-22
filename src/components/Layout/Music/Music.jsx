import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ReactPlayer from "react-player/file";
import music from "../../../assets/music.mp3";
import css from "./Music.module.scss";

function Component() {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleError = (err) => {
    setIsPlaying(false);

    setTimeout(() => {
      setIsPlaying(true);
    }, 1000);
  }

  return (
    <>
      <ReactPlayer
        className="hidden"
        url={music}
        playing={isPlaying}
        loop={true}
        volume={0.5}
        controls={true}
        onError={(err) => handleError(err)}
      />
      <IconButton
        aria-label="play/pause"
        id={css.button}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM9 9v6h2V9H9zm4 0v6h2V9h-2z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z" />
          </svg>
        )}
      </IconButton>
    </>
  );
}

export default Component;
