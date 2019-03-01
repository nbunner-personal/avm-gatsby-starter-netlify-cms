import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import EventsPostPreview from './preview-templates/EventsPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import ProjectPagePreview from './preview-templates/ProjectPagePreview'
import FeaturedProjectPagePreview from './preview-templates/FeaturedProjectPagePreview'
import FeaturedProjectSimplePagePreview from './preview-templates/FeaturedProjectSimplePagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('projects', ProjectPagePreview)
CMS.registerPreviewTemplate('featuredProject', FeaturedProjectPagePreview)
CMS.registerPreviewTemplate('featuredProjectSimple', FeaturedProjectSimplePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('events', EventsPostPreview)
