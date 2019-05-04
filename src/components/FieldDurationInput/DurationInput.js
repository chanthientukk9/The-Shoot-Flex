import React, { Component } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import config from '../../config';
import { DURATION_OF_SHOOT } from '../../util/dates';

import css from './DurationInput.css';

class DurationInput extends Component {
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

  handleOpenDurationPanel = () => {
    this.timeOutOpenPanel = setTimeout(() => {
      this.setState({
        isOpenTimePanel: true
      });
    }, 100);
  }

  handleCloseDurationPanel = () => {
    this.timeOutClosePanel = setTimeout(() => {
      this.setState({
        isOpenTimePanel: false
      });
    }, 100)
  }

  handleChooseDuration = (key) => {
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
              this.handleCloseDurationPanel();
              onFocusChange(null);
            }}
            onFocus={(e) => {
              onFocus(e);
              this.handleOpenDurationPanel();
              onFocusChange(DURATION_OF_SHOOT);
            }}
          />
          {this.state.isOpenTimePanel &&
            <div className={css.timePanel}>
              {config.custom.durationSlotList.map(item => (
                <div className={classNames(css.timeItem, item.key === value ? css.selectedTime : css.null)} key={item.key} onClick={() => this.handleChooseDuration(item.key)}>
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

DurationInput.defaultProps = {
  rootClassName: null,
  className: null
}

DurationInput.propTypes = {
  rootClassName: string,
  className: string
}

export default DurationInput;