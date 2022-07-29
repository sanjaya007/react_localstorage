import React from "react";
import FileBase from "react-file-base64";
import { Button } from "@mui/material";

const Form = ({ moviesData, setMoviesData, inputData, setInputData }) => {
  return (
    <div className="form-container">
      <div className="input-box">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) =>
            setInputData({ ...inputData, title: e.target.value })
          }
        />
      </div>
      <div className="input-box">
        <label htmlFor="title">Year</label>
        <input
          type="text"
          name="year"
          onChange={(e) => setInputData({ ...inputData, year: e.target.value })}
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
        />
      </div>
      <div className="input-box">
        <label>Image</label>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setInputData({ ...inputData, file: base64 })}
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
        ></textarea>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          setMoviesData([inputData, ...moviesData]);
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Form;
