import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionMinimumBookingDurationMaybe = props => {
  const { publicData } = props;
  if (!publicData) {
    return null;
  }

  const minimumBookingDuration = publicData.minimumBookingDuration;

  return minimumBookingDuration ? (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.minimumBookingLabel" />
      </h2>
      <p className={css.boldFont}>{`${minimumBookingDuration}`}</p>
    </div>
  ) : null;
};

export default SectionMinimumBookingDurationMaybe;
