import React from 'react'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import FeaturedProjects from "../components/FeaturedProjects";
import CtaButton from "../components/CtaButton";
import postStyles from "../components/posts.module.css";

export default class BlogIndexPage extends React.Component {
    
    
    render() {

        return (
          <Layout>
            <section className="section section--gradient">
              <div className="container">
                <div className="columns">
                  <div className="column is-14 is-offset-1">
                    <article className="content">
                      <div className="columns">
                        <main className={`column is-8 ${ postStyles.postWide }`}>
                          <h1 className="has-text-weight-semibold is-size-2">
                            Latest news
                          </h1>
                        <BlogRoll />
                          <CtaButton
                            link="https://www.charitycheckout.co.uk/1113786/"
                            text="Donate"
                          />
                        </main>
                        <aside className="column is-4">
                          <FeaturedProjects currentProject="default" />
                        </aside>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </section>
          </Layout>
        );
    }
}