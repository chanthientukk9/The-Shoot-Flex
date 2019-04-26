import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionNormalAvailabilityMaybe = props => {
  const { weekendOptions, weekdayOptions, publicData, intl } = props;
  if (!publicData) {
    return null;
  }

  if (!publicData.weekendsAvailability && !publicData.weekdaysAvailability) {
    return null;
  }

  const weekendSelectedOptions = publicData.weekendsAvailability ? publicData.weekendsAvailability : [];
  const weekdaySelectedOptions = publicData.weekdaysAvailability ? publicData.weekdaysAvailability : [];

  const weekendsName = weekendOptions.filter(option => {
    return option.key === weekendSelectedOptions;
  });
  const weekdaysName = weekdayOptions.filter(option => {
    return option.key === weekdaySelectedOptions;
  });

  const weekendLabel = intl.formatMessage({
    id: 'ListingPage.weekends'
  });
  const weekdayLabel = intl.formatMessage({
    id: 'ListingPage.weekdays'
  });

  return (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.normalAvailabilityTitle" />
      </h2>
      {
        weekdaysName[0]
        ?
          (<p className={css.boldFont}>{`${weekdayLabel}`} <span className={css.lighterFont}>{`${weekdaysName[0].label}`}</span></p>)
        :
          null
      }
      {
        weekendsName[0]
        ?
          (<p className={css.boldFont}>{`${weekendLabel}`} <span className={css.lighterFont}>{`${weekendsName[0].label}`}</span></p>)
        :
          null
      }
    </div>
  );
};

export default SectionNormalAvailabilityMaybe;
