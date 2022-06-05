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
<<<<<<< HEAD
              {/* <Link to="/" style={{ textDecoration: "none" }}>
=======
              <Link to="/mainhome/0" style={{ textDecoration: "none" }}>
>>>>>>> 42bc21b8cdb150c40117dc9c4172957cd6dfb544
                <li>
                  <DashboardIcon className="icon" />
                  <span>Dashboard</span>
                </li>
<<<<<<< HEAD
              </Link> */}
              <Link to="/chart" style={{ textDecoration: "none" }}>
                <li className="yspace">
=======
              </Link>
              <Link to="/mainhome/1" style={{ textDecoration: "none" }}>
                <li>
>>>>>>> 42bc21b8cdb150c40117dc9c4172957cd6dfb544
                  <GroupIcon className="icon" />
                  <span>Chart 1</span>
                </li>
              </Link>
<<<<<<< HEAD
              <Link to="/chart2" style={{ textDecoration: "none" }}>
                <li className="yspace">
=======
              <Link to="/mainhome/2" style={{ textDecoration: "none" }}>
                <li>
>>>>>>> 42bc21b8cdb150c40117dc9c4172957cd6dfb544
                  <CategoryIcon className="icon" />
                  <span>Chart 2</span>
                </li>
              </Link>
<<<<<<< HEAD
              <Link to="/chart3" style={{ textDecoration: "none" }}>
                <li className="yspace">
=======
              <Link to="/mainhome/3" style={{ textDecoration: "none" }}>
                <li>
>>>>>>> 42bc21b8cdb150c40117dc9c4172957cd6dfb544
                  <InsertChartOutlinedSharpIcon className="icon" />
                  <span>Chart 3</span>
                </li>
              </Link>
<<<<<<< HEAD
              <Link to="/chart4" style={{ textDecoration: "none" }}>
                <li className="yspace">
=======
              <Link to="/mainhome/4" style={{ textDecoration: "none" }}>
                <li>
>>>>>>> 42bc21b8cdb150c40117dc9c4172957cd6dfb544
                  <NotificationsNoneOutlinedIcon className="icon" />
                  <span>Chart 4</span>
                </li>
              </Link>
              <li className="yspace">
                <WysiwygIcon className="icon" />
                <span>Map</span>
              </li>
            </ul>
          </div>
          <div className="bottom"></div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
