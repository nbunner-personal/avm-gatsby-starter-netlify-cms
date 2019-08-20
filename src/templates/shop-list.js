import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import shopStyles from "../components/shop.module.css";

import Layout from "../components/Layout";

const ShopIndex = ({ data }) => (
  <Layout>
    <div className="container">
      <h1>African Vision Malawi Online Shop</h1>
      <ul className={shopStyles.shopIndexList}>
        {data.allMarkdownRemark.edges.map(document => (
          <li key={document.node.id}>
            <Link to={document.node.fields.slug}>
              <Img
                fixed={
                  document.node.frontmatter.productImage.childImageSharp.fixed
                }
              />

              <p>
                {document.node.frontmatter.title}

                <em>{document.node.frontmatter.tags}</em>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default ShopIndex;

export const pageQuery = graphql`
  query ShopIndex {
    allMarkdownRemark(
      sort: { order: DESC, fields: [id] }
      filter: { frontmatter: { templateKey: { eq: "shop-product-page" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
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
`;
