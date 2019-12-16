import React from 'react';
import Facebookimg from '../Footerimages/facebook.png';
import Instagramimg from '../Footerimages/instagram.png';
import Linkedinimg from '../Footerimages/linkedin.png';
import Twitterimg from '../Footerimages/twitter.png';

const Footer = props => {
  return (
    <div className="Footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h2>Brainster Box</h2>
                <p>
                  Brainster Box е ресурс за секој што сака да ги направи работите
                  покреативни и поефикасни во својот тим или компанија
                </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <h2>За нас</h2>
                <p>
                  Brainster е иновативна компанија за едукација и комбинира врвен
                  наставен план, експертиза и ефективна стратегија за обучување на
                  компании и индивидуалци.
                </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <h2>Продукти на Brainster</h2>
                <ul>
                  <li>
                    <a
                      href="https://www.brainster.io/business"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Корпоративни тренинзи
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brainster.co/courses"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Курсеви
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://codepreneurs.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Академија за програмирање
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.brainster.io/marketpreneurs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Академија за маркетинг
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.brainster.io/akademija-za-dizajn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Академија за дизајн
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-icon">
          <div className="col-md-12 text-right">
            <a
              href="https://www.facebook.com/brainster.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebookimg} alt="Facebook-img" />
            </a>
            <a
              href="https://www.instagram.com/brainsterco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagramimg} alt="Instagram-img" />
            </a>
            <a
              href="https://www.linkedin.com/company/brainster-co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedinimg} alt="Linkedin-img" />
            </a>
            <a
              href="https://www.twitter.com/brainsterco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitterimg} alt="Twitter-img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
