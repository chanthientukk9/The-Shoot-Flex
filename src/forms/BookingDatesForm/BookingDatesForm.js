import React, { Component } from 'react';
import { string, bool, arrayOf } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import classNames from 'classnames';
import moment from 'moment';
import { required, bookingDateRequired, composeValidators } from '../../util/validators';
import { DATE_OF_SHOOT, TIME_OF_SHOOT, DURATION_OF_SHOOT } from '../../util/dates';
import { propTypes } from '../../util/types';
import config from '../../config';
import { Form, PrimaryButton, FieldTimeInput, FieldDateInput, FieldDurationInput } from '../../components';
import EstimatedBreakdownMaybe from './EstimatedBreakdownMaybe';

import css from './BookingDatesForm.css';

const TIME_STAMP_ONE_HOUR = 60 * 60 * 1000;

export class BookingDatesFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      focusedInputName: null,
      bookingDateTimeError: null
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onFocusedInputChange = this.onFocusedInputChange.bind(this);
    this.onFocusedInputNameChange = this.onFocusedInputNameChange.bind(this);
  }

  // Function that can be passed to nested components
  // so that they can notify this component when the
  // focused input changes.
  onFocusedInputChange({ focusedInput }) {
    this.setState({ focusedInput });
  }

  onFocusedInputNameChange(focusedInputName) {
    this.setState({ focusedInputName });
  }

  // In case start or end date for the booking is missing
  // focus on that input, otherwise continue with the
  // default handleSubmit function.
  handleFormSubmit(e) {
    const { bookingDate, bookingTime, bookingDuration } = e ? e : {};
    const bookingDateRaw = bookingDate ? bookingDate.date : null;

    if (!bookingDateRaw) {
      // e.preventDefault();
      this.setState({ focusedInput: DATE_OF_SHOOT });
    } else if (!bookingTime) {
      // e.preventDefault();
      this.setState({ focusedInput: TIME_OF_SHOOT });
    } else if (!bookingDuration) {
      // e.preventDefault();
      this.setState({ focusedInput: DURATION_OF_SHOOT });
    } else {
      this.props.onSubmit(e);
    }
  }

  handleGetBookingDateTimeError = (errorComponent, type) => {
    let bookingDateTimeError = { ...this.state.bookingDateTimeError };
    if (errorComponent) {
      if (bookingDateTimeError[type]) {
        return;
      } else {
        bookingDateTimeError[type] = errorComponent;
        this.setState({
          bookingDateTimeError: { ...bookingDateTimeError }
        })
      }
    } else {
      if (bookingDateTimeError[type]) {
        delete bookingDateTimeError[type];
        this.setState({
          bookingDateTimeError: { ...bookingDateTimeError }
        })
      } else {
        return;
      }
    }
  }

  render() {
    const { rootClassName, className, price: unitPrice, ...rest } = this.props;
    const classes = classNames(rootClassName || css.root, className);

    if (!unitPrice) {
      return (
        <div className={classes}>
          <p className={css.error}>
            <FormattedMessage id="BookingDatesForm.listingPriceMissing" />
          </p>
        </div>
      );
    }
    if (unitPrice.currency !== config.currency) {
      return (
        <div className={classes}>
          <p className={css.error}>
            <FormattedMessage id="BookingDatesForm.listingCurrencyInvalid" />
          </p>
        </div>
      );
    }

    return (
      <FinalForm
        {...rest}
        unitPrice={unitPrice}
        onSubmit={this.handleFormSubmit}
        render={fieldRenderProps => {
          const {
            dateOfShootPlaceholder,
            timeOfShootPlaceholder,
            durationOfShootPlaceholder,
            form,
            handleSubmit,
            intl,
            isOwnListing,
            submitButtonWrapperClassName,
            unitPrice,
            unitType,
            values,
            timeSlots,
            fetchTimeSlotsError,
          } = fieldRenderProps;

          const { bookingDate, bookingTime, bookingDuration } = values ? values : {};
          const bookingDateRaw = bookingDate ? bookingDate.date : null
          const validInput = !!bookingDateRaw && !!bookingTime && !!bookingDuration;
          const bookingDurationFiltered = validInput ? config.custom.durationSlotList.filter(item => item.key === bookingDuration)[0] : null;
          const bookingDurationNum = bookingDurationFiltered ? bookingDurationFiltered : null;
          let startDate = new Date(bookingDateRaw);
          const bookingTimeFiltered = validInput ? config.custom.timeSlotList.filter(item => item.key === bookingTime)[0] : null;
          const selectedTime = bookingTimeFiltered ? bookingTimeFiltered : null;
          const timeStampDuration = bookingDurationNum ? bookingDurationNum.duration * TIME_STAMP_ONE_HOUR : null;
          selectedTime ? startDate.setHours(selectedTime.hour) : null;
          selectedTime ? startDate.setMinutes(selectedTime.minute) : null;
          startDate = selectedTime ? startDate.getTime() : null;
          let endDate = selectedTime ? startDate + timeStampDuration : null;

          const bookingDateLabel = intl.formatMessage({
            id: "BookingDatesForm.bookingDateLabel"
          });

          const bookingTimeLabel = intl.formatMessage({
            id: "BookingDatesForm.bookingTimeLabel"
          });

          const bookingDurationLabel = intl.formatMessage({
            id: "BookingDatesForm.bookingDurationLabel"
          });

          const requiredDateMessage = intl.formatMessage({ id: 'BookingDatesForm.requiredDate' });
          const requiredTimeMessage = intl.formatMessage({ id: 'BookingDatesForm.requiredTime' });
          const requiredDurationMessage = intl.formatMessage({ id: 'BookingDatesForm.requiredDuration' });
          const dateOfShootErrorMessage = intl.formatMessage({
            id: 'FieldDateInput.invalidDate',
          });
          const timeSlotsError = fetchTimeSlotsError ? (
            <p className={css.timeSlotsError}>
              <FormattedMessage id="BookingDatesForm.timeSlotsError" />
            </p>
          ) : null;

          // This is the place to collect breakdown estimation data. See the
          // EstimatedBreakdownMaybe component to change the calculations
          // for customized payment processes.
          const bookingData =
            !!startDate && !!endDate
              ? {
                unitType,
                unitPrice,
                startDate,
                endDate,

                // NOTE: If unitType is `line-item/units`, a new picker
                // for the quantity should be added to the form.
                quantity: 1,
              }
              : null;
          const bookingInfo = bookingData ? (
            <div className={css.priceBreakdownContainer}>
              <h3 className={css.priceBreakdownTitle}>
                <FormattedMessage id="BookingDatesForm.priceBreakdownTitle" />
              </h3>
              <EstimatedBreakdownMaybe bookingData={bookingData} />
            </div>
          ) : null;

          const dateFormatOptions = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          };

          const timeFormatOptions = {
            hour: 'numeric',
            minute: '2-digit',
          };

          const now = moment();
          const today = now.startOf('day').toDate();
          const tomorrow = now
            .startOf('day')
            .add(1, 'days')
            .toDate();
          const dateOfShootPlaceholderText = dateOfShootPlaceholder || intl.formatDate(today, dateFormatOptions);
          const timeOfShootPlaceholderText = timeOfShootPlaceholder || intl.formatTime(today, timeFormatOptions);
          const durationOfShootPlaceholderText = durationOfShootPlaceholder || intl.formatMessage({ id: "BookingDateForms.durationOfShootPlaceholderText" });
          const submitButtonClasses = classNames(
            submitButtonWrapperClassName || css.submitButtonWrapper
          );

          return (
            <Form onSubmit={handleSubmit} className={classes}>
              {timeSlotsError}
              <div className={css.dateTimeOfShootContainer}>
                <FieldDateInput
                  className={classNames(css.bookingDate, this.state.focusedInput || this.state.focusedInputName === TIME_OF_SHOOT ? css.fullBookingItemBox : css.null)}
                  id={`${form}.bookingDate`}
                  name="bookingDate"
                  label={bookingDateLabel}
                  useMobileMargins={false}
                  focused={this.state.focusedInput}
                  onFocusChange={this.onFocusedInputChange}
                  format={null}
                  timeSlots={timeSlots}
                  placeholderText={dateOfShootPlaceholderText}
                  handleGetBookingDateTimeError={this.handleGetBookingDateTimeError}
                  validate={composeValidators(
                    required(requiredDateMessage),
                    bookingDateRequired(dateOfShootErrorMessage)
                  )}
                />
                <FieldTimeInput
                  className={classNames(css.bookingTime)}
                  id={`${form}.bookingTime`}
                  name="bookingTime"
                  label={bookingTimeLabel}
                  // focused={this.state.focusedInputName}
                  onFocusChange={this.onFocusedInputNameChange}
                  placeholderText={timeOfShootPlaceholderText.replace(" AM", "")}
                  handleGetBookingDateTimeError={this.handleGetBookingDateTimeError}
                  validate={composeValidators(
                    required(requiredTimeMessage)
                  )}
                  form={form}
                />
                <div className={css.errorWrapper}>
                  {this.state.bookingDateTimeError && Object.entries(this.state.bookingDateTimeError).length > 0 &&
                    Object.entries(this.state.bookingDateTimeError).map(item => item[1])[0]
                  }
                </div>
              </div>
              <FieldDurationInput
                className={css.bookingDuration}
                id={`${form}.bookingDuration`}
                name="bookingDuration"
                label={bookingDurationLabel}
                // focused={this.state.focusedInputName}
                onFocusChange={this.onFocusedInputNameChange}
                placeholderText={durationOfShootPlaceholderText}
                validate={composeValidators(
                  required(requiredDurationMessage)
                )}
                form={form}
              />
              {bookingInfo}
              <p className={css.smallPrint}>
                <FormattedMessage
                  id={
                    isOwnListing
                      ? 'BookingDatesForm.ownListing'
                      : 'BookingDatesForm.ContactPhotographerFirst'
                  }
                />
                <FormattedMessage id='BookingDatesForm.youWontBeChargedInfo' />
              </p>
              <div className={submitButtonClasses}>
                <PrimaryButton type="submit">
                  <FormattedMessage id="BookingDatesForm.requestToBook" />
                </PrimaryButton>
              </div>
            </Form>
          );
        }}
      />
    );
  }
}

BookingDatesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  submitButtonWrapperClassName: null,
  price: null,
  isOwnListing: false,
  startDatePlaceholder: null,
  endDatePlaceholder: null,
  timeSlots: null,
};

BookingDatesFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  submitButtonWrapperClassName: string,

  unitType: propTypes.bookingUnitType.isRequired,
  price: propTypes.money,
  isOwnListing: bool,
  timeSlots: arrayOf(propTypes.timeSlot),

  // from injectIntl
  intl: intlShape.isRequired,

  // for tests
  startDatePlaceholder: string,
  endDatePlaceholder: string,
};

const BookingDatesForm = compose(injectIntl)(BookingDatesFormComponent);
BookingDatesForm.displayName = 'BookingDatesForm';

export default BookingDatesForm;
