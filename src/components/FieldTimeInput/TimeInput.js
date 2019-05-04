import React, { Component } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import config from '../../config';
import { TIME_OF_SHOOT } from '../../util/dates';

import css from './TimeInput.css';

class TimeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenTimePanel: false
    }
    this.timeOutClosePanel = null;
    this.timeOutOpenPanel = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutClosePanel);
    clearTimeout(this.timeOutOpenPanel);
  }

  handleOpenTimePanel = () => {
    this.timeOutOpenPanel = setTimeout(() => {
      this.setState({
        isOpenTimePanel: true
      });
    }, 100);
  }

  handleCloseTimePanel = () => {
    this.timeOutClosePanel = setTimeout(() => {
      this.setState({
        isOpenTimePanel: false
      });
    }, 100)
  }

  handleChooseTime = (key) => {
    const {
      form,
      name
    } = this.props;
    form.change(name, key)
  }

  render() {
    const {
      rootClassName,
      className,
      inputClassName,
      placeholderText,
      onChange,
      onBlur,
      onFocus,
      value,
      onFocusChange,
      ...rest
    } = this.props;

    const classes = classNames(rootClassName || css.root, className);

    return (
      <div className={classes}>
        <div className={css.showTime}>
          <input
            {...rest}
            readOnly={true}
            className={inputClassName}
            type="text"
            autoComplete="off"
            placeholder={placeholderText}
            value={value}
            onChange={(e) => {
              onChange(e);
            }}
            onBlur={(e) => {
              onBlur(e);
              this.handleCloseTimePanel();
              onFocusChange(null);
            }}
            onFocus={(e) => {
              onFocus(e);
              this.handleOpenTimePanel();
              onFocusChange(TIME_OF_SHOOT);
            }}
          />
          {this.state.isOpenTimePanel &&
            <div className={css.timePanel}>
              {config.custom.timeSlotList.map(item => (
                <div className={classNames(css.timeItem, item.key === value ? css.selectedTime : css.null)} key={item.key} onClick={() => this.handleChooseTime(item.key)}>
                  {item.label}
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    );
  }
}

TimeInput.defaultProps = {
  rootClassName: null,
  className: null
}

TimeInput.propTypes = {
  rootClassName: string,
  className: string
}

export default TimeInput;