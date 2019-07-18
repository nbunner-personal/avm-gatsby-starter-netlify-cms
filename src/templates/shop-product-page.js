import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
// import FeaturedProjects from "../components/FeaturedProjects";
import CtaButton from "../components/CtaButton";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const ShopProductTemplate = ({
  title,
  content,
  contentComponent,
  price,
  salePrice,
  inStock,
  weight,
  length,
  width,
  height,
  shippingClass,
  tags,
  productImage
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-14 is-offset-1">
            <article className="content">
              <div className="columns">
                <main className="column is-8">
                  <h1 className="has-text-weight-semibold is-size-2">
                    {title}
                  </h1>
                  <PreviewCompatibleImage imageInfo={productImage} />
                  <PageContent className="content" content={content} />
                  Price: &pound;{price}
                  <br />
                  Sale Price: &pound;{salePrice}
                  <br />
                  In Stock: {inStock}
                  <br />
                  Weight: {weight}
                  <br />
                  Length: {length}
                  <br />
                  Width: {width}
                  <br />
                  Height: {height}
                  <br />
                  Shipping Class: {shippingClass}
                  {tags && tags.length ? (
                    <ul className="taglist">
                      {tags.map(tag => (
                        <li key={tag + `tag`}>{tag}</li>
                      ))}
                    </ul>
                  ) : null}
                  <CtaButton
                    link="https://www.charitycheckout.co.uk/1113786/"
                    text="Donate"
                  />
                </main>
                <aside className="column is-4"></aside>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

ShopProductTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  price: PropTypes.number,
  salePrice: PropTypes.number,
  inStock: PropTypes.number,
  weight: PropTypes.number,
  length: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  shippingClass: PropTypes.string,
  tags: PropTypes.array,
  productImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

const ShopProductPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ShopProductTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        price={post.frontmatter.price}
        salePrice={post.frontmatter.salePrice}
        inStock={post.frontmatter.inStock}
        weight={post.frontmatter.weight}
        length={post.frontmatter.length}
        width={post.frontmatter.width}
        height={post.frontmatter.height}
        shippingClass={post.frontmatter.shippingClass}
        tags={post.frontmatter.tags}
        productImage={post.frontmatter.productImage}
      />
    </Layout>
  );
};

ShopProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ShopProductPage;

export const pageBasicQuery = graphql`
  query ShopProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        price
        salePrice
        inStock
        weight
        length
        width
        height
        shippingClass
        tags
        productImage {
          childImageSharp {
            fluid(maxWidth: 450, quality: 50) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
