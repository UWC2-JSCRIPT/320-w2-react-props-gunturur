import React from "react";
import PropTypes from 'prop-types';

import styles from './artstyle.module.css';
function YourArticles({articles}) {

  return (
    <>
      <div >
        {/*Map function to retrieve your article details */}
        {articles.map((article, i) => (
          <ul className={styles.card} key={i}>
            <p> <img src = {article.image} className={styles.img} alt=""/></p>
            <p><b> {article.title}</b></p>
            <p>{article.description}</p>
            <p>
            <img src = {article.author.image} className={styles.thumb} {...styles.cropper} alt=""/>
              {article.author.name}</p>
            <p>{article.author.isMediumMember}</p>
            <p>{article.postedDate}</p>
            <p>minutes to read {article.minutesToRead}</p>
            <p>{article.hasAudioAvailable}</p>
            <p>{article.memberPreview}</p>
          </ul>
        ))}
      </div>

    </>
  );
}
YourArticles.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  hasAudioAvailable: PropTypes.bool,
};
export default YourArticles;

