import React, { useEffect, useRef } from "react";

import heroimg from "../../Images/heroimg.png"
import product from "../../Images/product.png"
import Android from "../../Images/Android.jpg"
import iOS from "../../Images/iOS.png"
import demovideo from "../../Images/demovideo.mp4"
import "./Home.css";
import Testimonial from "../Testimonial/Testimonial";
import Support from "../Support/Support";
import Contact from "../Contact/Contact";
import ScrollToTop from "../Scroll/ScrollToTop";
function Home() {
    const videoRef = useRef(null);

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // ▶ Resume video when it comes into view
        video.play().catch(() => {});
        video.muted = false; // 🔊 try to unmute
      } else {
        // ⏸ Pause video when it goes out of view
        video.pause();
        video.muted = true;  // 🔇 mute again
      }
    },
    { threshold: 0.6 }
  );

  observer.observe(video);
  return () => observer.disconnect();
}, []);



  
  return (
    <>
    {/* -------------------------------------------hero-section--------------------------------------- */}
    <section id="hero" className="hero-section">
      <div className="hero-wrapper">

        {/* Left Content */}
        <div className="hero-content">
          <h5 className="hero-app-name">BellyButton</h5>

          <h1 className="hero-title">
            Turn your friends into <br />
            <span>your camera crew.</span>
          </h1>

          <p className="hero-description">
            BellyButton lets everyone at your event share photos in real time.
            One space for every memory, before the moment fades.
          </p>

          <div className="hero-actions">
  <a href="#get-started" className="btn hero-btn">
    Get Started
  </a>
</div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img
            src={heroimg}
            alt="Event photo sharing app preview"
          />
        </div>

      </div>
    </section>
{/* -------------------------------------------------------Product----------------------------------------- */}
   <section id="product" className="product-section">

  {/* Center Heading */}
  <div className="product-header">
    <h2 className="product-main-title">Meet BellyButton</h2>
  </div>

  <div className="product-wrapper">

    {/* LEFT — Image */}
    <div className="product-visual">
      <div className="visual-image">
        <img
          src={product}
          alt="BellyButton live event photo gallery"
        />
      </div>
    </div>

    {/* RIGHT — Content */}
    <div className="product-content">

      <h3 className="section-title">
        All captured moments<span> in one place.</span>
      </h3>

      <p className="section-description">
        BellyButton is a private event based photo sharing platform where Crew
        upload photos in real time and create a single organized gallery in original
         high quality without loss of resolution.
      </p>

      {/* FEATURE CARDS*/}
      <div className="feature-cards no-icons">
  <div className="feature-card">
    <strong>Event Director Access</strong>
    <p>Only the event director can manage and securely share uploaded photos.</p>
  </div>      

  <div className="feature-card">
    <strong>Real-Time Photo Uploads</strong>
    <p>Crew securely upload photos instantly as the event happens.</p>
  </div>

  <div className="feature-card">
    <strong>Single Organized Gallery</strong>
    <p>All photos are collected into one clean, organized event gallery.</p>
  </div>

  <div className="feature-card">
    <strong>Original Pixel Quality</strong>
<p>Photos retain original pixel resolution without compression.</p>
  </div>

</div>


    </div>

  </div>
</section>

{/* ----------------------------------------------------why us---------------------------------------- */}
<section id="why-us" className="why-section">

  <div className="why-header">
    <h2 className="why-title">Why BellyButton</h2>
    <p className="why-subtitle">
      Designed for real moments, not message overload.
    </p>
  </div>

  <div className="why-content">

    {/* LEFT SIDE — TEXT CONTENT */}
    <div className="why-left">

      <div className="why-line"></div>
      <div className="why-item">
        <div className="why-icon">
          <i className="fa-solid fa-calendar-days"></i>
        </div>
        <div className="why-text">
          <h4>Schedule event time</h4>
          <p>Event Directors set a defined start and end time.</p>
        </div>
      </div>

      <div className="why-item">
        <div className="why-icon">
          <i className="fa-solid fa-layer-group"></i>
        </div>
        <div className="why-text">
          <h4>No scattered photos</h4>
          <p>All memories live in one shared gallery instead of multiple chats.</p>
        </div>
      </div>

      <div className="why-item">
        <div className="why-icon">
          <i className="fa-solid fa-clock"></i>
        </div>
        <div className="why-text">
          <h4>Time-Based sharing</h4>
          <p>Crew upload photos instantly as the event happens.</p>
        </div>
      </div>

      <div className="why-item">
        <div className="why-icon">
          <i className="fa-solid fa-lock"></i>
        </div>
        <div className="why-text">
          <h4>Private Event Access</h4>
          <p>Invite-only access keeps your event photos secure.</p>
        </div>
      </div>

      <div className="why-item">
        <div className="why-icon">
          <i className="fa-solid fa-cloud-arrow-down"></i>
        </div>
        <div className="why-text">
          <h4>Original quality downloads</h4>
          <p>Download photos anytime in original high quality.</p>
        </div>
      </div>

      

      <div className="why-item">
        <div className="why-icon">
          <i className="fa-solid fa-share-nodes"></i>
        </div>
        <div className="why-text">
          <h4>Share on social platforms</h4>
          <p>Share moments publicly while keeping gallery private.</p>
        </div>
      </div>

    </div>

    {/* RIGHT SIDE — IMAGE */}
    <div className="why-right">
  <video
    ref={videoRef}        // 👈 ADD THIS
    src={demovideo}
    autoPlay
    loop
    muted                 // required for autoplay
    controls
    playsInline
    className="app-video"
    controlsList="nodownload noplaybackrate noremoteplayback"
    disablePictureInPicture
  />
</div>






  </div>
</section>

    {/* ---------------------------------------------------how it works-------------------------------------- */}
     <section id="how-it-works" className="flow-section">

      <div className="flow-header">
        <h2 className="flow-title">How It Works</h2>
        <p className="flow-subtitle">
          A simple flow designed for everyone at your event.
        </p>
      </div>

      <div className="flow-steps">

        <div className="flow-step">
          <div className="flow-icon">
            <i className="fa-solid fa-calendar-plus"></i>
          </div>
          <span className="flow-number">01</span>
          <h4>Create the Shoot</h4>
          <p>Event Directors set a defined start and end time.</p>
        </div>

        <div className="flow-step">
          <div className="flow-icon">
            <i className="fa-solid fa-link"></i>
          </div>
          <span className="flow-number">02</span>
          <h4>Invite Friends</h4>
          <p>
            Friends are invited as crew through a private link.
          </p>
        </div>

        

        <div className="flow-step">
          <div className="flow-icon">
            <i className="fa-solid fa-camera"></i>
          </div>
          <span className="flow-number">03</span>
          <h4>Accept & Upload Photos</h4>
          <p>Crew accept the invite and upload captured photos.</p>
        </div>

        <div className="flow-step">
          <div className="flow-icon">
            <i className="fa-solid fa-images"></i>
          </div>
          <span className="flow-number">04</span>
          <h4>View gallery</h4>
          <p>
            All photos are visible only to the Event Director.
          </p>
        </div>

        <div className="flow-step">
          <div className="flow-icon">
            <i className="fa-solid fa-share-nodes"></i>
          </div>
          <span className="flow-number">05</span>
          <h4>Download and share</h4>
          <p>Download and share photos without pixel loss.</p>
        </div>

      </div>
    </section>

    <Testimonial/>
    <Support/>
    <Contact/>
{/* --------------------------------------------------------Get Started--------------------------------- */}
     <section id="get-started" className="getstart-section">
  <div className="getstart-wrapper">

    <h2 className="getstart-title">Start Sharing Moments</h2>

    <p className="getstart-subtitle">
      Download the BellyButton app and create your event. <br/>
      Available on Android and iOS.
    </p>

    <div className="store-buttons">

      {/* Google Play */}
      <a
        href="#playstore"
        className="store-btn"
        aria-label="Get it on Google Play"
      >
        <img src={Android} alt="Google Play" className="store-icon" />
        <div className="store-text">
          <span>Get it on</span>
          <strong>Google Play</strong>
        </div>
      </a>

      {/* App Store */}
      <a
        href="#appstore"
        className="store-btn"
        aria-label="Download on the App Store"
      >
        <img src={iOS} alt="App Store" className="store-icon" />
        <div className="store-text">
          <span>Download on the</span>
          <strong>App Store</strong>
        </div>
      </a>

    </div>

    <p className="platform-note">
      Compatible with Android & iOS devices
    </p>

  </div>
</section>

<ScrollToTop/>

    </>
  );
}

export default Home;
