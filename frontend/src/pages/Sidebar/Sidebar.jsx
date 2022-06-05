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
import { useNavigate } from "react-router-dom";
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
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      {show ? (
        <div className="sidebar">
          <div className="center">
            <ul>
              <li style={{ marginTop: "30px" }}>
                <span>Select a Graph</span>
              </li>
              <Link to="/mainhome/1" style={{ textDecoration: "none" }}>
                <li className="yspace">
                  <GroupIcon className="icon" />
                  <span>Monthly</span>
                </li>
              </Link>
              <Link to="/mainhome/2" style={{ textDecoration: "none" }}>
                <li className="yspace">
                  <CategoryIcon className="icon" />
                  <span>Attendance</span>
                </li>
              </Link>
              <Link to="/mainhome/3" style={{ textDecoration: "none" }}>
                <li className="yspace">
                  <InsertChartOutlinedSharpIcon className="icon" />
                  <span>Involvement</span>
                </li>
              </Link>
              <Link to="/mainhome/4" style={{ textDecoration: "none" }}>
                <li className="yspace">
                  <NotificationsNoneOutlinedIcon className="icon" />
                  <span>Recruitment</span>
                </li>
              </Link>
              {/* <li className="yspace">
                <WysiwygIcon className="icon" />
                <span>Map</span>
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
