import React from "react";
import PropTypes from "prop-types";
import { PhounderPageTemplate } from "../../templates/phounder-page";

const PhounderPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(["data", "intro", "blurbs"]);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  return (
    <PhounderPageTemplate
      image={getAsset(entry.getIn(["data", "image"]))}
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      intro={{ blurbs }}
    />
  );
};

PhounderPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default PhounderPagePreview;
