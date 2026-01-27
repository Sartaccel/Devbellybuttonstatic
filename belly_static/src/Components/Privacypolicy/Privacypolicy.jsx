import React from "react";
import "./Privacypolicy.css";

const Privacypolicy = () => {
  return (
    <div className="privacy-container py-4">
      <h1>Privacy Policy</h1>
      <p>
        <strong>BellyButton (Onsite IT Advisors LLC)</strong>
      </p>
      <p>Effective Date: 23 January 2026</p>

      <p>
        BellyButton (“we”, “our”, “us”) is operated by Onsite IT Advisors LLC.
        This Privacy Policy explains how we collect, use, store, and protect
        your information when you use the BellyButton website and mobile
        application (“Services”).
      </p>

      <h3>1. Information We Collect</h3>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, mobile number, email
          address, and other details you provide during registration.
        </li>
        <li>
          <strong>Account & Login Information:</strong> One-Time Passwords
          (OTP), login history, and authentication details.
        </li>
        <li>
          <strong>Event Information:</strong> Details of events you create, are
          invited to, or participate in.
        </li>
        <li>
          <strong>Device & Usage Information:</strong> IP address, device type,
          operating system, and app usage logs for security and analytics.
        </li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <ul>
        <li>Create and manage your BellyButton account.</li>
        <li>
          Send transactional notifications such as login OTP verification codes.
        </li>
        <li>Send event invitations and event-related updates.</li>
        <li>Provide customer support and respond to your queries.</li>
        <li>
          Improve app performance, reliability, and overall user experience.
        </li>
        <li>Maintain security and prevent fraud or unauthorized access.</li>
      </ul>

      <h3>3. SMS Messaging Policy (A2P 10DLC Compliance)</h3>
      <p>
        If you provide your mobile number and opt in, BellyButton may send you
        transactional SMS messages, including:
      </p>
      <ul>
        <li>Login verification OTP.</li>
        <li>Event invitations and event-related updates.</li>
        <li>Account and service-related notifications.</li>
      </ul>
      <p>
        Message frequency may vary based on user activity. Message and data
        rates may apply.
      </p>
      <div className="sms-actions">
  <strong>Opt-Out:</strong>
  <span>Reply STOP to opt out at any time.</span>

  <strong>Help:</strong>
  <span>Reply HELP for assistance.</span>
</div>

      <p>
        We do not sell, rent, or share your phone number with third parties for
        marketing purposes.
      </p>

      <h3>4. How We Share Information</h3>
      <p>
        We do not sell your personal data. We may share information only• With
        trusted service providers (such as SMS delivery platforms) to operate
        our Services. • When required by law or legal process. • To protect the
        rights, safety, and security of our users and Services.
      </p>

      <h3>5. Data Retention</h3>
      <p>
        We retain personal data only for as long as necessary to provide the
        Services, comply with legal obligations, resolve disputes, and enforce
        our agreements.
      </p>

      <h3>6. Security</h3>
      <p>
        We use reasonable technical and organizational safeguards to protect
        your information. However, no system is fully secure, and we cannot
        guarantee complete security.
      </p>

      <h3>7. Your Choices & Rights</h3>
      <p>
        {" "}
        You can request access, correction, or deletion of your account
        information by contacting us. You may opt out of SMS messages at any
        time by replying STOP.
      </p>

      <h3>8. Changes to This Privacy Policy</h3>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date.
      </p>

      <h3>9. Contact Us</h3>
     <p>
  BellyButton / Onsite IT Advisors LLC <br />
  Website:{" "}
  <a href="https://www.bellybutton.global" target="_blank" rel="noopener noreferrer">
    https://www.bellybutton.global
  </a>
  <br />
  Email: support@bellybutton.global
</p>

    </div>
  );
};

export default Privacypolicy;
