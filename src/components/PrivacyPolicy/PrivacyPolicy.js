import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: April 14, 2019</p>

      <h2>The Shoot Privacy Policy</h2>

      <p>
        The Shoot takes privacy of our users very seriously. We ask that you read this privacy policy ('Policy') carefully as it contains important information about how we will use your personal data. 
      </p>

      <p>
        For the purposes of the Data Protection Act 1998, The Shoot ('we' or 'us') is the ‘data controller’ (i.e. who is responsible for, and controls the processing of, your personal data).
      </p>

      <h2>Personal data we may collect about you</h2>

      <h2>Information that you provide</h2>
      
      <p>
        We will obtain personal information about you such as your first name, last name, date of birth, gender and, if you choose, your email address, phone number, location data, photographs of you, details of events you plan to attend, or have attended and other biographical information and preferences whenever you complete forms, or amend forms, on the website and/or site.
      </p>

      <p>
        If you are a photographer listing on The Shoot we may obtain additional biographical information.
      </p>

      <p>
        We will also obtain personal information you provide when you send us feedback, post material, contact us for any reason and by any medium, sign up to a service, share information via The Shoot’s social media functions, complete a survey, report a problem with the site or report a dispute with another user.
      </p>

      <p>
        We may retain a record of any contact you make with us.
      </p>

      <h>Information that we will collect automatically</h>

      <p>
        <b>Cookies:</b> We may monitor your use of the site through the use of cookies and similar tracking devices. For example, we may monitor how many times you use the site, which pages you go to and traffic data. This information helps us to build a profile of our users which helps us to improve personalisation and user experience. Some of this data will be aggregated or statistical, which means that we will not be able to identify you individually.
      </p>

      <p>
        <b>Device information:</b> We may also collect information about your device each time you use the site. For example, we may collect information on the type of mobile device that you are using and its unique device identifier (for example, the IMEI number) and the mobile operating system that you are using.
      </p>

      <p>
        <b>Information on your device:</b> We may also collect information which is stored on your device each time you use the site. For example, we may collect photos, videos and other digital content and if you sign in using Facebook we may collect friends lists.
      </p>

      <p>
        <b>Location data:</b> We may also collect information to determine your location using GPS technology. Many of the features of the site will require access to such location data to work e.g. to allow you search for photographers or customers near you. You can however prevent access to this information by turning off your location services while using the site.
      </p>

      <h2>How we use your personal data</h2>

      <p>We use your personal data for the following purposes:
      <ui>
        <li>
          to provide the site services to you which shall include the display of your profile details and actions to other users of the site;
        </li>
        <li>
          to help us identify you and any accounts you hold with us;
        </li>
        <li>
          administration, including administration of disputes;
        </li>
        <li>
          research, statistical analysis and behavioural analysis;
        </li>
        <li>
          customer profiling;
        </li>
        <li>
          marketing—see 'Marketing and opting out', below;
        </li>
        <li>
          fraud prevention and detection;
        </li>
        <li>
          billing and order fulfilment (including site subscription purchase fulfilment);
        </li>
        <li>
          customising the site and its content to your particular preferences;
        </li>
        <li>
          to notify you of any changes to the site or to our services that may affect you; and
        </li>
        <li>
          improving our services.
        </li>
      </ui>
      </p>

      <h2>Marketing and opting out</h2>

      <p>
        If you have given permission, we may contact you by email about services, promotions, and special offers that may be of interest to you. If you prefer not to receive any direct marketing communications from us, you can opt out at any time. See further 'Your rights', below.
      </p>

      <p>
        The site may contain links to websites or other sites which we or our partners own, or websites or site of our partners or third parties. Please note that if you follow any of these links, the websites, sites and services provided through them will have their own privacy policies/terms of use. We do not accept any responsibility or liability for their respective privacy policies/terms of use or the collection and use of any personal data collected through these websites, sites or services. Please ensure that you review the relevant privacy policies/terms of use prior to providing any personal data to, or using these websites, sites and services.
      </p>

      <h2>Disclosure of your personal data</h2>

      <p>
        We may disclose your personal data to:
      <ui>
        <li>
          other companies within our group;
        </li>
        <li>
          a third party who acquires The Shoot Limited or acquires substantially all of its assets, in which case the personal data shall be one of the acquired assets;
        </li>
        <li>
          our marketing service providers; and
        </li>
        <li>
          law enforcement and regulatory agencies in connection with any investigation to help prevent unlawful activity or as otherwise required by applicable law.
        </li>
      </ui>
      </p>

      <h2>Keeping your data secure</h2>

      <p>
        We will use technical and organisational measures to safeguard your personal data, for example:
        <ui>
          <li>
            access to your account is controlled by a password and username that are unique to you;
          </li>
          <li>
            we store your personal data on secure servers; and
          </li>
          <li>
            (if you engage in paid services) payment transactions processed by Stripe are encrypted.
          </li>
        </ui>
      </p>

      <p>
        While we will use all reasonable efforts to safeguard your personal data, you acknowledge that the use of the internet is not entirely secure and for this reason we cannot guarantee the security or integrity of any personal data that are transferred from you or to you via the internet.
      </p>

      <p>
        We ask you not to share your account password with anyone.
      </p>

      <h2>Monitoring</h2>
      
      <p>
        We may monitor and record communications with you (such as telephone conversations and emails) for the purposes of quality assurance and training.
      </p>

      <h2>Information about other individuals</h2>

      <p>
        If you give us information on behalf of someone else, you confirm that the other person has appointed you to act on his/her behalf and has agreed that you can:
        <ui>
          <li>
            give consent on his/her behalf to the processing of his/her personal data;
          </li>
          <li>
            receive on his/her behalf any data protection notices; and
          </li>
          <li>
            give consent to the transfer of his/her personal data abroad.
          </li>
        </ui>
      </p>

      <h2>Your rights</h2>

      <p>
        You have the right to request access to personal data that we may process about you. If you wish to exercise this right, you should:
        <ui>
          <li>
            put your request in writing;
          </li>
          <li>
            include proof of your identity and address (e.g. a copy of your driving licence or passport, and a recent utility or credit card bill);
          </li>
          <li>
            specify the personal data you want access to, including any account or reference numbers where applicable.
          </li>
        </ui>
      </p>

      <p>
        You have the right to require us to correct any inaccuracies in your data free of charge. If you wish to exercise this right, you should: put your request in writing; provide us with enough information to identify you (for example, your name and account username); and specify the information that is incorrect and what it should be replaced with.
      </p>

      <p>
        You also have the right to ask us to stop processing your personal data for direct marketing purposes. If you wish to exercise this right, you can click the 'Unsubscribe' button at the end of the email you have received from us, or you may put your request in writing (an email sent to info@theshoot.io with a header that says 'Unsubscribe' is acceptable) and provide us with enough information to identify you (for example, your name and account username).
      </p>

      <h2>Right to erasure</h2>

      <p>
        Under Article 17 of the General Data Policies Regulation (GDPR) 2018 you have the right to obtain from us the erasure of personal data concerning yourself without undue delay.  If you wish for us to erase your personal data please contact us (see 'Communications between us' below for contact details).
      </p>

      <p>
        We shall have the obligation to erase personal data without undue delay where one of the following grounds applies:
        <ui>
          <li>
            the personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed;
          </li>
          <li>
            the data subject withdraws consent on which the processing is based according to point (a) of Article 6(1), or point (a) of Article 9(2), and where there is no other legal ground for the processing;
          </li>
          <li>
            the data subject objects to the processing pursuant to Article 21(1) and there are no overriding legitimate grounds for the processing, or the data subject objects to the processing pursuant to Article 21(2);
          </li>
          <li>
            the personal data have been unlawfully processed;
          </li>
          <li>
            the personal data have to be erased for compliance with a legal obligation in Union or Member State law to which the controller is subject;
          </li>
          <li>
            the personal data have been collected in relation to the offer of information society services referred to in Article 8(1).
          </li>
        </ui>
      </p>

      <h2>Lawfulness of Processing</h2>

      <p>
        Processing shall be lawful only if and to the extent that you have given consent to the processing of your personal data for one or more specific purposes;
      </p>
 
      <h2>Right to lodge a complaint with a Supervisory Authority (such as the ICO)</h2>

      <p>
        <ui>
          <li>
            Without prejudice to any other administrative or judicial remedy, under Article 77 of the General Data Policies Regulation (GDPR) 2018 you have the right to lodge a complaint with a supervisory authority, in particular in the Member State of your habitual residence, place of work or place of the alleged infringement if you consider that the processing of personal data relating to you infringes this Regulation.
          </li>
          <li>
            The supervisory authority with which the complaint has been lodged will inform you on the progress and the outcome of the complaint including the possibility of a judicial remedy pursuant to Article 78.
          </li>
        </ui>
      </p>

      <h2>Notification of a personal data breach to the supervisory authority</h2>

      <p>
        In the case of a personal data breach, the controller shall without undue delay and, where feasible, not later than 72 hours after having become aware of it, notify the personal data breach to the supervisory authority competent in accordance with Article 55, unless the personal data breach is unlikely to result in a risk to the rights and freedoms of natural persons. Where the notification to the supervisory authority is not made within 72 hours, it shall be accompanied by reasons for the delay.
      </p>

      <p>
        The processor shall notify the controller without undue delay after becoming aware of a personal data breach.
      </p>

      <p>
        The notification referred to in paragraph 1 shall at least:
        <ui>
          <li>
            describe the nature of the personal data breach including where possible, the categories and approximate number of data subjects concerned and the categories and approximate number of personal data records concerned;
          </li>
          <li>
            communicate the name and contact details of the data protection officer or other contact point where more information can be obtained;
          </li>
          <li>
            describe the likely consequences of the personal data breach;
          </li>
          <li>
            describe the measures taken or proposed to be taken by the controller to address the personal data breach, including, where appropriate, measures to mitigate its possible adverse effects.
          </li>
        </ui>
      </p>

      <p>
        Where, and in so far as, it is not possible to provide the information at the same time, the information may be provided in phases without undue further delay.
      </p>

      <p>
        The controller shall document any personal data breaches, comprising the facts relating to the personal data breach, its effects and the remedial action taken. That documentation shall enable the supervisory authority to verify compliance with this Article.
      </p>

      <h2>Use of cookies</h2>

      <p>
        A cookie is a small text file which is placed onto your mobile (or other electronic device) when you access our site. We use cookies on our site to: keep track of the items stored in your shopping basket and take you through the checkout process; and recognise you whenever you visit the site (this speeds up your access to the site as you do not have to login each time).
      </p>

      <h2>Third party cookies</h2>

      <p>
        We work with third-party suppliers who may also set cookies on our site, for example e.g. Facebook, Twitter. These third-party suppliers are responsible for the cookies they set on our site. If you want further information please go to the website for the relevant third party. 
      </p>

      <h2>How to turn off cookies</h2>

      <p>
        If you do not want to accept cookies, you can change your browser settings so that cookies are not accepted. If you do this, please be aware that you may lose some of the functionality of the site.
      </p>

      <h2>Our contact details</h2>

      <p> 
        We welcome your feedback and questions. If you wish to contact us, please send an email to info@theshoot.io. Our registered office is 87C Queens Drive London N4 2BE
      </p>

      <h2>Changes to this privacy policy</h2>
      
      <p>
        We may change this Policy from time to time. You should check this policy frequently to ensure you are aware of the most recent version that will apply each time you use the site.
      </p>

    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
