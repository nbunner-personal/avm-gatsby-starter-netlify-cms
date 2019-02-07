import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FeaturedProjects from "../components/FeaturedProjects";
import CtaButton from "../components/CtaButton";

export const PageBasicTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-9 is-offset-1">
            <article className="content">
              <div className="columns">
                <main className="column is-9">
                  <h1 className="has-text-weight-semibold is-size-2">
                    {title}
                  </h1>
                  <PageContent className="content" content={content} />
                  <CtaButton
                    link="https://www.charitycheckout.co.uk/1113786/"
                    text="Donate"
                  />
                </main>
                <aside className="column is-5">
                  <FeaturedProjects currentProject="default" />
                </aside>
              </div>
            </article>
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PageBasicTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const PageBasic = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PageBasicTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

PageBasic.propTypes = {
  data: PropTypes.object.isRequired
};

export default PageBasic;

export const pageBasicQuery = graphql`
  query PageBasic($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
