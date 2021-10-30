import React from "react";
import Slide from "react-reveal/Slide";
import "./movie css/section.css";
const Moviesection = () => {
  return (
    <>
      <section>
        <div className="text-holder">
          <h2> Home Demo</h2>
          <div className="text-holder-2">
            <h5>
              raenMoviesapp has new and innovative ways of delivering content on
              the eye-catching homepage interface.
            </h5>
          </div>
        </div>
        <section className="movie-section-grid">
          <div className="movie-section-1">
            <Slide left>
              <img
                width="100%"
                src="https://wordpress.iqonic.design/streamit_wp/wp-content/uploads/2021/08/videos.jpg"
                alt=""
              ></img>
            </Slide>

            <h5>Home</h5>
          </div>
          <div className="movie-section-1">
            <Slide top>
              <img
                width="100%"
                src="https://wordpress.iqonic.design/streamit_wp/wp-content/uploads/2021/08/movies.jpg"
                alt=""
              ></img>
            </Slide>

            <h5>Movies</h5>
          </div>
          <div className="movie-section-1">
            <Slide right>
              <img
                width="100%"
                src="https://wordpress.iqonic.design/streamit_wp/wp-content/uploads/2021/08/tvshows.jpg"
                alt=""
              ></img>
            </Slide>

            <h5>Tv shows</h5>
          </div>
        </section>
      </section>
    </>
  );
};

export default Moviesection;
