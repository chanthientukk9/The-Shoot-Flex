import React, { Component } from 'react';
import { func, object, shape, string } from 'prop-types';
import { Field } from 'react-final-form';
import classNames from 'classnames';
import { ValidationError } from '../../components';
import TimeInput from './TimeInput';

import css from './FieldTimeInput.css';

const CONTENT_MAX_LENGTH = 5000;

class FieldTimeInputComponent extends Component {
  render() {
    /* eslint-disable no-unused-vars */
    const {
      rootClassName,
      className,
      inputRootClass,
      customErrorText,
      id,
      label,
      type,
      input,
      meta,
      onUnmount,
      ...rest
    } = this.props;
    /* eslint-enable no-unused-vars */

    console.log('asasas', {this: this.props})

    if (label && !id) {
      throw new Error('id required when a label is given');
    }

    const { valid, invalid, touched, error } = meta;

    const errorText = customErrorText || error;

    // Error message and input error styles are only shown if the
    // field has been touched and the validation has failed.
    const hasError = !!customErrorText || !!(touched && invalid && error);

    const fieldMeta = { touched: hasError, error: errorText };

    const inputClasses =
      inputRootClass ||
      classNames(css.input, {
        [css.inputSuccess]: valid,
        [css.inputError]: hasError,
      });
    const inputProps = { inputClassName: inputClasses, id, type, ...input, ...rest };

    const classes = classNames(rootClassName || css.root, className);
    return (
      <div className={classes}>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <TimeInput {...inputProps}/>
        <ValidationError fieldMeta={fieldMeta} />
      </div>
    );
  }
}

FieldTimeInputComponent.defaultProps = {
  rootClassName: null,
  className: null,
  inputRootClass: null,
  onUnmount: null,
  customErrorText: null,
  id: null,
  label: null,
};

FieldTimeInputComponent.propTypes = {
  rootClassName: string,
  className: string,
  inputRootClass: string,

  onUnmount: func,

  // Error message that can be manually passed to input field,
  // overrides default validation message
  customErrorText: string,

  // Label is optional, but if it is given, an id is also required so
  // the label can reference the input in the `for` attribute
  id: string,
  label: string,

  // Either 'textarea' or something that is passed to the input element

  // Generated by final-form's Field component
  input: shape({
    onChange: func.isRequired,
  }).isRequired,
  meta: object.isRequired,
};

class FieldTimeInput extends Component {
  componentWillUnmount() {
    // Unmounting happens too late if it is done inside Field component
    // (Then Form has already registered its (new) fields and
    // changing the value without corresponding field is prohibited in Final Form
    if (this.props.onUnmount) {
      this.props.onUnmount();
    }
  }

  render() {
    return <Field component={FieldTimeInputComponent} {...this.props} />;
  }
}

export default FieldTimeInput;
