import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import FeaturedProjects from "../components/FeaturedProjects";
import HeroImage from "../components/HeroImage";
import videoStyles from "../components/videos.module.css";
import ReactPlayer from "react-player";
import BlogRollCard from "../components/BlogRollCard";
import EventsRollCard from "../components/EventsRollCard";
import postStyles from "../components/posts.module.css";
import homepageStyles from "../components/homepage.module.css";
import { Link } from "gatsby";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { edges: events } = data.eventsPosts;
    const { edges: homeContent } = data.homePage;
    const heroImage = this.props.data.heroImage;
    const heroMsg =
      "The people of Malawi want to help themselves. We can empower them to become self-sufficient and independent.";
    const promoVideo = "https://www.youtube.com/watch?v=ghHoDBf9z2c";
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <section>
              <HeroImage heroImage={heroImage} heroMsg={heroMsg} />
            </section>
            <FeaturedProjects currentProject="home" />
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">
                Welcome to African Vision Malawi (known as The Landirani Trust
                in Malawi).
              </h1>
            </div>
            <section className={homepageStyles.topSection}>
              <div class="column">
                <div className={homepageStyles.box}>
                  <h2 className="has-text-weight-bold is-size-3">Our vision</h2>
                  <p>
                    Since 2005 African Vision Malawi has been helping children
                    and vulnerable people in Malawi, one of the poorest
                    countries in the world.
                  </p>
                  <p>
                    Our vision is to see a "healthy, educated and
                    self-sufficient community in Malawi".
                  </p>
                </div>
                {homeContent.map(({ node: home }) => (
                  <div className={`${homepageStyles.box}`}>
                    <h2 className="has-text-weight-bold is-size-3">
                      Latest news
                    </h2>
                    <div
                      className={homepageStyles.latestNews}
                      dangerouslySetInnerHTML={{ __html: home.html }}
                    />
                  </div>
                ))}
              </div>
              <div className="column">
                <div className={videoStyles.playerWrapper}>
                  <ReactPlayer
                    url={promoVideo}
                    width="100%"
                    height="100%"
                    className={videoStyles.reactPlayer}
                  />
                </div>
              </div>
            </section>
            <section>
              <div className={postStyles.cont}>
                {posts &&
                  posts.map(({ node: post }) => (
                    <div key={post.fields.slug}>
                      <BlogRollCard post={post} />
                    </div>
                  ))}
              </div>
              <Link to="/news" className={homepageStyles.allPostsLink}>
                View all news
              </Link>
            </section>
            <section>
              <h2
                className={`has-text-weight-bold is-size-3 ${homepageStyles.sectionHeading}`}
              >
                Latest events
              </h2>
              <div className={postStyles.cont}>
                {events &&
                  events.map(({ node: event }) => (
                    <div key={event.fields.slug}>
                      <EventsRollCard post={event} />
                    </div>
                  ))}
              </div>
              <Link to="/news" className={homepageStyles.allPostsLink}>
                View all events
              </Link>
            </section>
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    heroImage: file(relativePath: { eq: "mainphoto_home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 60) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 140)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fixed(width: 280, height: 160) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    homePage: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "homepage" } } }
    ) {
      edges {
        node {
          html
        }
      }
    }
    eventsPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
      filter: { frontmatter: { templateKey: { eq: "events-post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            photo {
              childImageSharp {
                fixed(width: 280, height: 160) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
