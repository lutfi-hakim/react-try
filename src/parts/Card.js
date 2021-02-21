import React from "react";
import { Img } from "react-bootstrap";

export default function Cards({ data }) {
  console.log(data);

  return data.map((item, i) => {
    return (
      <div className="col-2">
        <img
          key={i}
          alt="placeholder 960"
          className="img-fluid w-100 h-60"
          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        ></img>
        <h6>{item.title}</h6>
        <p>{item.release_date}</p>
      </div>
    );
  });
}
