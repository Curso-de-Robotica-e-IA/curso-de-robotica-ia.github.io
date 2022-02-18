export const BlogPost = (props) => {
  const paragraphFormmatter = (topic, image, caption, isTop, text) => {
    if (topic === undefined && text === undefined && isTop === undefined) {
      return (
        <div className="thumbnail">
          <img src={image} alt="..." className="text-img" />
          <div className="caption">
            <p>{caption}</p>
          </div>
        </div>
      );
    }

    if (topic === undefined && image === undefined && isTop === undefined) {
      return <p>{text}</p>;
    }

    if (image === undefined && isTop === undefined) {
      return (
        <div>
          <h3>{topic}</h3>
          <p>{text}</p>
        </div>
      );
    }

    var imageInTop = isTop ? isTop : true;
    if (topic === undefined) {
      if (imageInTop) {
        return (
          <div>
            <div className="thumbnail">
              <img src={image} alt="..." className="text-img" />
              <div className="caption">
                <p>{caption}</p>
              </div>
            </div>
            <p>{text}</p>
          </div>
        );
      }

      return (
        <div>
          <p>{text}</p>
          <div className="thumbnail">
            <img src={image} alt="..." className="text-img" />
            <div className="caption">
              <p>{caption}</p>
            </div>
          </div>
        </div>
      );
    }

    if (imageInTop) {
      return (
        <div>
          <h3>{topic}</h3>
          <div className="thumbnail">
            <img src={image} alt="..." className="text-img" />
            <div className="caption">
              <p>{caption}</p>
            </div>
          </div>
          <p>{text}</p>
        </div>
      );
    }
    return (
      <div>
        <h3>{topic}</h3>
        <p>{text}</p>
        <div className="thumbnail">
          <img src={image} alt="..." className="text-img" />
          <div className="caption">
            <p>{caption}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      id="blog-post-project-0"
      className="text-center"
      style={{
        margin: "100px 0px 0px 0px",
      }}
    >
      <div className="container">
        <div className="row">
          {props.data ? (
            <div>
              <h2>{props.data.title}</h2>
              <h4>{props.data.subTitle}</h4>
              {props.data.paragraphs.map(
                ({ topic, image, caption, isTop, text }) =>
                  paragraphFormmatter(topic, image, caption, isTop, text)
              )}
            </div>
          ) : (
            "loading..."
          )}
        </div>
      </div>
    </div>
  );
};
