import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import postStyles from './posts.module.css'

class BlogRoll extends React.Component {

    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        return (
            <section className={postStyles.cont}>
                {posts && (posts
                    .map(({ node: post }) => (
                        <div
                            className={postStyles.card}
                            key={post.id}
                        >
                            <article className={postStyles.cardContent}>
                                <p>
                                    <Link className="title has-text-primary is-size-4" to={post.fields.slug}>
                                        {post.frontmatter.title}
                                    </Link>
                                    <span> &bull; </span>
                                    <span className="subtitle is-size-5 is-block">{post.frontmatter.date}</span>
                                </p>
                                <p>
                                    {post.excerpt}
                                    <br />
                                    <br />
                                    <Link className="button" to={post.fields.slug}>
                                        Keep Reading →
                </Link>
                                </p>
                            </article>
                        </div>
                    )))}
            </section>
        );
    }
}

BlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
    `}
        render={(data, count) => (
            <BlogRoll data={data} count={count} />
        )}
    />
)