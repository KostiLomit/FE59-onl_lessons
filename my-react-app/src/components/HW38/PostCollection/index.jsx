import React from "react";
import { PostExmpl } from "../postExmpl";
import "./index.scss";

const like = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path d="M9 21h9c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1h-5.31l.95-4.57c.04-.16.05-.33.05-.5V6c0-.55-.45-1-1-1-.21 0-.4.07-.56.18l-6.11 4.36c-.39.28-.62.73-.62 1.21v8c0 .55.45 1 1 1zm-4-2c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1z" />
  </svg>
);

const dislike = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path d="M15 3h-9c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h5.31l-.95 4.57c-.04.16-.05.33-.05.5v2c0 .55.45 1 1 1 .21 0 .4-.07.56-.18l6.11-4.36c.39-.28.62-.73.62-1.21v-8c0-.55-.45-1-1-1zm4 2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1z" />
  </svg>
);

const typeOfPost = {
  xl: "postCollection__item--xl",
  l: "postCollection__item--l",
  m: "postCollection__item--m",
};

export const PostCollection = ({ postData }) => {
  return (
    <div className="postCollection__container">
      {postData.slice(0, 10).map((item, index) => {
        const size = !index ? "xl" : index < 3 ? "l" : "m";
        const currClass = typeOfPost[size] || "";
        return (
          <div
            className={currClass}
            key={item.id}
            style={{ gridArea: `post-${index}` }}
          >
            {size === "xl" && (
              <>
                <div className="postCollection__left">
                  <span className="postCollection__date">{item.date}</span>
                  <h2 className="postCollection__title">{item.title}</h2>
                  <p className="postCollection__description">{item.text}</p>
                  <div className="postCollection__icons">
                    <span>{like}</span>
                    <span>{dislike}</span>
                  </div>
                </div>
                <div className="postCollection__right">
                  <div className="postCollection__img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="postCollection__icons">
                    <span>{like}</span>
                    <span>{dislike}</span>
                  </div>
                </div>
              </>
            )}
            {size === "l" && (
              <>
                <img
                  className="postCollection__img"
                  src={item.image}
                  alt={item.title}
                />
                <span className="postCollection__date">{item.date}</span>
                <h2 className="postCollection__title">{item.title}</h2>
                <div className="postCollection__icons">
                  <span>{like}</span>
                  <span>{dislike}</span>
                </div>
              </>
            )}
            {size === "m" && (
              <>
                <div className="postCollection__left">
                  <span className="postCollection__date">{item.date}</span>
                  <h2 className="postCollection__title">{item.title}</h2>
                  <div className="postCollection__icons">
                    <span>{like}</span>
                    <span>{dislike}</span>
                  </div>
                </div>
                <div className="postCollection__right">
                  <img
                    className="postCollection__img"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
