import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'
const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadCrumbs">
          <Link to="/messages">Messages</Link> John doe
        </span>
        <div className="messages">
          <div className="item">
            <img src="./../img/dp.jpg" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quas nulla nostrum dolorem voluptas quis officiis totam perspiciatis nesciunt vitae libero incidunt rem tempora expedita praesentium eius ea reprehenderit saepe amet veritatis adipisci in, rerum dolor dolores! Sunt maiores ducimus totam at. Perspiciatis, error velit.</p>
          </div>
          <div className="item own">
            <img src="./../img/dp.jpg" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quas nulla nostrum dolorem voluptas quis officiis totam perspiciatis nesciunt vitae libero incidunt rem tempora expedita praesentium eius ea reprehenderit saepe amet veritatis adipisci in, rerum dolor dolores! Sunt maiores ducimus totam at. Perspiciatis, error velit.</p>
          </div>
          <div className="item">
            <img src="./../img/dp.jpg" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quas nulla nostrum dolorem voluptas quis officiis totam perspiciatis nesciunt vitae libero incidunt rem tempora expedita praesentium eius ea reprehenderit saepe amet veritatis adipisci in, rerum dolor dolores! Sunt maiores ducimus totam at. Perspiciatis, error velit.</p>
          </div>
          <div className="item own">
            <img src="./../img/dp.jpg" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quas nulla nostrum dolorem voluptas quis officiis totam perspiciatis nesciunt vitae libero incidunt rem tempora expedita praesentium eius ea reprehenderit saepe amet veritatis adipisci in, rerum dolor dolores! Sunt maiores ducimus totam at. Perspiciatis, error velit.</p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder='Write a message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message