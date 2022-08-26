import "./home.scss";
import IconSvg from "../../svg";
import Button from "@mui/material/Button";
import { BiSupport } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
const Homepage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="user">
          Yo! Micheal
          <span className="bottom-border line1"></span>
          <span className="bottom-border line2"></span>
        </div>
        <div className="icon-group">
          <BiSupport className="support" />
          <IconSvg icon={"Icon_material-notifications"} size={24} />
        </div>
      </header>
      <div className="card">
        <IconSvg
          icon={"Icon_feather-arrow-right"}
          size={24}
          decor={"card-arrow-right"}
        />
        <h4 className="card-head">KWIKEE CARD BALANCE</h4>
        <h2 className="card-balance">N 300,782</h2>
        <Button variant="contained" color="success" className="card-button">
          WITHDRAW
        </Button>
      </div>
      <div className="action-cards">
        <div className="action-card action-card1">
          <div className="action-cardTitle">
            <div className="bg-icon">
              <IconSvg
                icon={"Group_185"}
                color={"rgba(0, 175, 239, 1)"}
                size={24}
              />
            </div>
            Goals
          </div>
          <h4 className="h4-title">Vehicle</h4>
          <h2 className="h2-title">N 300,782</h2>
        </div>
        <div className="action-card action-card2">
          <div className="action-cardTitle">
            <IconSvg
              icon={"Icon_feather-arrow-right"}
              size={24}
              decor={"card-arrow-right"}
            />
            <div className="bg-icon2">
              <IconSvg icon={"Icon awesome-money-bill"} />
            </div>

            <h3>Apply for Credit</h3>
            <p className="action-card-text">
              reach your goals quicker and easier with savings and investments
              with Kwikee.
            </p>
          </div>
        </div>
      </div>
      <div className="activity-block">
        <div className="activity-header">
          <div className="activity-header-right">
            <IconSvg icon={"Icon_awesome-location-arrow"} size={24} />
            <div>ACTIVITY</div>
          </div>
          <MdDateRange className="calendarIcon" />
        </div>
        <div className="activities">
          <div className="activity activity-1">
            <div className="activity-icon">
              <IconSvg
                icon={"Group_185"}
                color={"rgba(0, 175, 239, 1)"}
                size={24}
              />
            </div>
            <div className="activity-text">Goals Savings KS2229829</div>
            <div className="activity-amount">N 15,000</div>
          </div>
          <div className="activity activity-2">
            <div className="activity-icon">
              <IconSvg
                icon={"Icon ionic-ios-arrow-dropdown-circle"}
                size={24}
              />
            </div>
            <div className="activity-text">Credit YURI8372920</div>
            <div className="activity-amount">N 15,000</div>
          </div>
          <div className="activity activity-3">
            <div className="activity-icon">
              <IconSvg
                icon={"Group_185"}
                color={"rgba(62, 64, 149, 1)"}
                size={24}
              />
            </div>
            <div className="activity-text">Goals Savings KS2229829</div>
            <div className="activity-amount">N 15,000</div>
          </div>
          <div className="activity activity-4">
            <div className="activity-icon"></div>
            <div className="activity-text">Debit YURI8372920</div>
            <div className="activity-amount">N 15,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
