import React from 'react'
import "./Gig.scss"
import { Slider } from 'infinite-react-carousel'
const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className="breadCrumps">Fiver Graphics and design</span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img src="./../img/dp.jpg" alt="" className='pp' />
            <span>John doe</span>
            <div className="stars">
              <img src="./../img/star.png" alt="" />
              <img src="./../img/star.png" alt="" />
              <img src="./../img/star.png" alt="" />
              <img src="./../img/star.png" alt="" />
              <img src="./../img/star.png" alt="" />

              <span>5</span>
            </div>
          </div>
          <Slider slideToShow={1} arrowScroll={1} className="slider">
            <img src="https://news.artnet.com/app/news-upload/2023/02/Julian-van-Dieken_A-Girl-With-Glowing-Earrings-.png" alt="" />
            <img src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" alt="" />
            <img src="https://news.ubc.ca/wp-content/uploads/2023/08/AdobeStock_559145847.jpeg" alt="" />
          </Slider>
          <h2>About this gig</h2>
          <p>
            Hi, I will make a Stop Motion Animator for your idea, we can agree on which materials and technics can be implemented.
            What you get:
            Professional sculptures and designs for the animation.
            Flexibility in techniques and materials.
            Strong professional Art Background.
            Custom High-Quality Scenarios and Characters.
            Smooth animations.
            Continuous communication during the creative process.

            What's included:
            High-Quality Scenarios.
            Handmade characters and assets.
            Music (Copyright free, not custom made).
            Shoot with a profesional camera.


            About the final video:
            12 Frames per second (24 available as extra)
            MP4 Video.

            *Only the final video file will be delivered.

            *The sculptures, characters, scenarios, and asset WILL NOT BE DELIVERED
          </p>
          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img src="./../img/dp.jpg" alt="" />
              <div className="info">
                <span>John doe</span>
                <div className="stars">
                  <img src="./../img/star.png" alt="" />
                  <img src="./../img/star.png" alt="" />
                  <img src="./../img/star.png" alt="" />
                  <img src="./../img/star.png" alt="" />
                  <img src="./../img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <div className="desc">Mexico</div>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <div className="desc">Feb 2021</div>
                </div>
                <div className="item">
                  <span className="title">Avg.response Time</span>
                  <div className="desc">3 Hours</div>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <div className="desc">1 day</div>
                </div>
                <div className="item">
                  <span className="title">From</span>
                  <div className="desc">Mexico</div>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <div className="desc">English, spanish</div>
                </div>
              </div>
              <hr />
              <p>Hi, I'm Adrian Venti a Visual Artist and Animator.
                I earned several rewards and prizes with my participation in many art events including Facebook, YouTube, and official events.
                Share with me your needs or ideas and together we will find the best result.</p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d1e35f4e9f5bbde371b0ad43cb0cba1f-1700881361997/2374f73f-3856-45be-8d27-2ac8b31e40d1.png" alt="" className='pp' />
                <div className="info">
                  <span>John doe</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United states</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="./../img/star.png" alt="" />
                <img src="./../img/star.png" alt="" />
                <img src="./../img/star.png" alt="" />
                <img src="./../img/star.png" alt="" />
                <img src="./../img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>Amazing work and he added lots of things for free, it looks amazing and I'll definitely be posting it to my social media. Very communicative, respectful and generous. Great job. I appreciate you pushing yourself for me. Much respect.</p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="./../img/like.png" alt="" />
                <span>Yes</span>
                <img src="./../img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d1e35f4e9f5bbde371b0ad43cb0cba1f-1700881361997/2374f73f-3856-45be-8d27-2ac8b31e40d1.png" alt="" className='pp' />
                <div className="info">
                  <span>John doe</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United states</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="./../img/star.png" alt="" />
                <img src="./../img/star.png" alt="" />
                <img src="./../img/star.png" alt="" />
                <img src="./../img/star.png" alt="" />
                <img src="./../img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>Amazing work and he added lots of things for free, it looks amazing and I'll definitely be posting it to my social media. Very communicative, respectful and generous. Great job. I appreciate you pushing yourself for me. Much respect.</p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="./../img/like.png" alt="" />
                <span>Yes</span>
                <img src="./../img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d1e35f4e9f5bbde371b0ad43cb0cba1f-1700881361997/2374f73f-3856-45be-8d27-2ac8b31e40d1.png" alt="" className='pp' />
                <div className="info">
                  <span>John doe</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United states</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="./../img/star.png" alt="" />
                <img src="./../img/star.png" alt="" />
                <img src="./../img/star.png" alt="" />
                <img src="./../img/star.png" alt="" />
                <img src="./../img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>Amazing work and he added lots of things for free, it looks amazing and I'll definitely be posting it to my social media. Very communicative, respectful and generous. Great job. I appreciate you pushing yourself for me. Much respect.</p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="./../img/like.png" alt="" />
                <span>Yes</span>
                <img src="./../img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>₹ 3000</h2>
          </div>
          <p>I will create a unique quality AI generated image based on a description that you give me</p>
          <div className="details">
            <div className="item">
              <img src="./../img/clock.png" alt="" />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <img src="./../img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig