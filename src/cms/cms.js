import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import EventsPostPreview from './preview-templates/EventsPostPreview'
// import ProductPagePreview from './preview-templates/ProductPagePreview'
import ProjectPagePreview from './preview-templates/ProjectPagePreview'
import FeaturedProjectPagePreview from './preview-templates/FeaturedProjectPagePreview'
import FeaturedProjectPageSimplePreview from './preview-templates/FeaturedProjectPageSimplePreview'
import FeaturedProjectPageSimpleGalPreview from './preview-templates/FeaturedProjectPageSimpleGalPreview'
import FeaturedProjectPageSimpleVidPreview from './preview-templates/FeaturedProjectPageSimpleVidPreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("events", EventsPostPreview);
// CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('projects', ProjectPagePreview)
CMS.registerPreviewTemplate('featuredProject', FeaturedProjectPagePreview)
CMS.registerPreviewTemplate('featuredProjectSimple', FeaturedProjectPageSimplePreview)
CMS.registerPreviewTemplate('featuredProjectSimpleGal', FeaturedProjectPageSimpleGalPreview)
CMS.registerPreviewTemplate('featuredProjectSimpleVid', FeaturedProjectPageSimpleVidPreview)

