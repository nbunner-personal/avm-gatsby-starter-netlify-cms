import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import postListStyles from './postliststyles.module.css'


const PostList = ({ posts }) => (
    <section class={postListStyles.cont}>
        {posts
            .map(({ node: post }) => (
                <div
                    className={postListStyles.card}
                    key={post.id}
                >
                    <div className={`content ${postListStyles.cardContent}`}>
                        <h3>
                            <Link className="has-text-primary" to={post.fields.slug}>
                                {post.frontmatter.title}
                            </Link>
                        </h3>
                        <p className="subtitle">
                            <span> &bull; </span>
                            <small>{post.frontmatter.date}</small>
                        </p>
                        <p>
                            {post.excerpt}
                            <br />
                            <br />
                            <Link className="button is-small" to={post.fields.slug}>
                                Keep Reading →
                        </Link>
                        </p>
                    </div>
                    
                </div>
            ))
        }
    </section>
)

PostList.propTypes = {
    posts: PropTypes.array,    
}

export default PostList
