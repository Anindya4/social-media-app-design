import "./online.css"

export default function Online({users}) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProImgContainer">
        <img
          src={users.profilePicture}
          alt="profile pic for rightbar"
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarFriendName">{users.username}</span>
    </li>
  );
}
