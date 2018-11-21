import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Gallery from '../components/Gallery'
import PageLinksWithPhotos from '../components/PageLinksWithPhotos'
import Videos from '../components/Videos'
import { Link } from 'gatsby'

export const VillagePageTemplate = ({      
    heroImage,
    title,
    content,    
    videos,
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
              <div className="column is-8 is-offset-2">
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
                  <div class="tabs">
                    <ul class="featuredProjects">
                      <li class="is-active"><Link to="/projects/sams-village/">Sam's Village</Link></li>
                      <li><Link to="/water/">Water</Link></li>
                      <li><Link to="/health/">Health</Link></li>
                      <li><Link to="/education/">Education</Link></li>
                      <li><Link to="/water/">Environment</Link></li>
                      <li><Link to="/water/">Celebrate &amp; Give</Link></li>
                    </ul>
                  </div>
                  <div className="columns">
                    <div className="column is-10">
                      <h1 className="has-text-weight-semibold is-size-2">
                        {title}
                      </h1>
                      <PageContent className="content" content={content} />
                      end of page content
                    </div>
                  </div>
                  <div className="full-width-image-container margin-top-0">
                    <div className="column is-10 is-offset-1">
                      <h2>Videos</h2>
                      <Videos videos={videos} />
                    </div>
                  </div>
                  <div className="full-width-image-container margin-top-0"
                  style={{
                    backgroundImage: `url(${
                      !!heroImage.childImageSharp
                        ? heroImage.childImageSharp.fluid.src
                        : heroImage
                    })`,
                  }}>  
                    <div className="column is-10 is-offset-1">
                      <PageLinksWithPhotos pagelinks={links} /> 
                    </div>             
                  </div>
                  <div className="full-width-image-container margin-top-0">        
                    <div className="column is-10 is-offset-1">
                      <h2>Photo updates</h2>
                      <Gallery gallery={gallery} />               
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

VillagePageTemplate.propTypes = {  
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  content: PropTypes.string,    
  videos: PropTypes.array,    
  gallery: PropTypes.array,  
  links: PropTypes.array,
}

const VillagePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <VillagePageTemplate 
      contentComponent={HTMLContent}     
      title={post.frontmatter.title}
      content={post.html}
      heroImage={post.frontmatter.heroImage}
      videos={post.frontmatter.videos}
      gallery={post.frontmatter.gallery}
      links={post.frontmatter.links}        
      />
    </Layout>
  )
}

VillagePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default VillagePage

export const VillagePageQuery = graphql`
  query VillagePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
        html
        frontmatter {            
            title
            heroImage {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }        
            videos {
              videourl
              videotext
            }
            gallery {
              photo {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 60) {
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
                    fluid(maxWidth: 290, quality: 50) {
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

