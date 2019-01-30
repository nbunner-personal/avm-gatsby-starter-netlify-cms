import React from 'react'
import Helmet from 'react-helmet'
import layoutStyles from "./layout.module.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div className={layoutStyles.container}>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div style={{
      background: '#FDFFFC'
      }}>{children}</div>
    <Footer></Footer>
  </div>
)

export default TemplateWrapper
