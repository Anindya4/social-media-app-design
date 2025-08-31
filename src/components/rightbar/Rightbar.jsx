import "./rightbar.css"
import { Users } from "../../dummyData";
import Online from "../online/Online";


export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="/assets/gift.png"
            alt="birthdayImg"
          />
          <span className="birthdayText">
            <b>Anindya Nandi</b> and <b>3 ohters</b> have birthday today wish
            them
          </span>
        </div>
        <img src="/assets/b_logo.png" alt="adlogo" className="rightbarAd" />
        <h4 className="righbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} users={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoVal">Jhragram</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoVal">India</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship Status: </span>
            <span className="rightbarInfoVal">Single</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Profession: </span>
            <span className="rightbarInfoVal">Student</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Followers</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt="Following user 1"
              className="righbarFollowingImg"
            />
            <span className="rightbarFollowingName">Arpan Khamrui</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt="Following user 2"
              className="righbarFollowingImg"
            />
            <span className="rightbarFollowingName">Arpan Khamrui</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt="Following user 3"
              className="righbarFollowingImg"
            />
            <span className="rightbarFollowingName">Arpan Khamrui</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt="Following user 4"
              className="righbarFollowingImg"
            />
            <span className="rightbarFollowingName">Arpan Khamrui</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt="Following user 5"
              className="righbarFollowingImg"
            />
            <span className="rightbarFollowingName">Arpan Khamrui</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt="Following user 6"
              className="righbarFollowingImg"
            />
            <span className="rightbarFollowingName">Arpan Khamrui</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
