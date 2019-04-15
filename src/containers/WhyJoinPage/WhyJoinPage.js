import React from 'react';
import config from '../../config';
import { FormattedMessage } from 'react-intl';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
  NamedLink,
} from '../../components';

import css from './WhyJoinPage.css';
import image from './WhyJoinImg2.jpg';

const WhyJoinPage = () => {
  const { siteTwitterHandle, siteFacebookPage, siteInstagramPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="Why join The Shoot"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WhyJoinPage',
        description: 'Benefits for Photographers',
        name: 'Why join The Shoot',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Why join The Shoot?</h1>
          <img className={css.coverImage} src={image} alt="Fiona & Tristan" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>The word "photography" originates from Greek meaning drawing with light</p> 
            </div>

            <div className={css.contentMain}>
              <h2>
                The Shoot is the easy way for UK photographers to get their name out there, secure bookings and get paid in full and on time.
              </h2>

              <p>
                <b>It’s completely free! </b><span role="img" aria-label="money_tongue"> 🤑</span>
              </p>

              <p>
                Listing your profile as a photographer on is completely free and you won’t be charged any commissions on your bookings.  To enable us to keep The Shoot free for photographers we charge customers a small additional transaction fee that ensures photographers are paid their full fee.
              </p>

              <p>
                <b>Easy communication with customers </b><span role="img" aria-label="message"> 💬</span>
              </p>

              <p>
                Prior to booking customers and photographers can chat about their shoot and once you’re both agreed on a plan, customers can submit a booking request for the specified date, time and duration.  Photographers only need to accept the request to confirm and lock in the booking
              </p>

              <p>
                <b>Get paid on time in full </b><span role="img" aria-label="money_bag"> 💰</span>
              </p>

              <p>
              Stop chasing invoices! Through The Shoot not only are you able to manage your bookings and communicate easily with customers, we take payment from the customer prior to shoot taking place, and pay you not long after.  So you can spend more time doing what you do best!
              </p>

              <p>
                <b>More Shoots </b><span role="img" aria-label="camera_flash"> 📸</span>
              </p>

              <p>
                Once your The Shoot profile is up and running you will be immediately discoverable to people in your area looking for someone just like you to photograph their special event or moment.
              </p>

              <p>
                <b>How do I get started?</b><span role="img" aria-label="money_bag"> 💰</span>
              </p>

              <p>
                Adding your photographer profile to The Shoot is easy and takes minutes. Once you’ve created an account, you simply click “Become a Photographer” at the top right of the home page. Please note that our team reviews all listings to ensure the safety of our community.
              </p>

              <p>
                View all <NamedLink name="FAQsPage" className={css.link}>
                    <FormattedMessage id="Footer.toFAQPage" />
                  </NamedLink>
              </p>

              <p>
                You can checkout our community on{' '}
                <ExternalLink href={siteInstagramPage}>Instagram</ExternalLink>,{' '}
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

export default WhyJoinPage;
