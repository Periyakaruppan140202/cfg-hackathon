import React, { useEffect, useState } from "react";

// import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import "./Login.css";
import { getEndPoint, postEndPoint } from "../../request/request";
// import { useHistory } from 'react-router';
// import { useDispatch } from 'react-redux'
// import { setToken, setAuth } from '../../store/authSlice'

function Login() {
  useEffect(() => {}, []);
  let role = "";
  // const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isStudent, setIsStudent] = useState(true);
  // const history = useHistory();

  async function submitLogin() {
    localStorage.setItem("role", "fellow");
    console.log(email, password);
    window.location.replace("http://localhost:3000/form");
    //     console.log(email,password)
    //      if(email === ""){
    //           alert("Please fill name")
    //           return
    //       }
    //       else if(password === ""){
    //           alert("Please fill name")
    //           return
    //       }
    //       else if(password.length < 6){
    //           alert("Password has to be greater than 7")
    //           return
    //       }
    try {
      const response2 = await postEndPoint("/login", { email, password }, null);
      window.location.replace("http://localhost:3000/form");
      if (response2) {
        if (response2.status === 200) {
          console.log(response2);
          // localStorage.setItem("token", response2.data.token);
          //redirect to home page
          // history.push('/')
        }
      } else {
        //   setIsLoading(false);
        //   setErrMsg("OOPS AN ERROR OCCURED TRY AGAIN LATER!!");
        //   setShowError(true);
      }
    } catch (err) {
      alert("Successfully Logged In", "Fellow (staff)");
    }
  }

  async function submitRegister() {
    console.log(email, password);
    if (document.getElementById("b1")) {
      localStorage.setItem("role", role);
    }
    if (document.getElementById("b2")) {
      localStorage.setItem("role", role);
    }
    window.location.replace("http://localhost:3000/");
    //     console.log(email,password)
    //      if(email === ""){
    //           alert("Please fill name")
    //           return
    //       }
    //       else if(password === ""){
    //           alert("Please fill name")
    //           return
    //       }
    //       else if(password.length < 6){
    //           alert("Password has to be greater than 7")
    //           return
    //       }
    try {
      const response2 = await postEndPoint("/login", { email, password }, null);
      if (response2) {
        if (response2.status === 200) {
          console.log(response2);
        }
      } else {
      }
    } catch (err) {
      alert("Successfully Logged In");
    }
  }

  return (
    <>
      <div className="container" style={{ marginBottom: "140px" }}>
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <div className="text">
              <span className="text-1" style={{ fontSize: "20px" }}>
                The best way to predict your future is to <br /> create it{" "}
              </span>
              <span className="text-2" style={{ fontSize: "25px" }}>
                Let's get started
              </span>
            </div>
          </div>
          <div className="back">
            <img
              className="backImg"
              src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1373&q=80"
              alt=""
            />

            <div className="text">
              <span
                className="text-1"
                style={{ fontSize: "30px", color: "white" }}
              >
                The place where
                <br /> talent
                <br /> meets
                <br /> opportunity
              </span>
              {/* <span className="text-2" style={{fontSize:"25px", color:"#fff"}}>Let's get started</span> */}
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fa fa-envelope-o"></i>
                    <input
                      type="text"
                      value={email}
                      onInput={(event) => {
                        setEmail(event.target.value);
                      }}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fa fa-lock"></i>
                    <input
                      type="password"
                      value={password}
                      onInput={(event) => {
                        setPassword(event.target.value);
                      }}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="text">
                    <a href="/">Forgot password?</a>
                  </div>
                  <div className="button input-box">
                    <div
                      onClick={() => {
                        submitLogin();
                      }}
                    >
                      Submit
                    </div>
                  </div>
                  <div className="text sign-up-text">
                    <label for="flip">Sign now as NGO Official</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">NGO Officials</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="pa pa-id"></i>
                    <input
                      type="text"
                      value={id}
                      onInput={(event) => {
                        setId(event.target.value);
                      }}
                      placeholder="Enter your Employee ID"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fa fa-user"></i>
                    <input
                      type="text"
                      value={name}
                      onInput={(event) => {
                        setName(event.target.value);
                      }}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fa fa-envelope-o"></i>
                    <input
                      type="email"
                      value={email}
                      onInput={(event) => {
                        setEmail(event.target.value);
                      }}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fa fa-lock"></i>
                    <input
                      type="password"
                      value={password}
                      onInput={(event) => {
                        setPassword(event.target.value);
                      }}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="registrationButtons">
                    <div
                      style={{
                        cursor: "pointer",
                        textAlign: "center",
                        backgroundColor: isStudent
                          ? "#7d2ae8"
                          : "rgb(239, 239, 239)",
                        marginTop: "2%",
                        border: "none",
                        outline: "none",
                        borderRadius: "5px",
                        fontWeight: "bolder",
                        width: "14rem",
                      }}
                      onClick={() => {
                        setIsStudent(true);
                      }}
                    >
                      <span
                        className="bn31span "
                        id="b1"
                        style={{
                          color: isStudent ? "#fff" : "#7d2ae8",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          localStorage.setItem("role", "manager");
                        }}
                      >
                        Manager
                      </span>
                    </div>
                    <div
                      style={{
                        cursor: "pointer",
                        textAlign: "center",
                        backgroundColor: !isStudent
                          ? "#7d2ae8"
                          : "rgb(239, 239, 239)",
                        marginTop: "2%",
                        border: "none",
                        outline: "none",
                        borderRadius: "5px",
                        fontWeight: "bolder",
                        width: "18rem",
                      }}
                      onClick={() => {
                        setIsStudent(false);
                      }}
                    >
                      <span
                        className="bn31span "
                        id="b2"
                        style={{
                          color: !isStudent ? "#fff" : "#7d2ae8",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          localStorage.setItem("role", "associate");
                        }}
                      >
                        Associate
                      </span>
                    </div>
                  </div>
                  <div className="button input-box">
                    <div
                      onClick={() => {
                        submitRegister();
                      }}
                    >
                      Submit
                    </div>
                  </div>
                  <div className="text sign-up-text">
                    Already have an account? <label for="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
