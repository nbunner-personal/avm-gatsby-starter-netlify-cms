import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Gallery from '../components/Gallery'
import PageLinksWithPhotos from '../components/PageLinksWithPhotos'


export const HealthPageTemplate = ({      
    heroImage,
    title,
    content,        
    gallery,
    links,
    contentComponent
}) => {
  const PageContent = contentComponent || Content
  
  return (
    <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div
                    className="full-width-image-container margin-top-0"
                    style={{
                      backgroundImage: `url(${
                        !!heroImage.childImageSharp
                          ? heroImage.childImageSharp.fluid.src
                          : heroImage
                      })`,
                    }}
                  >
                    <h2
                      className="has-text-weight-bold is-size-1"
                      style={{
                        boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                        backgroundColor: '#f40',
                        color: 'white',
                        padding: '1rem',
                      }}
                    >
                      {title}
                    </h2>
                  </div>
                  <div className="columns">
                    <div className="column is-7">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {title}
                      </h3>
                      <PageContent className="content" content={content} />
                      here
                    </div>
                  </div>
                  <div >                    
                    here
                    <Gallery gallery={gallery} />
                    <PageLinksWithPhotos pagelinks={links} />
                  </div>              
                  <div className="tile is-ancestor">
                    <div className="tile is-vertical">
                      <div className="tile">
                        <div className="tile is-parent is-vertical">
                          
                        </div>                    
                      </div>                  
                    </div>
                  </div>              
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

HealthPageTemplate.propTypes = {  
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  content: PropTypes.string,      
  gallery: PropTypes.array,  
  links: PropTypes.array,
}

const HealthPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <HealthPageTemplate 
      contentComponent={HTMLContent}     
      title={post.frontmatter.title}
      content={post.html}
      heroImage={post.frontmatter.heroImage}
      gallery={post.frontmatter.gallery}
      links={post.frontmatter.links}        
      />
    </Layout>
  )
}

HealthPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HealthPage

export const HealthPageQuery = graphql`
  query HealthPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
        html
        frontmatter {            
            title
            heroImage {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            gallery {
              photo {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt          
            }
            links {
              linkTitle
              photo {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              linkText
              url          
            }
        }
    }
  }
`

