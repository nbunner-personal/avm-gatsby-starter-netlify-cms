import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Gallery from '../components/Gallery'
// import Lightbox from "../components/lightbox"
import PageLinksWithPhotos from '../components/PageLinksWithPhotos'
import Videos from '../components/Videos'
import FeaturedProjects from '../components/FeaturedProjects'
import CtaButton from '../components/CtaButton'
// import { Link } from 'gatsby'

export const FeaturedProjectsTemplate = ({      
    heroImage,
    title,
    currentProject,
    columns,
    content,    
    videos,
    gallery,
    links,
    contentComponent
}) => {
  const PageContent = contentComponent || Content
  
  return (
    <section className="section section--gradient" style={{
      paddingBottom: '0'
    }}>
        <div className="container">
          <div>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <section>
                  <div
                    className="full-width-image-container margin-top-0 margin-bottom-0"
                    style={{
                      backgroundImage: `url(${
                        !!heroImage.childImageSharp
                          ? heroImage.childImageSharp.fluid.src
                          : heroImage
                      })`,
                    }}
                  >                    
                  </div>
                </section>  
                <FeaturedProjects currentProject={currentProject} />
                <article className="content">                    
                  <div className="columns">
                    <main className="column is-10">
                      <h1 className="has-text-weight-semibold is-size-2">
                        {title}
                      </h1>
                      <PageContent className="content" content={content} />                   <CtaButton 
                        link='https://www.charitycheckout.co.uk/1113786/'
                        text='Donate'
                      />
                    </main>
                    {columns === 2 ? 
                    <aside className="column is-4">
                      side col goes here
                    </aside>
                    : ''
                    }
                  </div>
                  { videos.length && 
                  <section className="full-width-container margin-top-0"
                  style={{
                    background: '#f2f2f2',
                    borderBottom: '1px solid #e5e5e5',
                    marginBottom: '0',
                    paddingBottom: '30px'
                  }}>
                    <div className="column is-10">
                      <h2 style={{                        
                        textAlign: 'center'
                      }}>Videos</h2>
                      <Videos videos={videos} />
                    </div>
                </section> 
                }
                { gallery.length && 
                  <section className="full-width-container margin-top-0"
                  style={{
                    background: '#f2f2f2',
                    borderBottom: '1px solid #e5e5e5',
                    marginBottom: '0',
                    paddingBottom: '30px'
                  }}>        
                    <div className="column is-10 is-offset-1">
                    <h2 style={{                        
                        textAlign: 'center'
                      }}>Photo updates</h2>
                      <Gallery gallery={gallery} initialState={{ showDialog: false }} />   
                                  
                    </div>     
                  </section>
                }
                { links.length && 
                  <section className="full-width-container margin-top-0"
                  style={{
                    background: '#f2f2f2',
                    borderBottom: '1px solid #e5e5e5',
                    marginBottom: '0',
                    paddingBottom: '30px'
                  }}>                    
                    <div className="column is-10 is-offset-1">
                      <h2 style={{                        
                        textAlign: 'center'
                      }}>Find out more...</h2>
                      <PageLinksWithPhotos pagelinks={links} /> 
                    </div>             
                  </section>
                }                
                               
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}

FeaturedProjectsTemplate.propTypes = {  
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  currentProject: PropTypes.string,
  columns: PropTypes.number,
  content: PropTypes.string,    
  videos: PropTypes.array,    
  gallery: PropTypes.array,  
  links: PropTypes.array,
}

const FeaturedProjectsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FeaturedProjectsTemplate 
      contentComponent={HTMLContent}     
      title={post.frontmatter.title}
      currentProject={post.frontmatter.currentProject}
      columns={post.frontmatter.columns}
      content={post.html}
      heroImage={post.frontmatter.heroImage}
      videos={post.frontmatter.videos}
      gallery={post.frontmatter.gallery}
      links={post.frontmatter.links}        
      />
    </Layout>
  )
}

FeaturedProjectsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FeaturedProjectsPage

export const FeaturedProjectsPageQuery = graphql`
  query FeaturedProjectsPage($id: String!) {
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
            currentProject  
            columns     
            videos {
              videourl
              videotext
            }
            gallery {
              photo {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 60) {
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
                    fluid(maxWidth: 2000, quality: 50) {
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

