import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Gallery from "../components/Gallery";
// import Lightbox from "../components/lightbox"
import CtaButton from "../components/CtaButton";
// import { Link } from 'gatsby'

export const ProductTemplate = ({
  title,
  productImage,
  productGallery,
  description,
  price,
  salePrice,
  inStock,
  weight,
  length,
  width,
  height,
  shippingClass,
  tags,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section
      className="section section--gradient"
      style={{
        paddingBottom: "0"
      }}
    >
      <div className="container">
        <div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <article className="content">
                <div className="columns">
                  <main className="column is-10">
                    <h1 className="has-text-weight-semibold is-size-2">
                      {title}
                    </h1>
                    <PageContent className="content" content={content} />
                    <CtaButton
                      link="https://www.charitycheckout.co.uk/1113786/"
                      text="Donate"
                    />
                  </main>
                </div>
                {productGallery.length && (
                  <section
                    className="full-width-container margin-top-0"
                    style={{
                      background: "#f2f2f2",
                      borderBottom: "1px solid #e5e5e5",
                      marginBottom: "0",
                      paddingBottom: "30px"
                    }}
                  >
                    <div className="column is-10 is-offset-1">
                      <h2
                        style={{
                          textAlign: "center"
                        }}
                      >
                        Photo updates
                      </h2>
                      <Gallery
                        gallery={productGallery}
                        initialState={{ showDialog: false }}
                      />
                    </div>
                  </section>
                )}
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductTemplate.propTypes = {
  title: PropTypes.string,
  productImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  productGallery: PropTypes.array,
  description: PropTypes.string,
  price: PropTypes.number,
  salePrice: PropTypes.number,
  inStock: PropTypes.bool,
  weight: PropTypes.number,
  length: PropTypes.array,
  width: PropTypes.array,
  height: PropTypes.array,
  shippingClass: PropTypes.string,
  content: PropTypes.string,
  tags: PropTypes.array
};

const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProductTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        productImage={post.frontmatter.productImage}
        productGallery={post.frontmatter.productGallery}
        description={post.frontmatter.description}
        price={post.frontmatter.price}
        salePrice={post.frontmatter.salePrice}
        inStock={post.frontmatter.inStock}
        weight={post.frontmatter.weight}
        length={post.frontmatter.length}
        width={post.frontmatter.width}
        height={post.frontmatter.height}
        shippingClass={post.frontmatter.shippingClass}
        tags={post.frontmatter.tags}
        content={post.html}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProductPage;

export const ProductPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
