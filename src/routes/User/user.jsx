import React from "react";
import "./user.scss";
import IconSvg2 from "../../svg2";
import Img from "../../asset/profileImage.jpg";
import { MdModeEdit } from "react-icons/md";
const User = () => {
  return (
    <div className="user">
      <div className="header">
        <img src={Img} className="header-photo" />
        <div className="header-data">
          <h3 className="hello">Hello</h3>
          <h1 className="name">Adeseyi Bimbo</h1>
        </div>
        <div className="edit">
          <MdModeEdit className="pen" />
        </div>
      </div>
      <div className="user-nav">
        <div className="user-nav-item user-nav-item1">
          <IconSvg2 icon={"Path_325"} size={40} decor={"headIcon1"} />
          <div>settings</div>
        </div>
        <div className="user-nav-item user-nav-item2">
          <IconSvg2
            icon={"noun-transaction-1198199"}
            size={40}
            decor={"headIcon"}
          />
          <div>Transactions</div>
        </div>
        <div className="user-nav-item user-nav-item3">
          <IconSvg2 icon={"Path_288"} size={40} decor={"headIcon"} />
          <div>Loan Documents</div>
        </div>
      </div>
      <div className="documents">
        <div className="document document1">
          <IconSvg2 icon={"Icon_material-home"} size={20} />
          <div className="document-text">Home Settings</div>
        </div>
        <div className="document document2">
          <IconSvg2 icon={"noun-accounting-4619554"} size={20} />
          <div className="document-text">Account Settings</div>
        </div>
        <div className="document document3">
          <IconSvg2 icon={"Path_321"} size={20} />
          <div className="document-text">Cards & Bank Account</div>
        </div>
        <div className="document document4">
          <IconSvg2 icon={"Path_322"} size={20} />
          <div className="document-text">Change Password</div>
        </div>
        <div className="document document5">
          <IconSvg2 icon={"Path_323"} size={20} />
          <div className="document-text">Home Settings</div>
        </div>
        <div className="document document6">
          <IconSvg2 icon={"Path_324"} size={20} />
          <div className="document-text">Sign Out</div>
        </div>
      </div>
      <div className="footer">Turn on Dark Mode</div>
    </div>
  );
};

export default User;
