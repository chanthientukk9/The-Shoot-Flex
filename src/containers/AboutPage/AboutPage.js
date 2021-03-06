import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About The Shoot',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>About Us.</h1>
          <img className={css.coverImage} src={image} alt="Fiona & Tristan" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Did you know that over <b>1 trillion</b> photos were taken in 2018 - that's more than <b>114 million</b> per hour!</p> <p><span role="img" aria-label="star_eyes">🤩</span></p>
              <p>How many were you in? </p> 
            </div>

            <div className={css.contentMain}>
              <h2>
                The Shoot is the brainchild of partners Fiona and Tristan who just wanted some affordable, great photos.
              </h2>

              <p>
                Not wanting to take photos but wanting to have photos. Wanting to stay in the moment. Photos with friends that aren’t selfies. A natural photo of old friends reunited from across the room.
              </p>

              <p>
                That’s all we wanted. So we built The Shoot.
              </p>

              <p>
                The Shoot finds affordable yet high quality photographers in your area. Contact, discuss and book your shoot today. And you’ll be (almost) as happy as our founders. <span role="img" aria-label="tongue_out">😛</span></p>

              <p>
                You can checkout our community on{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
