import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { NamedLink } from '../../components';

import css from './SectionHero.css';

const SectionHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="SectionHero.subTitle" />
        </h2>
        <NamedLink
          name="SearchPage"
          to={{
            search:
              's?address=London, United Kindom&bounds=51.6225 %2C 0.07227 %2C 51.4103 %2C -0.2995',
          }}
          className={css.heroButton}
        >
          <FormattedMessage id="SectionHero.browseButton" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
