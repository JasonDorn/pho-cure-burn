import React from 'react';
import PropTypes from 'prop-types';
import {PhounderPageTemplate} from '../../templates/phounder-page';

const PhounderPagePreview = ({entry, getAsset}) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs']);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  const entryTestimonials = entry.getIn(['data', 'testimonials']);
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans']);
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];

  return (
    <PhounderPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{blurbs}}
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
