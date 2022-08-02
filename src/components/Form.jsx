import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { Button } from "@mui/material";

const generateUID = () => {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).substring(2);
  const finalUID = head + tail;
  return finalUID;
};

const trimmedBody = (obj) => {
  return Object.keys(obj).reduce((acc, value) => {
    acc[value] = obj[value].toString().trim();
    return acc;
  }, {});
};

const Form = ({ moviesData, setMoviesData, currentId, setCurrentId }) => {
  const [inputData, setInputData] = useState({
    id: "",
    title: "",
    year: "",
    duration: "",
    genre: "",
    file: "",
    img_link: "",
    url: "",
    summary: "",
    action: "",
  });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedInputData = trimmedBody(inputData);
    setInputData(trimmedInputData);

    if (trimmedInputData.title === "") {
      setError(true);
      return false;
    }

    if (trimmedInputData.file === "" && trimmedInputData.img_link === "") {
      setError(true);
      return false;
    }

    if (trimmedInputData.url === "") {
      setError(true);
      return false;
    }

    setError(false);
    setInputData({ ...trimmedInputData, action: "submit", id: generateUID() });
  };

  useEffect(() => {
    if (inputData.id !== "" && inputData.action === "submit") {
      if (currentId) {
        const updatedData = moviesData.map((obj) => {
          if (obj.id === currentId) {
            return {
              id: inputData.id,
              title: inputData.title,
              year: inputData.year,
              duration: inputData.duration,
              genre: inputData.genre,
              file: inputData.file,
              img_link: inputData.img_link,
              url: inputData.url,
              summary: inputData.summary,
              action: "submit",
            };
          }
          return obj;
        });
        setMoviesData(updatedData);
        clearData();
      } else {
        setMoviesData([inputData, ...moviesData]);
        clearData();
      }
    }
  }, [inputData.id]);

  useEffect(() => {
    if (currentId) {
      const postToEdit = moviesData.find((value) => value.id === currentId);
      setInputData({
        id: postToEdit.id,
        title: postToEdit.title,
        year: postToEdit.year,
        duration: postToEdit.duration,
        genre: postToEdit.genre,
        file: postToEdit.file,
        img_link: postToEdit.img_link,
        url: postToEdit.url,
        summary: postToEdit.summary,
        action: "",
      });
    }
  }, [currentId]);

  const clearData = () => {
    setCurrentId(null);
    setInputData({
      id: "",
      title: "",
      year: "",
      duration: "",
      genre: "",
      file: "",
      img_link: "",
      url: "",
      summary: "",
      action: "",
    });
  };

  return (
    <div className="form-container">
      <div className="note">
        <p>Image: Link is primary, Upload is secondary.</p>
        <p className={error ? "error" : ""} title="Dont forget to insert!">
          Required: Title, Image and URL
        </p>
      </div>
      <div className="input-box">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) =>
            setInputData({ ...inputData, title: e.target.value })
          }
          value={inputData.title}
        />
      </div>
      <div className="input-box">
        <label htmlFor="title">Year</label>
        <input
          type="text"
          name="year"
          onChange={(e) => setInputData({ ...inputData, year: e.target.value })}
          value={inputData.year}
        />
      </div>
      <div className="input-box">
        <label htmlFor="title">Duration</label>
        <input
          type="text"
          name="duration"
          onChange={(e) =>
            setInputData({ ...inputData, duration: e.target.value })
          }
          value={inputData.duration}
        />
      </div>
      <div className="input-box">
        <label htmlFor="title">Genre</label>
        <input
          type="text"
          name="genre"
          onChange={(e) =>
            setInputData({ ...inputData, genre: e.target.value })
          }
          value={inputData.genre}
        />
      </div>
      <div className="input-box">
        <label>Image</label>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setInputData({ ...inputData, file: base64 })}
          value={inputData.file}
        />
      </div>
      <div className="input-box">
        <label>Image Link</label>
        <input
          type="text"
          name="img_link"
          onChange={(e) =>
            setInputData({ ...inputData, img_link: e.target.value })
          }
          value={inputData.img_link}
        />
      </div>
      <div className="input-box">
        <label>Video URL</label>
        <input
          type="text"
          name="url"
          onChange={(e) => setInputData({ ...inputData, url: e.target.value })}
          value={inputData.url}
        />
      </div>
      <div className="input-box">
        <label htmlFor="title">Summary</label>
        <textarea
          rows="6"
          name="summary"
          onChange={(e) =>
            setInputData({ ...inputData, summary: e.target.value })
          }
          value={inputData.summary}
        ></textarea>
      </div>
      <Button
        className={currentId ? "update-btn" : "submit-btn"}
        variant="contained"
        onClick={handleSubmit}
      >
        {currentId ? "Update" : "Submit"}
      </Button>
    </div>
  );
};

export default Form;
