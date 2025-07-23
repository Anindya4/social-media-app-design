import "./online.css"

export default function Online({users}) {
  return (
      <li className="rightbarFriend">
        <div className="rightbarProImgContainer">
          <img
            src={users.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarFriendName">{users.username}</span>
      </li>
  );
}
