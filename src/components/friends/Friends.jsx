import "./friends.css"

export default function Friends({users}) {
  return (
    <li className="sidebarFriend">
      <img
        src={users.profilePicture}
        alt="Sidebar images for friends"
        className="sidebarFriendImg"
      />
      <span className="sidebarFrinedName">{users.username}</span>
    </li>
  );
}
