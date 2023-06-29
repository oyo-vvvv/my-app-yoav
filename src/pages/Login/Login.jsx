import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/slices/auth.slice";

const Login = () => {
    const navigate = useNavigate()
const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorAuth, setErrorAuth] = useState(false);

  const handleSubmit = (e) => {
    console.log("onsub work");
    e.preventDefault();
    axios
      .get('https://react1-7a0609.appdrag.site/api/checkUsers/checkUserCv', {
        params: {
          email: email,
          password: password,
          AD_PageNbr: "1",
          AD_PageSize: "500",
        },
      })
      .then(function (response) {
        if (response.data.Table.length === 0) {
            setErrorAuth(true)
        }else {
            setErrorAuth(false)
            localStorage.setItem('userToken', response.data.Table[0].token);
            dispatch(setAuth(response.data.Table[0]))
            navigate("/Portfolio")
        }
      });
  };

  const handleEmail = (e) => {
    
    setEmail(e.target.value)
}

const handlePassword = (e) => {

   setPassword(e.target.value)
}













  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleActive = () => {
    setIsActive(true);
  };

  const handleInactive = () => {
    setIsActive(false);
  };

  return (
    <div>
      <div
        className={`container ${isHovered ? "hovered" : ""} ${
          isActive ? "active" : ""
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleActive}
        onMouseUp={handleInactive}
      >
        <div className="top"></div>
        <div className="bottom"></div>
        <div className={`center ${isHovered || isActive ? "visible" : ""}`}>
          <form onSubmit={handleSubmit}>
            <h2>Please Type Something</h2>
            <input className="inputLog" type="email" placeholder="Email" value={email} onChange={handleEmail} required/>
            <input
              className="inputLog"
              type="password"
              placeholder="Password"
              value={password} onChange={handlePassword} required
            />
            <button class="button-8" role="button" type="submit">
              Things are what they look like
            </button>
            { errorAuth &&
                    <p className="error">Try "Email@example.com", "Password"</p>
                     }
            <h2>&nbsp;</h2>
            
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
