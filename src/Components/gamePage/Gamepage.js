import React, { useState, useEffect } from "react";
import axios from "axios";
import { SimpleShareButtons } from "react-simple-share";
import { HashLink as Link } from "react-router-hash-link";
import ReactDisqusComments from "react-disqus-comments";
import { Helmet } from "react-helmet";

const Gamepage = ({ location, match }) => {
  const [game, setGame] = useState([]);

  useEffect(() => {
    getGameDetail();
  }, [location]);

  const getGameDetail = async () => {
    const game = await axios(`https://project3-server.herokuapp.com/posts/${match.params.id}`);

    setGame(game.data);
  };

  const { title, description, image, category, time, players, level, materials, steps } = game;

  return (
    <div className="Gamepage">
      <div className="inner-wrap">
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta
            property="og:image"
            content={image && require(`../../assets/img/img-cards/${image}.png`)}
          />
          <meta property="og:type" content="article" />
          <meta name="author" content="Blagica Stojanovska" />
          <meta
            property="og:url"
            content={`https://blagicastojanovska.github.io/gaming/#/game/${image}/`}
          />
          <meta
            name="base_url"
            content={`https://blagicastojanovska.github.io/gaming/#/game/${image}/`}
          />
        </Helmet>
        <div className="primary-section">
          {image && <img src={require(`../../assets/img/img-cards/${image}.png`)} alt="" />}
          <div className="main-titles">
            <p className="category">{category}</p>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <Link smooth to="#socialIcons" className="share-link">
            <i className="fa fa-share-alt fa-3x" aria-hidden="true"></i>
            <span>SHARE</span>
          </Link>
        </div>
        <div className="details-wrapper">
          <div className="detail-box">
            <div className="icon-box">
              <i className="far fa-clock fa-2x"></i>
            </div>
            <div className="content-box">
              <p className="label">ВРЕМЕНСКА РАМКА</p>
              <p>{time}</p>
            </div>
          </div>
          <div className="detail-box">
            <div className="icon-box">
              <i className="fa fa-male fa-2x" aria-hidden="true"></i>
            </div>
            <div className="content-box">
              <p className="label">ГОЛЕМИНА НА ГРУПА</p>
              <p>{players}</p>
            </div>
          </div>
          <div className="detail-box">
            <div className="icon-box">
              <i className="fab fa-connectdevelop fa-2x"></i>
            </div>
            <div className="content-box">
              <p className="label">ТЕЖИНА</p>
              <p>{level}</p>
            </div>
          </div>
          <div className="detail-box">
            <div className="icon-box">
              <i className="far fa-edit fa-2x"></i>
            </div>
            <div className="content-box">
              <p className="label">МАТЕРИЈАЛИ</p>
              <p>{materials}</p>
            </div>
          </div>
        </div>
        <div className="secondary-section">
          <div className="steps-details">
            {steps &&
              steps.map((step, i) => {
                return (
                  <div key={i} className="step">
                    <div className="step-content">
                      <p className="step-title">{step.step}</p>
                      {step.text.split("\n").map((line, i) => (
                        <p key={`line-${i}`}>{line}</p>
                      ))}
                    </div>
                    {step.stepimg !== "" && (
                      <div className="step-img">
                        {step.stepimg && (
                          <img
                            src={require(`../../assets/img/img-steps/${step.stepimg}.png`)}
                            alt=""
                            className="stepimg"
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>

          <ReactDisqusComments
            shortname="brainsterbox-gaming"
            identifier="brainsterbox-gaming.disqus.com"
            title="Comments"
            url={window.location.href}
          />
        </div>
        <div className="row" id="socialIcons">
          <div className="col-md-12">
            <SimpleShareButtons
              whitelist={["Facebook", "Twitter", "LinkedIn", "Google+"]}
              size="40px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gamepage;