import React from 'react';
import githubIcon from '../../../assets/images/github-icon.svg';
import twitterIcon from '../../../assets/images/twitter-icon.svg';
import linkedinIcon from '../../../assets/images/linkedin-icon.svg';

import './CardItem.style.scss';

const CardItem = ({
  name,
  office,
  gitHub,
  twitter,
  linkedIn,
  imagePortraitUrl,
}) => {
  return (
    <div className="card-item">
      <div className="img-portrait">
        <img src={imagePortraitUrl} alt={`portrait of ${name}`} />
      </div>
      <div className="info">
        <div className="name" title={name}>
          {name}
        </div>
        <div className="office" title={office}>
          Office: {office}
        </div>
      </div>
      <div className="contact">
        {gitHub && (
          <a
            href={`https://github.com/${gitHub}`}
            className="github-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="" />
          </a>
        )}
        {twitter && (
          <a
            href={`https://twitter.com/${twitter}`}
            className="twitter-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterIcon} alt="" />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com${linkedIn}`}
            className="linkedin-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="" />
          </a>
        )}
      </div>
    </div>
  );
};

export default CardItem;
