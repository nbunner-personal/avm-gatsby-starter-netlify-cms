import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import postStyles from "./posts.module.css";
import Img from "gatsby-image";

const EventsCard = ({ post }) => (
  <div className={postStyles.card} key={post.id}>
    <article className={postStyles.cardContent}>
      <Link to={post.fields.slug}>
        {post.frontmatter.photo && (
          <Img fixed={post.frontmatter.photo.childImageSharp.fixed} />
        )}

        <span className={postStyles.postHeading}>{post.frontmatter.title}</span>
        <span className={postStyles.cardDate}>{post.frontmatter.date}</span>
      </Link>
    </article>
  </div>
);

EventsCard.propTypes = {
  post: PropTypes.object
};

export default EventsCard;
