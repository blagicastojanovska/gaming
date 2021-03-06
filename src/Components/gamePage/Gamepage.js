import React, { useState, useEffect } from "react";
import axios from "axios";
import { HashLink as Link } from "react-router-hash-link";
import ReactDisqusComments from "react-disqus-comments";
import { Helmet } from "react-helmet";
import { API_URL, PROJECT_URL } from "../../config";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";

const Gamepage = (props) => {
  console.log(props);
  const [game, setGame] = useState([]);

  useEffect(() => {
    if (props.params) {
      const getGameDetail = async () => {
        const { data } = await axios(`${API_URL}/${props.params.id}`);

        setGame(data);
      };

      getGameDetail();
    }
  }, [props]);

  const { title, description, image, category, time, players, level, materials, steps } = game;

  const currentURL = `${PROJECT_URL}/#/game/${image}`;

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
          <meta property="og:url" content={currentURL} />
          <meta name="base_url" content={currentURL} />
        </Helmet>
        {game ? (
          <>
            <div className="primary-section">
              {image && <img src={require(`../../assets/img/img-cards/${image}.png`)} alt="" />}
              <div className="main-titles">
                <p className="category">{category}</p>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
              <Link smooth to="#socialIcons" className="share-link">
                <span className="icon-share" aria-hidden="true"></span>
                <span>SHARE</span>
              </Link>
            </div>
            <div className="details-wrapper">
              <div className="detail-box">
                <div className="icon-box">
                  <span className="icon-clock"></span>
                </div>
                <div className="content-box">
                  <p className="label">ВРЕМЕНСКА РАМКА</p>
                  <p>{time}</p>
                </div>
              </div>
              <div className="detail-box">
                <div className="icon-box">
                  <span className="icon-user"></span>
                </div>
                <div className="content-box">
                  <p className="label">ГОЛЕМИНА НА ГРУПА</p>
                  <p>{players}</p>
                </div>
              </div>
              <div className="detail-box">
                <div className="icon-box">
                  <span className="icon-difficulty"></span>
                </div>
                <div className="content-box">
                  <p className="label">ТЕЖИНА</p>
                  <p>{level}</p>
                </div>
              </div>
              <div className="detail-box">
                <div className="icon-box">
                  <span className="icon-materials"></span>
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
            <div id="socialIcons" className="socialIcons">
              <p className="label">Сподели:</p>
              <FacebookShareButton url={currentURL} quote={title} className="social-icon">
                <span className="icon-facebook"></span>
              </FacebookShareButton>
              <LinkedinShareButton url={currentURL} className="social-icon">
                <span className="icon-linkedin"></span>
              </LinkedinShareButton>
              <TwitterShareButton url={currentURL} title={title} className="social-icon">
                <span className="icon-twitter"></span>
              </TwitterShareButton>
            </div>
          </>
        ) : (
          <img
            src={require("../../assets/img/filters_loader.gif")}
            className="loader"
            alt="loader"
          />
        )}
      </div>
    </div>
  );
};

export default Gamepage;
