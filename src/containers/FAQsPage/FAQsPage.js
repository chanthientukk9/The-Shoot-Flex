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

import css from './FAQsPage.css';
import image from './FAQs.jpg';

const FAQsPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="FAQs"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'FAQsPage',
        description: 'Frequently Asked Questions',
        name: 'FAQs Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Frequently Asked Questions</h1>
          <img className={css.coverImage} src={image} alt="Fiona & Tristan" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Did you know that over <b>1 trillion</b> photos were taken in 2018 - that's more than <b>114 million</b> per hour!</p>
              <p>How many were you in? </p>
            </div>

            <div className={css.contentMain}>
              <h2>General Questions</h2>

              <p>
                <b>What is The Shoot?</b>
              </p>
              
              <p>
                The Shoot is a marketplace community where local photographers and anyone looking to book a photographer can meet and arrange a photoshoot. 
              </p>
              <p>
                Our mission is to bring high quality yet affordable photography to everyone.  We want to change the perception that a professional photoshoot is something exclusive and prohibitively expensive.    
              </p>
              <p>
                At the same time we want to help local photographers do more of what they do best, shoot!
              </p>

              <p>
                <b>How does The Shoot Work?</b>
              </p>
              <p>
                The Shoot brings together customers and the best local photography talent. Customers can search photographers, compare prices, request to book, and easily pay through our platform.  Then all that’s left to do is shoot!
              </p>

              <p>
                <b>Why should I use The Shoot?</b>
              </p>
              <p>
                For photographers, The Shoot is place to showcase your skills and talent and to be discoverable to people in your local area searching for photographers.  It is free to join up and there is no commission charged which means you get paid your fee in full, everytime. 
              </p>
              <p>
                For customers, there is no better place to find talented affordable local photographers.  Maybe you need to up your game on instagram, or impress recruiters with a new Linkedin headshot.  Whatever you need, The Shoot is the simplest solution for finding your next photographer.
              </p>

              <p>
                <b>Do I need to create an account?</b>
              </p>
              <p>
                You can discover and browse photographers without creating an account. To message a photographer, request a booking, or list your photography services you will be prompted to create a user account.
              </p>
              <p>
                All user accounts require an email verification. You must also add further verification and payment information when setting up your photographer listing.
              </p>

              <p>
                <b>Is it free to list as a photographer?</b>
              </p>
              <p>
                Yes is it.  Listing as a photographer on The Shoot is 100% free.
              </p>

              <p>
                <b>What countries do you support?</b>
              </p>
              <p>
                Currently we are focused on the UK and are based in North London. Our goal is to expand to new markets soon so if we are not currently operating where you are, please drop us a line and let us know where to go next! info@theshoot.io
              </p>

              <p>
                <b>Who Started The Shoot? </b> 
              </p>
              <p>
                The Shoot is the brainchild of partners Tristan and Fiona. Both are tech enthusiasts who have worked in startups and tech companies for several years. They were inspired to create The Shoot when they realised that there was a massive disconnect between the sheer number of talented photographers out there and many people’s general assumption that a professional photo shoot is too expensive for them.  Spoiler: it isn’t!
              </p>

              <h2>Photographers</h2>

              <p>
                <b>How do I list myself as a photographer?</b>
              </p>
              <p>
                Adding yourself as a photographer is simple and takes only a few minutes.  First you will need to create an account by signing up.  Then you will need add your profile and follow the prompts to add your listing.
              </p>

              <p>
                <b>How much is it to list?</b>
              </p>
              <p>
                Zero pounds and zero pence. 
              </p>
              
              <p>
                <b>Do you charge transaction fees for booking?</b>
              </p>
              <p>
                The Shoot charges customers a 15% transaction fee that is added to the quote and is payable by the customer.  The photographer is not charged a fee for the transaction which means that photographers are paid their fee in full.
              </p>

              <p>
                <b>How do I price my photography services on The Shoot?</b>
              </p>
              <p>
                Pricing is entirely up you, the photographer.  It is important to select a pricing model that you feel comfortable with and one that allows customers to quickly get an understanding of your experience and skill level.  Comparing yourself to other photographers on The Shoot might be a good place to start to understand how much you should be charging, but it is also important that you take into account your own circumstances and goals when selecting your price.  Please be sure to factor in any foreseeable costs you might incur such a travel and taxes etc.
              </p>

              <p>
                <b>What should I have in my photography profile?</b>
              </p>
              <p>
                Your photographer listing needs to be an accurate representation of the type of work customers can expect when booking with you.  You will need to provide sample images of your own work, your typical availability, the distance you are willing to travel etc.  
              </p>
              <p>
              Also, you will need to manage customer expectations before they decide to book with you.  You will need to let them know whether or not you will provide edits of their images, the number of final images they can expect and an indication of how long it will take you to supply then final images. 
              </p>

              <p>
                <b>How do I add payment information to ensure I get paid for shoots?</b>
              </p>
              <p>
                Payments via The Shoot are handled by Stripe.  When creating your photography account, you will be able to provide contact details (required by Stripe for verification) and your bank account details via payment settings.  At no point will The Shoot handle payments or your personal bank account details.
              </p>

              <p>
                <b>How do I accept a booking request?</b>
              </p>
              <p>
                You are not required to accept a request and may decline any request. If you take no action to accept or deny a request, the booking request will automatically expire in 24 hours. If you missed the request by accident, you can message the customer directly from their expired request and suggest that they make another request.
              </p>

              <p>
                <b>How long do I have to respond to a booking request?</b>
              </p>
              <p>
                You have 24 hours to either accept or deny a booking request. After 24 hours, the booking request will automatically expire. If you missed the request by accident, you can message the artist directly from their expired request and suggest that they make another request.
              </p>

              <p>
                <b>How do I modify a booking request?</b>
              </p>
              <p>
              Once a booking request is sent, the dates, amount, and details of the booking request cannot be modified.  In order to modify you will need to cancel the request and ask the customer to resend with the correct booking details.
              </p>

              <p>
                <b>How do I require an hour minimum for bookings?</b>
              </p>
              <p>
              If you require an hourly minimum for shoots, you can mention this on your listing in the hourly minimum field. This can be done during your initial listing set up or by editing at any time from your dashboard.
              </p>

              <p>
                <b>How do I charge for additional services?</b>
              </p>
              <p>
                If you offer additional services that are not included in your shoot booking, you can select the option for this to be displayed on your photographer listing. This can be done during your initial listing creation or by editing at any time from your dashboard.
              </p>

              <p>
                <b>Can I require a deposit?</b>
              </p>
              <p>
                We do not currently have a deposit option.  Instead, customers pay upfront and in full on the site at time the booking is accepted by the photographer.  These funds are then held by Stripe until a short time after the shoot has taken place, when the booking fee is paid to photographer.  
              </p>

              <p>
                <b>How can I enforce a cancellation policy?</b>
              </p>
              <p>
                The Shoot currently has a standard cancellation policy for all bookings. It has been designed in cooperation with many photographers and aspires to be fair to both photographers and customers.
              </p>
              
              <p>
                <b>I accepted a booking request?  When will the money for the booking be in my account?</b>
              </p>
              <p>
              The amount that you made from the booking will appear in the bank account that you entered your payout information for within a few business days following the booking date. This time period is typically 7-10 business days for the first transfer and is then quicker for following transfers. This process is handled by Stripe. Rest assured that once you accept a booking request, the person that booked your shoot has been charged for the booking and paid for it. If you have any questions about this at any time, please email us at info@theshoot.io.
              </p>

              <p>
                <b>Do I have to report and pay taxes for The Shoot income?</b>
              </p>
              <p>
                You must also legally report income generated from The Shoot to your business and it is your responsibility to do so. If you are responsible for charging local taxes on services, you must also comply with these regulations.
              </p>

              <h2>Customers:</h2>

              <p>
                <b>How to I request to book a photographer?</b>
              </p>
              <p>
              Booking a photographer is easy on The Shoot and you can do so by creating a user account if you have not done so already. Once you do, you can then select a date and time on an individual photographer listing and click “Request to book”. On the next page, you will be able to enter a message to the photographer regarding the type of shoot you would like, any specific details, requirements, or needs regarding the booking request. You can enter your payment information and send the booking request to the photographer.
              </p>
              <p>You will only be charged if the photographer accepts your booking request. If they do not accept or deny your booking request within 7 days, it will automatically expire and you will not be charged.
              </p>

              <p>
                <b>How does the payment work?</b>
              </p>
              <p>
              When you submit a booking request, a temporary hold is placed on your card until the request is accepted, denied, or it expires. If the request is accepted, your card is charged for the booking request amount. If the booking request is denied or expires, your card is not charged and the amount is no longer held. This time period is dependant on your bank, but holds are typically released by the next business day. Your card will not be charged for denied or expired bookings for any reason. If you have any questions about this, please email us at info@theshoot.io.
              </p>

              <p>
                <b>Is a booking request binding?</b>
              </p>
              <p>
                A booking request is not binding, it is simply letting the photographer know you intend to book. A request is a binding Booking Agreement once it is accepted by the photographer. If you sent a request by mistake, need to modify it, or cancel, we encourage you to immediately notify the photographer using our messaging. The Shoot enforces a strict cancellation policy so please keep this in mind prior to submitting a booking request. If you require assistance with a booking request, you can send us a message at any time to info@theshoot.io.
              </p>

              <p>
                <b>How many requests can I send?</b>
              </p>
              <p>
                You can send multiple requests, but we strongly recommend that you wait to hear back from a studio once you send a request. If the request is urgent, you can also send them a message regarding the booking request directly from their listing.
              </p>

              <p>
                <b>How long will it take for a photographer to respond to my booking request?</b>
              </p>
              <p>
                Photographers are typically very responsive and reply back as soon as they receive a booking request. If you do not hear back from a photographer regarding your request, you can also send them a message regarding the booking request directly from their listing.
              </p>
  
              <p>
                <b>Is there a minimum or maximum booking duration?</b>
              </p>
              <p>
                The Shoot itself does not require an hourly minimum for photographer listings, but we rather let photographers individually indicate their hourly minimums directly on their listing. If they mention an hourly minimum in their description, please note that they might not accept your booking request if it does not comply with their hourly minimum.
              </p>

              <p>
                <b>When is a booking confirmed?</b>
              </p>
              <p>
                A booking is confirmed once indicated as complete by the photographer you have booked.
              </p>

              <p>
                <b>How many final images will I get?</b>
              </p>
              <p>
                The number of final images provided after the shoot is down to each individual photographer and will be outlined on their shoot listing. Please keep in mind that this will vary from photographer to photographer.
              </p>

              <p>
                <b>How long will it take for me to receive my final images?</b>
              </p>
              <p>
                Each photographer will vary in the amount of time it will take them to provide you with final images.  They will outline this on their listing page.
              </p>
              
              <p>
                <b>Will all my images be edited?</b>
              </p>
              <p>
                Each photographer will have their own policy as to how many (if any) of their images they will edit.  The photographers will provide this information on this listing so please be make sure you review this information before placing a booking request.
              </p>

              <p>
                <b>At what point does my photoshoot start?</b>
              </p>
              <p>
                To ensure the smooth running of your photoshoot, please meet your photographer at the designated time and location ready to start shooting.  Ideally, both photographer and customer will arrive early with plenty of time to ensure that the shoot is able to start at the designated time.  Typically, and within reason, the photoshoot duration starts as soon as the shutter release is pressed for the first time.
              </p>

              <p>
                <b>How can I be safe and cautious when using The Shoot?</b>
              </p>
              <p>
                While we do everything that we can to build the most trusted community of photographers to book, we rely on our community of users to help us by being proactive and always reporting any suspicious activity on our platform. 
              </p>

              <p>
                <b>Do I have to communicate on The Shoot?</b>
              </p>
              <p>
                Yes, we ask that you never take communication outside of our platform messaging and never give your contact information prior to entering a Booking Agreement.
              </p>

              <h2>Protection for Customers and Photographers:</h2>

              <p>
                <b>What if the Customer/Photographer does not show up for the shoot?</b>
              </p>
              <p>
                If a photographer fails to show up at the agreed time and place within a reasonable time frame then the customer will be refunded the their full booking fee (minus The Shoot transaction fee).
              </p>
              <p>
                Conversely, if a customer fails to show up for their shoot at the agreed time and place within a reasonable timeframe, then the photographer will be paid in full as per the standing agreement.
              </p>

              <p>
                <b>Who owns the images from our shoot?</b>
              </p>
              <p>
              Typically, rights to the images will remain the property of the photographer.  Images will never belong to The Shoot.  They will remain the intellectual property of the photographer who may at their discretion grant licence to reproduce to the customer.  In most cases the customer will want to share digital copies. The Shoot's preference is to work with photographers who are happy for this to happen.
              </p>

              <p>
                <b>Can the images be shared on social media?</b>
              </p>
              <p>
                Without an agreement otherwise, all photos will remain the intellectual property of the photographer.  In this case it will be at their discretion as to whether or not they are happy for customers to share their images digitally.  Customers should check with their photographer prior to sending a booking enquiry whether or not they are likely to be happy for this to occur  
              </p>

              <p>
                <b>What if the customer is not happy with the final images?</b>
              </p>
              <p>
              The first course of action would be to discuss your concerns with the photographer through The Shoot’s chat function.  If you are both unable to come to an agreement as to the best path forward, please send an email to info@theshoot outlining your concerns and we will attempt to find a solution on a case by case basis.
              </p>

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

export default FAQsPage;
