import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FormattedMessage } from 'react-intl';
import { required, composeValidators } from '../../util/validators';
import { propTypes } from '../../util/types';
import config from '../../config';
import { Button, FieldCheckboxGroup, Form, FieldTextInput, FieldSelect } from '../../components';

import css from './EditListingWhatToExpectedForm.css';

const EditListingWhatToExpectedFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={fieldRenderProps => {
      const {
        disabled,
        rootClassName,
        className,
        name,
        handleSubmit,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        intl,
      } = fieldRenderProps;

      const classes = classNames(rootClassName || css.root, className);
      const submitReady = updated && pristine;
      const submitInProgress = updateInProgress;
      const submitDisabled = disabled || submitInProgress;

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingWhatToExpectedForm.updateFailed" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingWhatToExpectedForm.showListingFailed" />
        </p>
      ) : null;

      const willSendRawImageLabel = intl.formatMessage({
        id: 'EditListingWhatToExpectedForm.willSendRawImageLabel',
      });

      const willSendRawImagePlaceholder = intl.formatMessage({
        id: 'EditListingWhatToExpectedForm.willSendRawImagePlaceholder',
      });

      const willSendRawImageRequired = required(
        intl.formatMessage({
          id: 'EditListingWhatToExpectedForm.willSendRawImageRequired',
        })
      );

      const willEditPhotoLabel = intl.formatMessage({
        id: 'EditListingWhatToExpectedForm.willEditPhotoLabel',
      });

      const willEditPhotoPlaceholder = intl.formatMessage({
        id: 'EditListingWhatToExpectedForm.willEditPhotoPlaceholder',
      });

      const willEditPhotoRequired = required(
        intl.formatMessage({
          id: 'EditListingWhatToExpectedForm.willEditPhotoRequired',
        })
      );

      const deliveredImageLabel = intl.formatMessage({
        id: 'EditListingWhatToExpectedForm.deliveredImageLabel',
      });

      const deliveredImagePlaceholder = intl.formatMessage({
        id: 'EditListingWhatToExpectedForm.deliveredImagePlaceholder',
      });

      const deliveredImageRequired = required(
        intl.formatMessage({
          id: 'EditListingWhatToExpectedForm.deliveredImageRequired',
        })
      );

      const expectedDeliveryLabel = intl.formatMessage({
        id: 'EditListingWhatToExpectedForm.expectedDeliveryLabel',
      });

      const expectedDeliveryPlaceholder = intl.formatMessage({
        id: 'EditListingWhatToExpectedForm.expectedDeliveryPlaceholder',
      });

      const expectedDeliveryRequired = required(
        intl.formatMessage({
          id: 'EditListingWhatToExpectedForm.expectedDeliveryRequired',
        })
      );

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}

          <FieldSelect
            className={css.sendRawImages}
            name="sendRawImages"
            id="sendRawImages"
            label={willSendRawImageLabel}
            validate={willSendRawImageRequired}
          >
            <option disabled value="">
              {willSendRawImagePlaceholder}
            </option>
            {config.custom.yesNoOptions.map(c => (
              <option key={c.key} value={c.key}>
                {c.label}
              </option>
            ))}
          </FieldSelect>

          <FieldSelect
            className={css.willEditPhotos}
            name="willEditPhotos"
            id="willEditPhotos"
            label={willEditPhotoLabel}
            validate={willEditPhotoRequired}
          >
            <option disabled value="">
              {willEditPhotoPlaceholder}
            </option>
            {config.custom.yesNoOptions.map(c => (
              <option key={c.key} value={c.key}>
                {c.label}
              </option>
            ))}
          </FieldSelect>

          <FieldTextInput
            id="finalImagePerHour"
            name="finalImagePerHour"
            className={css.finalImagePerHour}
            type="textarea"
            label={deliveredImageLabel}
            placeholder={deliveredImagePlaceholder}
            validate={composeValidators(deliveredImageRequired)}
          />

          <FieldTextInput
            id="expetedDeliveryDays"
            name="expetedDeliveryDays"
            className={css.expetedDeliveryDays}
            type="textarea"
            label={expectedDeliveryLabel}
            placeholder={expectedDeliveryPlaceholder}
            validate={composeValidators(expectedDeliveryRequired)}
          />

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingWhatToExpectedFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  fetchErrors: null,
};

EditListingWhatToExpectedFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
};

const EditListingWhatToExpectedForm = EditListingWhatToExpectedFormComponent;

export default EditListingWhatToExpectedForm;
