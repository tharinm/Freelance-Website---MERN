import React from "react";
import Features from "../../components/Featured/Features";
import TrustedBy from "../../components/trusted/TrustedBy";
import Slide from "../../components/Slide/Slide";
import'./Home.scss' 

export default function Home() {
  return (
    <div className="home">
      <Features />
      <TrustedBy />
      <Slide />

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you will pay upfront. Your payment is not
              released until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </div>
          <div className="item">
            <video
              src="https://player.vimeo.com/external/297888102.sd.mp4?s=b9b76b12df9767bcc48ab7e33c3c9c5a5f38a269&profile_id=164&oauth2_token_id=57447761"
              controls
            />
          </div>
        </div>
      </div>


      

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Freelance Buisness</h1>
            <h1>A buinsess solution design for team</h1>
            <p>Empowering freelancers and businesses to succeed together.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get more done with our network of skilled freelancers.
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              From design to development, we have the right freelancer for you.
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connecting businesses with top-rated freelancers.
            </div>
            <button>Explore Our Buisness</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
