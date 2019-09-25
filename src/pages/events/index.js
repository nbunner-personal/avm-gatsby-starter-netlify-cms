import React from "react";

import Layout from "../../components/Layout";
import EventsRoll from "../../components/EventsRoll";
import HeroImage from "../../components/HeroImage";

export default class BlogIndexPage extends React.Component {
  render() {
    const heroImage = "/img/hero/retreat-yurt.jpg";
    const heroMsg = "Forthcoming events";
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <section>
                <HeroImage heroImage={heroImage} heroMsg={heroMsg} />
              </section>
            </div>
            <EventsRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
