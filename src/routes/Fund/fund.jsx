import { Button } from "@mui/material";
import React from "react";
import "./fund.scss";
import IconSvg from "../../svg";
import { BiHide } from "react-icons/bi";
import { RiInformationLine } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
const Fund = () => {
  return (
    <div className="fund">
      <div className="navigation">
        <IoIosArrowBack className="navigation-back" />
        <IconSvg icon={"Icon_material-notifications"} size={24} />
      </div>
      <div className="header">
        <div className="headerLine1">
          <div className="headerTitle">KWIK LITE</div>
          <RiInformationLine className="infoIcon" />
        </div>
        <div className="headerLine2">
          <div className="headerLine2-right">
            <h1 className="header-amount">N 300,782</h1>
            <BiHide className="hide" />
          </div>
          <TiPlus className="plus" />
        </div>
      </div>
      <div className="h2-title">FUND KWIKLITE</div>
      <p className="title-text">
        Your Kwiklite is directly connected to a bank account which could be
        funded using the above Wema Bank Account Number.
      </p>
      <div className="acc_no">
        <h3 className="bankName">WEMA BANK</h3>
        <div className="acct_no">
          <MdOutlineContentCopy className="copyIcon" /> 7851472891
        </div>
      </div>
      <div className="info">
        <div>KWIK MAX</div>
        <RiInformationLine className="infoIcon" />
      </div>
      <div className="bar bar1">
        <div className="bar-right">
          <h2 className="h2-title">VEHICLE</h2>
          <h1 className="amount">N300,782</h1>
          <p className="text">₦20,000/month</p>
        </div>
        <div className="bar-left">2/12 Months</div>
        <Button variant="contained" color="success" className="barbutton">
          Matures in 310 days
        </Button>
      </div>
      <div className="info">
        <div>Goals</div>
        <RiInformationLine className="infoIcon" />
      </div>
      <div className="bar bar2">
        <div className="bar-right">
          <h2 className="h2-title">SCHOOL FEES</h2>
          <h1 className="amount">N300,782</h1>
          <p className="text">₦50,000/month</p>
        </div>
        <div className="bar-left">1/3 Months</div>
        <Button variant="contained" color="success" className="barbutton">
          Matures in 40 days
        </Button>
      </div>
    </div>
  );
};

export default Fund;
