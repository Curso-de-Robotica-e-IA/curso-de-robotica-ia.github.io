export const Landmarks = (props) => {
    return (
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                {props.data ? (
              <div>
                <h3>Links das notícias relacionadas:</h3>
                <ul>
                  {props.data.map(({ name, url }) => (
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
    );
  };