export const BlogPost = (props) => {
  const paragraphFormmatter = (topic, image, caption, isTop, text, url ) => {
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

    if (text === undefined && topic === undefined && image === undefined && isTop === undefined) {
      return <a href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
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
      id="blog-post-project-tre"
      className="text-center"
      style={{
        margin: "100px 0px 0px 0px",
      }}
      >
      <div className="container">
        <div className="row">
          {props.data_projects ? (
            <div>
              <h2>{props.data_projects.title}</h2>
              <h4>{props.data_projects.subTitle}</h4>
              {props.data_projects.paragraphs.map(
                ({ topic, image, caption, isTop, text, url }) =>
                  paragraphFormmatter(topic, image, caption, isTop, text, url )
              )}
            </div>
          ) : (
            "loading..."
          )}
          <div className="row">
            {props.data_projects ? (
              <div>
                <p>
                  <h3>Marcos e conquistas</h3>
                <ul>
                  {props.data_projects.footnodes.map(({ text, name, url }) => (
                    <li>
                      {text}
                      {
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          {name}
                        </a>
                      }
                    </li>
                  ))}
                </ul>
                </p>
              </div>
            ) : (
              "loading..."
            )}
          </div>
          <div className="row">
            {props.data_projects ? (
              <div>
                <h3>Links das notícias relacionadas:</h3>
                <ul>
                  {props.data_projects.links.map(({ name, url }) => (
                    <li>
                      {
                        <div class="btn_wrap">
                          <a href={url} target="_blank" rel="noopener noreferrer">
                            {name}
                          </a>
                          <button id="fb" className="btn  btn-cm page-scroll"><i class="fa fa-facebook-official" aria-hidden="true" onClick={() => {
                            const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
                            window.open(navUrl , '_blank');
                            }}></i></button>
                          <button id="twitter" className="btn  btn-cm page-scroll"><i class="fa fa-twitter" aria-hidden="true"onClick={() => {
                            const navUrl = 'https://twitter.com/intent/tweet?text=' + url;
                            window.open(navUrl , '_blank');
                            }}></i></button>
                        </div>
                      }
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              "loading..."
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPost;