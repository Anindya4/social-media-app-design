import "./friends.css"

export default function Friends({users}) {
  return (
    <li className="sidebarFriend">
      <img 
      src={users.profilePicture} 
      alt="" className="sidebarFriendImg" />
      <span 
      className="sidebarFrinedName">
        {users.username}
        </span>
    </li>
  );
}
