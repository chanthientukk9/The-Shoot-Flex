import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionWhatToExpectMaybe = props => {
  const { yesNoOptions, publicData, intl } = props;

  if (!publicData) {
    return null;
  }

  const willYouSendRawImagesName = yesNoOptions.filter(option => {
    return option.key === publicData.sendRawImages;
  });
  const willYouEditPhotosName = yesNoOptions.filter(option => {
    return option.key === publicData.willEditPhotos;
  });

  const willSendRawImagesLabel = intl.formatMessage({
    id: 'ListingPage.willSendRawImagesLabel'
  });
  const willEditPhotosLabel = intl.formatMessage({
    id: 'ListingPage.willEditPhotosLabel'
  });
  const finalImagesPerHourLabel = intl.formatMessage({
    id: 'ListingPage.finalImagesPerHourLabel'
  });
  const expectedDeliveryLabel = intl.formatMessage({
    id: 'ListingPage.expectedDeliveryLabel'
  });

  const haveData = publicData.sendRawImages || publicData.willEditPhotos ||
    publicData.finalImagePerHour || publicData.expetedDeliveryDays;

  return haveData ? (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.whatToExpectTitle" />
      </h2>
      {
        publicData.sendRawImages
          ?
          (<p className={css.boldFont}>{`${willSendRawImagesLabel}`} <span className={css.lighterFont}>{`${willYouSendRawImagesName[0].label}`}</span></p>)
          :
          null
      }
      {
        publicData.willEditPhotos
          ?
          (<p className={css.boldFont}>{`${willEditPhotosLabel}`} <span className={css.lighterFont}>{`${willYouEditPhotosName[0].label}`}</span></p>)
          :
          null
      }
      {
        publicData.finalImagePerHour
          ?
          (<p className={css.boldFont}>{`${finalImagesPerHourLabel}`} <span className={css.lighterFont}>{`${publicData.finalImagePerHour}`}</span></p>)
          :
          null
      }
      {
        publicData.expetedDeliveryDays
          ?
          (<p className={css.boldFont}>{`${expectedDeliveryLabel}`} <span className={css.lighterFont}>{`${publicData.expetedDeliveryDays}`}</span></p>)
          :
          null
      }
    </div>
  ) : null;
};

export default SectionWhatToExpectMaybe;
