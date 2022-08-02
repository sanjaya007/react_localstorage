import React from "react";

const Yframe = ({ frame, setFrame }) => {
  return (
    <div
      className={frame.frame ? "yframe active flex-css" : "yframe flex-css"}
      onClick={() => setFrame({ frame: false, url: null })}
    >
      <div className="box">
        <iframe
          width="800"
          height="500"
          src={`https://www.youtube.com/embed/${frame.url}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
};

export default Yframe;
