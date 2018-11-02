import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Gallery from '../components/Gallery'
import PageLinksWithPhotos from '../components/PageLinksWithPhotos'


export const VillagePageTemplate = ({
    templateKey,    
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
                    <div className="column is-7"> here                 
                    <PageContent className="videos" content={videos} />
                    </div>
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

VillagePageTemplate.propTypes = {
  templateKey: PropTypes.string,
  heroImage: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,    
  videos: PropTypes.string,    
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
            templateKey
            title
            heroImage        
            videos
            gallery {
                photo
                alt          
            }
            links {
                linkTitle
                photo
                linkText
                url          
            }
        }
    }
  }
`

