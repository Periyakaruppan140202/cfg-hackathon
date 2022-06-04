import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import CategoryIcon from "@mui/icons-material/Category";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { getSetToken, getUserInfo } from "../../redux/action/userAction";
import { useState } from "react";

const Sidebar = () => {
  // const dispatch = useDispatch();/
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onLogout = () => {
    // dispatch(getSetToken(""));
    // dispatch(getUserInfo({}));
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      {/* <button
        style={{
          height: "50px",
          width: "20px",
          background: "white",
          border: "none",
          position: "absolute",
          outline: "none",
          background: "transparent",
          color: "blueviolet",
          zIndex: "+20",
        }}
        onClick={() => {
          show ? setShow(false) : setShow(true);
        }}
      >
        <MenuIcon />
      </button> */}
      {show ? (
        <div className="sidebar">
          <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="Admin_logo">Anubhuti</span>
            </Link>
          </div>
          <hr />
          <div className="center">
            <ul>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                  <DashboardIcon className="icon" />
                  <span>Dashboard</span>
                </li>
              </Link>
              <Link to="/journalists" style={{ textDecoration: "none" }}>
                <li>
                  <GroupIcon className="icon" />
                  <span>Chart 1</span>
                </li>
              </Link>
              <Link to="/allblogs" style={{ textDecoration: "none" }}>
                <li>
                  <CategoryIcon className="icon" />
                  <span>Chart 2</span>
                </li>
              </Link>
              <Link to="/statistics" style={{ textDecoration: "none" }}>
                <li>
                  <InsertChartOutlinedSharpIcon className="icon" />
                  <span>Chart 3</span>
                </li>
              </Link>
              <Link to="/notification" style={{ textDecoration: "none" }}>
                <li>
                  <NotificationsNoneOutlinedIcon className="icon" />
                  <span>Chart 4</span>
                </li>
              </Link>
              <Link to="/acceptedList" style={{ textDecoration: "none" }}>
                <li>
                  <ThumbUpOffAltIcon className="icon" />
                  <span>Chart 5</span>
                </li>
              </Link>
              <li>
                <WysiwygIcon className="icon" />
                <span>Map</span>
              </li>
              {/* <li>
                <VpnKeyIcon className="icon" />
                <span>Logs</span>
              </li>
              <li>
                <SettingsIcon className="icon" />
                <span>Settings</span>
              </li>
              <Link to="/adminprofile" style={{ textDecoration: "none" }}>
                <li>
                  <AccountCircleOutlinedIcon className="icon" />
                  <span>Profile</span>
                </li>
              </Link> */}
              {/* <li>
                <LogoutOutlinedIcon className="icon" />
                <div>
                  <span onClick={handleClickOpen}>Log out</span>
                  <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                  >
                    <DialogTitle id="responsive-dialog-title">
                      {"Logout"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Are you sure that you want to Exit from the Panel?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus onClick={handleClose}>
                        No
                      </Button>
                      <Button onClick={onLogout} autoFocus>
                        Yes
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </li> */}
            </ul>
          </div>
          <div className="bottom"></div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
