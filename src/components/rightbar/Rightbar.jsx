import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Anindya Nandi</b> and <b>3 ohters</b> have birthday today wish
            them
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="righbatTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Julia Jenson</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Julia Jenson</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Julia Jenson</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Julia Jenson</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Julia Jenson</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Julia Jenson</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Julia Jenson</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
