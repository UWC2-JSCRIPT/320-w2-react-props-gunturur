import React from "react";
import styles from './artstyle.module.css';
import PropTypes from 'prop-types';
function MissedArticlefun({articles}) {

    return (
        <>
            <div >
              {/*Map function to retrieve all the article details */}
                        {articles.map((article, i) => (
                            <ul className={styles.card} key={i}>
                                <p> <img src = {article.image} className={styles.img} alt=""/></p>
                                <h2><b> {article.title}</b></h2>
                              <h5>{article.description}</h5>
                              <p>
                              <img src = {article.author.image} className={styles.thumb} {...styles.cropper}  alt=""/>
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
MissedArticlefun.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
};
export default MissedArticlefun;
