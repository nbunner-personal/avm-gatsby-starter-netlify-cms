import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PageLinksWithPhotos from '../components/PageLinksWithPhotos'


export const EducationPageTemplate = ({      
    heroImage,
    title,
    content,            
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
                    style={{ backgroundImage: `url(${heroImage})` }}
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

EducationPageTemplate.propTypes = {  
  heroImage: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,        
  links: PropTypes.array,
}

const EducationPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EducationPageTemplate 
      contentComponent={HTMLContent}     
      title={post.frontmatter.title}
      content={post.html}
      heroImage={post.frontmatter.heroImage}      
      links={post.frontmatter.links}        
      />
    </Layout>
  )
}

EducationPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default EducationPage

export const EducationPageQuery = graphql`
  query EducationPage($id: String!) {
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
            links {
                linkTitle
                photo {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
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

