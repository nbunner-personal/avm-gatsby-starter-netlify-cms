import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { Link } from "gatsby";
import pageLinksStyles from "./pagelinks.module.css";

const PageLinks = ({ pagelinks }) => (
  <div>
    {pagelinks.map(pagelink => (
      <article key={v4()} className={pageLinksStyles.linkRow}>
        <h3 className={pageLinksStyles.linkHeading}>
          <Link to={pagelink.url}>{pagelink.linkTitle}</Link>
        </h3>
        <p>
          {pagelink.linkText}&hellip;
          <Link to={pagelink.url} className={pageLinksStyles.btn}>
            Find out more
          </Link>
        </p>
      </article>
    ))}
  </div>
);

PageLinks.propTypes = {
  pagelinks: PropTypes.arrayOf(
    PropTypes.shape({
      linkTitle: PropTypes.string,
      linkText: PropTypes.string,
      url: PropTypes.string
    })
  )
};

export default PageLinks;
