import React, { useState } from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialogue from "./Dialogue";

const checkLink = (url) => {
  const videoUrl = url;
  const keyWord = "https://www.youtube.com/watch?v=";
  const found = videoUrl.indexOf(keyWord);
  return found;
};

const createLink = (url) => {
  let finalID = "";
  const videoUrl = url;

  const firstKeyWord = "watch?v=";
  const firstKeyLength = firstKeyWord.length;
  const firstIndexPosition = videoUrl.indexOf(firstKeyWord) + firstKeyLength;

  const secondKeyWord = "&";
  const secondIndexPosition = videoUrl.indexOf(secondKeyWord);

  if (secondIndexPosition === -1) {
    const slicedPart = videoUrl.slice(firstIndexPosition);
    finalID = slicedPart;
  } else {
    const slicedPart = videoUrl.slice(firstIndexPosition, secondIndexPosition);
    finalID = slicedPart;
  }

  return finalID;
};

const MovieCard = ({
  value,
  moviesData,
  setMoviesData,
  setCurrentId,
  setFrame,
}) => {
  const [dialogue, setDialogue] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleClickOpen = (id) => {
    setSelectedId(id);
    setDialogue(true);
  };

  return (
    <div className="movie-card">
      <div className="img-box">
        <div className="img-wrapper">
          <div className="icon-container flex-css-row-start">
            <div
              className="icon edit-icon flex-css"
              onClick={() => setCurrentId(value.id)}
            >
              <EditIcon />
            </div>
            <div
              className="icon delete-icon flex-css"
              onClick={() => handleClickOpen(value.id)}
            >
              <DeleteIcon />
            </div>
          </div>
        </div>
        <img
          src={value.img_link !== "" ? value.img_link : value.file}
          alt="movie"
        />
      </div>
      <div className="info-box">
        <div className="title">
          <h1>{value.title}</h1>
          <p>
            {value.year} | {value.duration} | {value.genre}
          </p>
        </div>
        <div className="summary">
          <h1>Summary</h1>
          <p>{value.summary}</p>
        </div>
        <div className="watch-btn">
          {checkLink(value.url) === -1 ? (
            <Button href={value.url} variant="contained" target={"_blank"}>
              Watch Now
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() =>
                setFrame({ frame: true, url: createLink(value.url) })
              }
            >
              Watch Now
            </Button>
          )}
        </div>
      </div>
      <Dialogue
        moviesData={moviesData}
        setMoviesData={setMoviesData}
        dialogue={dialogue}
        setDialogue={setDialogue}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </div>
  );
};

export default MovieCard;
