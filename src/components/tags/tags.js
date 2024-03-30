import React from "react";
import "./tags.scss";

export default function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <div key={tag}>
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
}
