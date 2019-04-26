import React, { Component } from 'react';
import { bool, func, object, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { Form, Button, FieldSelect } from '../../components';
import config from '../../config';

import ManageAvailabilityCalendar from './ManageAvailabilityCalendar';
import css from './EditListingAvailabilityForm.css';
import { required } from '../../util/validators';

export class EditListingAvailabilityFormComponent extends Component {
  render() {
    return (
      <FinalForm
        {...this.props}
        render={fieldRenderProps => {
          const {
            className,
            rootClassName,
            disabled,
            handleSubmit,
            intl,
            invalid,
            pristine,
            saveActionMsg,
            updated,
            updateError,
            updateInProgress,
            availability,
            availabilityPlan,
            listingId,
          } = fieldRenderProps;

          const errorMessage = updateError ? (
            <p className={css.error}>
              <FormattedMessage id="EditListingAvailabilityForm.updateFailed" />
            </p>
          ) : null;

          const weekdaysLabel = intl.formatMessage({
            id: 'EditListingAvailabilityForm.weekdaysLabel',
          });

          const weekendsLabel = intl.formatMessage({
            id: 'EditListingAvailabilityForm.weekendsLabel',
          });

          const weekdaysHelpText = intl.formatMessage({
            id: 'EditListingAvailabilityForm.weekdaysHelpText',
          });

          const weekendsHelpText = intl.formatMessage({
            id: 'EditListingAvailabilityForm.weekendsHelpText',
          });

          const weekendsRequired = required(
            intl.formatMessage({
              id: 'EditListingDescriptionForm.weekendsRequired',
            })
          );

          const weekdaysRequired = required(
            intl.formatMessage({
              id: 'EditListingDescriptionForm.weekdaysRequired',
            })
          );

          const classes = classNames(rootClassName || css.root, className);
          const submitReady = updated && pristine;
          const submitInProgress = updateInProgress;
          const submitDisabled = invalid || disabled || submitInProgress;

          return (
            <Form className={classes} onSubmit={handleSubmit}>
              {errorMessage}

              <FieldSelect
                className={css.selectAvailability}
                name={"weekdaysAvailability"}
                id={"weekdaysAvailability"}
                label={weekdaysLabel}
                validate={weekdaysRequired}
              >
                <option disabled value="">
                  {weekdaysHelpText}
                </option>
                {config.custom.weekdaysAvailability.map(c => (
                  <option key={c.key} value={c.key}>
                    {c.label}
                  </option>
                ))}
              </FieldSelect>

              <FieldSelect
                className={css.selectAvailability}
                name={"weekendsAvailability"}
                id={"weekendsAvailability"}
                label={weekendsLabel}
                validate={weekendsRequired}
              >
                <option disabled value="">
                  {weekendsHelpText}
                </option>
                {config.custom.weekdaysAvailability.map(c => (
                  <option key={c.key} value={c.key}>
                    {c.label}
                  </option>
                ))}
              </FieldSelect>

              <div className={css.calendarWrapper}>
                <ManageAvailabilityCalendar
                  availability={availability}
                  availabilityPlan={availabilityPlan}
                  listingId={listingId}
                />
              </div>

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
  }
}

EditListingAvailabilityFormComponent.defaultProps = {
  updateError: null,
};

EditListingAvailabilityFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  updated: bool.isRequired,
  updateError: propTypes.error,
  updateInProgress: bool.isRequired,
  availability: object.isRequired,
};

export default compose(injectIntl)(EditListingAvailabilityFormComponent);
