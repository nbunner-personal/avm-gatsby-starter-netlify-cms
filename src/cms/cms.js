import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import ProjectPagePreview from './preview-templates/ProjectPagePreview'
import SamsVillagePagePreview from './preview-templates/SamsVillagePagePreview'
import FeaturedProjectPagePreview from './preview-templates/FeaturedProjectPagePreview'
import FeaturedProjectSimplePagePreview from './preview-templates/FeaturedProjectSimplePagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('projects', ProjectPagePreview)
CMS.registerPreviewTemplate('samsvillage', SamsVillagePagePreview)
CMS.registerPreviewTemplate('featuredProject', FeaturedProjectPagePreview)
CMS.registerPreviewTemplate('featuredProjectSimple', FeaturedProjectSimplePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
