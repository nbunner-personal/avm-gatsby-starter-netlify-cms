import React from "react";
import PropTypes from "prop-types";
import { ShopProductPageTemplate } from "../../templates/shop-product-page";

const ShopProductPagePreview = ({ entry, widgetFor }) => (
  <ShopProductPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

ShopProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ShopProductPagePreview;
