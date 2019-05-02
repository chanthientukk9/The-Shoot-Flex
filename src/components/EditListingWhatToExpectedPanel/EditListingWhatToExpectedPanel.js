import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureListing } from '../../util/data';
import { EditListingWhatToExpectedForm } from '../../forms';
import { ListingLink } from '../../components';

import css from './EditListingWhatToExpectedPanel.css';

const EditListingWhatToExpectedPanel = props => {
  const {
    rootClassName,
    className,
    listing,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
    intl,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const { publicData } = currentListing.attributes;

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingWhatToExpectedPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingWhatToExpectedPanel.createListingTitle" />
  );

  const { sendRawImages, willEditPhotos, finalImagePerHour, expetedDeliveryDays } = publicData;
  const initialValues = { sendRawImages, willEditPhotos, finalImagePerHour, expetedDeliveryDays };

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingWhatToExpectedForm
        className={css.form}
        initialValues={initialValues}
        intl={intl}
        onSubmit={values => {
          const { sendRawImages, willEditPhotos, finalImagePerHour, expetedDeliveryDays } = values;

          const updatedValues = {
            publicData: { sendRawImages, willEditPhotos, finalImagePerHour, expetedDeliveryDays },
          };
          onSubmit(updatedValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
      />
    </div>
  );
};

EditListingWhatToExpectedPanel.defaultProps = {
  rootClassName: null,
  className: null,
  listing: null,
};

const { bool, func, object, string } = PropTypes;

EditListingWhatToExpectedPanel.propTypes = {
  rootClassName: string,
  className: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingWhatToExpectedPanel;
