import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import css from './TermsOfService.css';
import {
  NamedLink,
} from '../../components';

const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: April 14, 2019</p>

      <p>
        IMPORTANT NOTICE:
        <ul>
          <li>
            BY CLICKING ON THE "ACCEPT" BUTTON BELOW YOU AGREE TO THESE TERMS WHICH WILL BIND YOU.
          </li>
          <li>
            IF YOU DO NOT AGREE TO THESE TERMS, CLICK ON THE "REJECT" BUTTON BELOW.
          </li>
        </ul>
      </p>

      <h2>1.     Introduction</h2>

      <p>
        These terms of use ('Terms') are a legal agreement between you ('you') and The Shoot for your use of the The Shoot website (‘Site’)
      </p>
      <p>
        In consideration of you agreeing to abide by the terms of these Terms, we grant you a non-transferable, non-exclusive licence to use the Site subject to these Terms and to any rules or policies applied by any third party provider or operator from whose Site you accessed The Shoot. 
      </p>

      <h2>2.     Your privacy</h2>

      <p>
        The terms of our privacy policy, available at <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
            <FormattedMessage id="Footer.privacyPolicy" />
          </NamedLink> ('Privacy Policy') are incorporated into these Terms.
      </p>
      <p>
        Additionally, by using the the Site or any of the services accessible through the Site (‘services’) , you acknowledge and agree that internet transmissions are never completely private or secure. You understand that any message or information you send using the Site may be read or intercepted by others, even if there is a special notice that a particular transmission is encrypted.
      </p>

      <h2>3.  How it works</h2>

      <p>
        We came up with the Site to enable individuals to connect with other individuals for the purpose of arranging a photo shoot.
      </p>
      
      <p>
        We refer to individuals who use the Site to connect with and book photographers as 'Customers’.
      </p>

      <p>
        We refer to individuals who list their photography and editing services as ‘Photographers’.
      </p>

      <p>
        To sign up as a customer in order to book a photographer you are able to create an account via the homepage and begin communicating with an booking photographers.
      </p> 

      <p>
        To sign up as a photographer you will need to follow up the same sign up process as a customers after which you will be able to create your photographer listing.
      </p>

      <p>
        Once a customer account has been set you will be be able to book and pay for photographers. 
      </p>

      <p>
        Once a photographer listing is created you will be able to communicate with customers and accept bookings and payment for those bookings.
      </p>

      <h2>4.  Acceptable Use Standards</h2>
      
      <p>
        You may use the Site only for lawful purposes. You may not use the Site or any of the Services:
      
        <li>
          In any way that breaches any applicable local, national or international law or regulation.
        </li>
        <li>
          In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect.
        </li>
        <li>
          For the purpose of harming or attempting to harm minors in any way.
        </li>
        <li>
          For the purpose of advertising any product or services other than in the case of a photography services in accordance with these Terms.
        </li>
        <li>
          To send, knowingly receive, upload, download, use or re-use any material which does not comply with our content standards below ('Content Standards').
        </li>
        <li>
          To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam).
        </li>
        <li>
          To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.
        </li>
        <li>
          In a way that could damage, disable, overburden, impair or compromise our systems or security or interfere with other users.
        </li>
        <li>
          To collect or harvest any information or data from any Service or our systems or attempt to decipher any transmissions to or from the servers running any Service.
        </li>
      
    </p>

    <h2>6.  Content Standards</h2>

    <p>
      The content standards below apply to any and all material which you contribute to the Site ('contributions'), and to any Services.
    </p>

    <p>
      You must comply with the spirit and the letter of the following standards. The standards apply to each part of any contribution as well as to its whole.
    </p>

    <p>
      Contributions must:
      
        <li>
            Be accurate (where they state facts).
        </li>
        <li>
          Be genuinely held (where they state opinions).
        </li>
        <li>
        Comply with applicable law in the UK and in any country from which they are posted.
        </li>
      
    </p>

    <p>Contributions must not:
      
        <li>
          Contain any material which is defamatory of any person.
        </li>
        <li>
          Contain any material which is obscene, offensive, hateful or inflammatory.
        </li>
        <li>
          Promote sexually explicit material.
        </li>
        <li>
          Promote violence.
        </li>
        <li>
          Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.
        </li>
        <li>
          Infringe any copyright, database right or trademark of any other person.
        </li>
        <li>
        Be likely to deceive any person.
        </li>
        <li>
          Be made in breach of any legal duty owed to a third party, such as a contractual duty or a duty of confidence.
        </li>
        <li>
          Promote any illegal activity.
        </li>
        <li>
          Be threatening, abuse or invade another's privacy, or cause annoyance, inconvenience or needless anxiety.
        </li>
        <li>
          Be likely to harass, upset, embarrass, alarm or annoy any other person.
        </li>
        <li>
          Be used to impersonate any person, or to misrepresent your identity or affiliation with any person.
        </li>
        <li>
          Give the impression that they emanate from us, if this is not the case.
        </li>
        <li>
          Advocate, promote or assist any unlawful act such as (by way of example only) copyright infringement or computer misuse.
        </li>
      
    </p>

    <h2>7.  Suspension and termination</h2>

    <p>
      We will determine, in our discretion, whether there has been a breach of the Acceptable Use Standards or Content Standards (the 'Standards') through your use of our Site and the Services.  When a breach of either has occurred, we may take such action as we deem appropriate.
    </p>

    <p>
      Failure to comply with the Standards constitutes a material breach of these Terms upon which you are permitted to use the Site, and may result in our taking all or any of the following actions:
      
        <li>
          Immediate, temporary or permanent withdrawal of your right to use the Site.
        </li>
        <li>
          Immediate, temporary or permanent removal of any posting or material uploaded by you to the Site.
        </li>
        <li>
          Issue of a warning to you.
        </li>
        <li>
          Legal proceedings against you for reimbursement of all costs on an indemnity basis (including, but not limited to, reasonable administrative and legal costs) resulting from the breach.
        </li>
        <li>
          Further legal action against you.
        </li>
        <li>
          Disclosure of such information to law enforcement authorities as we reasonably feel is necessary.
        </li>
      
    </p>

    <p>
      We exclude liability for actions taken in response to breaches of the Standards.  The responses described in these Terms are not limited, and we may take any other action we reasonably deem appropriate.
    </p>

    <h2>8.  Dispute resolution</h2>

    <p>
      Any disputes in relation to any Services should be raised and resolved directly with the Customer(s) and Photographers(s) concerned. While we may provide guidance on our Site regarding actions which may be taken in the event of disputes, The Shoot shall be under no obligation to intervene.
    </p>

    <p>
      Notwithstanding this, if you wish to complain about use of the Site in breach of these Terms by other users, please contact us (see 'Communications between us' below for contact details).
    </p>

    <h2>9. Communication between us</h2>

    <p>
      If you wish to contact us in writing, or if any condition in these Terms require you to give us notice in writing, you can send this to us by e-mail or by prepaid post to The Shoot 87C Queens Drive London N4 2BE and info@theshoot.io. We will confirm receipt of this by contacting you in writing, normally by email.
    </p>

    <p>
      If we have to contact you or give you notice in writing, we will do so by e-mail or via the Site.
    </p>

    <h2>10. These Terms</h2>

    <p>
      These Terms apply to the Site and any Services, including any updates or supplements to the Site or any Services, unless they come with separate terms, in which case those terms apply. If any open-source software is included in the Site or any Service, the terms of an open-source licence may override some of these Terms.
    </p>

    <p>
      We may change these Terms at any time by sending you an email or other notification with details of the change or notifying you of a change when you next start the Site. The new terms may be displayed on-screen and you may be required to read and accept them to continue your use of the Services.
    </p>

    <p>
      If you do not accept the notified changes you may continue to use the Site and the Services in accordance with the existing terms but certain new features may not be available to you.
    </p>

    <h2>11.  Updates to the Site</h2>

    <p>
      From time to time we may automatically update the Site and change the Service to improve performance, enhance functionality.
    </p>

    <h2>12.  If someone else owns the device you are using</h2>

    <p>
      If you access the Site via any device not owned by you, you must have the owner's permission to do so. You will be responsible for complying with these Terms, whether or not you own the device.
    </p>

    <h2>13.  We may collect technical data about your device</h2>
    
    <p>
      By using the Site or any of the Services, you consent to us collecting and using technical information about the device and related software, hardware and peripherals for Services that are internet-based or wireless to improve our Site and to provide any Services to you.
    </p>

    <h2>14.  Location data</h2>

    <p>
      We may collect information to determine your location using GPS technology. Many of the features of the Site will require access to such location data to work. You can however prevent access to this information by turning off your location services while using the Site. 
    </p>

    <h2>15.  Links</h2>

    <p>
      The Site or any Service may contain links to other independent third-party websites ('Third-party Sites'). Third-party Sites are not under our control, and we are not responsible for and do not endorse their content or their privacy policies (if any). You will need to make your own independent judgement regarding your interaction with any Third-party Sites, including the purchase and use of any products or services accessible through them.
    </p>


    <h2>16.  Licence restrictions</h2>

    <p>
      You agree that you will:
      
        <li>
          not rent, lease, sub-license, loan, provide, or otherwise make available, the Site or the Services in any form, in whole or in part to any person without prior written consent from us;
        </li>
        <li>
          not copy the Site or Services, except as part of the normal use of the Site or where it is necessary for the purpose of back-up or operational security;
        </li>
        <li>
          not translate, merge, adapt, vary, alter or modify, the whole or any part of the Site, Services nor permit the Site or the Services or any part of them to be combined with, or become incorporated in, any other programs, except as necessary to use the Site and the Services on devices as permitted in these terms;
        </li>
        <li>
          not disassemble, de-compile, reverse engineer or create derivative works based on the whole or any part of the Site or the Services nor attempt to do any such things, except to the extent that (by virtue of sections 50B and 296A of the Copyright, Designs and Patents Act 1988) such actions cannot be prohibited because they are necessary to decompile the Site to obtain the information necessary to create an independent program that can be operated with the Site or with another program ('Permitted Objective'), and provided that the information obtained by you during such activities:
          <ol type="i">
            <li>
              is not disclosed or communicated without the Licensor's prior written consent to any third party to whom it is not necessary to disclose or communicate it in order to achieve the Permitted Objective; and
            </li>
            <li>
              is not used to create any software that is substantially similar in its expression to the Site;
            </li>
            <li>
              is kept secure; and
            </li>
            <li>
              is used only for the Permitted Objective;
            </li>
          </ol>
         </li> 
        <li>
          comply with all applicable technology control or export laws and regulations that apply to the technology used or supported by the Site or any Service (the 'Technology').
        </li>
      
    </p>

    <h2>17.  Intellectual property rights</h2>

    <p>
      You acknowledge that all intellectual property rights in the Technology anywhere in the world belong to us or our licensors, that rights in the Technology are licensed (not sold) to you, and that you have no rights in, or to, the Technology other than the right to use each of them in accordance with these Terms. You acknowledge that you have no right to have access to the Site in source-code form.
    </p>

    <h2>18.  Your data</h2>

    <p>
      You shall own all right, title and interest to all of the data you upload for the purpose of using the Services ('Uploaded Data'). You give The Shoot a worldwide licence to store and otherwise use the Uploaded Data for the purposes of providing and improving the Services. 
    </p>

    <h2>19.  Limitation of liability</h2>

    <p>
      <b>All users:</b>
    </p>

    <p>
      You acknowledge that the Site has not been developed to meet your individual requirements, and that it is therefore your responsibility to ensure that the facilities and functions of the Site as described meet your requirements.
    </p>

    <p>
      Information provided via the Site and the Services is provided for general information and entertainment purposes only. They do not offer advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of information obtained from the Site or the Service. Although we make reasonable efforts to update the information provided by the Site and the Service, we make no representations, warranties or guarantees, whether express or implied, that such information is accurate, complete or up to date.
    </p>

    <p>
      We do not review profiles and are not involved in the actual transactions or other arrangements between users (including without limitation the provision of photography services, or the organisation and running of events or transportation to them), and shall have no liability in respect of the same. We do not guarantee the accuracy of profiles or user communications or the reliability, quality, safety, or legality of any events or services offered by Customers or Photographers
    </p>

    <p>
      Notwithstanding any other provision in this section 20, we do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors or for fraud or fraudulent misrepresentation.
    </p>

    <p>
      <b>Customers:</b>
    </p>

    <p>
      We only supply the Site for domestic and private use to Customers. While using Customer Services as a Customer User you agree not to use the Site for any commercial, business or resale purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.
    </p>

    <p>
      We are responsible to you for foreseeable loss and damage caused by us. If we fail to comply with these Terms, we are responsible for loss or damage you suffer that is a foreseeable result of our breaking these terms or our failing to use reasonable care and skill, but we are not responsible for any loss or damage that is not foreseeable. Loss or damage is foreseeable if either it is obvious that it will happen or if, at the time you accepted these terms, both we and you knew it might happen.
    </p>

    <p>
      If defective digital content that we have supplied damages a device or digital content belonging to you, we will either repair the damage or pay you compensation to the extent required by law. However, we will not be liable for damage that you could have avoided by following our advice to apply an update offered to you free of charge or for damage that was caused by you failing to correctly follow installation instructions or to have in place the minimum system requirements advised by us.
    </p>

    <p>
      <b>Photographer:</b>
    </p>

    <p>
      Except as expressly and specifically provided in these Terms each Photographer assumes sole responsibility for results obtained from the use of the Services and the Site, all warranties, representations, conditions and all other terms of any kind whatsoever implied by statute or common law are, to the fullest extent permitted by applicable law, excluded from this agreement; and the Services and the Site are provided to the Photographer on an "as is" basis.
    </p>

    <p>
      We shall not be liable to any Photographer for consequential, indirect or special losses.
    </p>

    <p>
      We shall not be liable to any Photographer for any of the following (whether direct or indirect): loss of profit; loss of data; loss of use; loss of production; loss of contract; loss of opportunity; loss of savings, discount or rebate (whether actual or anticipated); or harm to reputation or loss of goodwill.
    </p>

    <p>
      Subject to the forgoing, our maximum aggregate liability under or in connection with these Terms (including your use of any Services) whether in contract, tort (including negligence) or otherwise, shall in all circumstances be limited to the total subscription fees which you have paid for use of the Site.
    </p>

    <h2>20.  Events outside our control</h2>

    <p>
      We will not be liable or responsible for any failure to perform, or delay in performance of, any of our obligations under these Terms that is caused by any act or event beyond our reasonable control, including failure of public or private telecommunications networks ('Event Outside Our Control').
    </p>

    <p>
      If an Event Outside Our Control takes place that affects the performance of our obligations under these Terms:
      <ol type="a">
        <li>
         our obligations under these Terms will be suspended and the time for performance of our obligations will be extended for the duration of the Event Outside Our Control; and
       </li>
       <li>
         we will use our reasonable endeavours to find a solution by which our obligations under these Terms may be performed despite the Event Outside Our Control.
       </li>
     </ol>
    </p>

    <h2>21.  Termination</h2>

    <p>
      If we end your rights to use the Site and Services, or you choose to terminate your account:
      
        <li>
          You must stop all activities authorised by these terms, including your use of the Site and any Services.
        </li>
        <li>
          You must delete or remove the Site from all devices in your possession and immediately destroy all copies of the Site which you have and confirm to us that you have done this.
        </li>
        <li>
          We may remotely access your devices and remove the Site from them and cease providing you with access to the Services.
        </li>
      
  </p>

  <h2>22.  Other important terms</h2>

  <p>
    We may transfer our rights and obligations under these Terms to another organisation, but this will not affect your rights or our obligations under these Terms.
  </p>

  <p>
    You may only transfer your rights or obligations under these Terms to another person if we agree in writing.
  </p>

  <p>
    This agreement does not give rise to any rights under the Contracts (Rights of Third Parties) Act 1999 to enforce any term of this agreement.
  </p>

  <p>
    If we fail to insist that you perform any of your obligations under these Terms, or if we do not enforce our rights against you, or if we delay in doing so, that will not mean that we have waived our rights against you and will not mean that you do not have to comply with those obligations. If we do waive a default by you, we will only do so in writing, and that will not mean that we will automatically waive any later default by you.
  </p>

  <p>
    Each of the conditions of these Terms operates separately. If any court or competent authority decides that any of them are unlawful or unenforceable, the remaining conditions will remain in full force and effect.
  </p>

  <p>
    Please note that these Terms, its subject matter and its formation, are governed by English law. You and we both agree that the courts of England and Wales will have non-exclusive jurisdiction. 
  </p>


    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
