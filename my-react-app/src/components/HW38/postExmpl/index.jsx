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
  xl: "post__item--xl",
  l: "post__item--l",
  m: "post__item--m",
};

export const PostExmpl = ({ postData, size, index }) => {
  if (!postData || !Array.isArray(postData)) {
    return <div>No posts available</div>;
  }

  return (
    <div className="post">
      {postData.slice(0, 1).map((post) => {
        const currentClass = typeOfPost[size] || "";
        return (
          <div
            className={currentClass}
            key={post.id}
            style={{ gridArea: `post-${index}` }}
          >
            {size === "xl" && (
              <>
                <div className="posts__left">
                  <span className="posts__date">{post.date}</span>
                  <h2 className="posts__title">{post.title}</h2>
                  <p className="posts__description">{post.text}</p>
                  <div className="posts__icons">
                    <span>{like}</span>
                    <span>{dislike}</span>
                  </div>
                </div>
                <div className="post__right">
                  <div className="post__img">
                    <img className="post__img" src={post.image} alt="#" />
                  </div>

                  <div className="posts__icons">
                    <span>{like}</span>
                    <span>{dislike}</span>
                  </div>
                </div>
              </>
            )}
            {size === "l" && (
              <>
                <img className="post__img" src={post.image} alt="#" />
                <span className="posts__date">{post.date}</span>
                <h2 className="posts__title">{post.title}</h2>
                <div className="posts__icons">
                  <span>{like}</span>
                  <span>{dislike}</span>
                </div>
              </>
            )}
            {size === "m" && (
              <>
                <div className="posts__left">
                  <span className="posts__date">{post.date}</span>
                  <h2 className="posts__title">{post.title}</h2>
                  <div className="posts__icons">
                    <span>{like}</span>
                    <span>{dislike}</span>
                  </div>
                </div>
                <div className="posts__right">
                  <img className="posts__img" src={post.image} alt="#" />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
