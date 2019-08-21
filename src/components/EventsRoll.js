import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import postStyles from "./posts.module.css";
import Img from "gatsby-image";

class EventsRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className={postStyles.cont}>
        {posts &&
          posts.map(({ node: post }) => (
            <div className={postStyles.card} key={post.id}>
              <article className={postStyles.cardContent}>
                <Img fixed={post.frontmatter.photo.childImageSharp.fixed} />
                <p>
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date} to
                    {post.frontmatter.endDate}
                  </span>
                  <span className="subtitle">{post.frontmatter.location}</span>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </section>
    );
  }
}

EventsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query EventsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "events-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                layout
                title
                date(formatString: "MMMM DD, YYYY")
                endDate(formatString: "MMMM DD, YYYY")
                allDay
                location
                cost
                url
                description
                tags
                photo {
                  childImageSharp {
                    fixed(width: 240, height: 240) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <EventsRoll data={data} count={count} />}
  />
);
