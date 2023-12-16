import React, { useEffect, useState } from "react";
import "./navbar.css";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { getUserinfoByPath } from "../../utils"
const Navbar = ({ hamburgerClicked }) => {
  const location = useLocation();
  const hamburgerHandler = () => {
    hamburgerClicked();
  };

  const [userInfo, setUserInfo] = useState(getUserinfoByPath(location.pathname));
  
  useEffect(() => {
    setUserInfo(getUserinfoByPath(location.pathname))
  }, [location.pathname]);
  return (
    <div className="navbar-container bg-navbar">
      <img src="/images/VTI_Logo_Turquoise_v2.png" alt="logoImage" className="navbar-logo-image" />
      <div className="navbar-userdata">
        <div>
          <p className="font-default font-sans text-sm \">{userInfo?.name}</p>
          <p className="font-default font-sans text-sm">({userInfo?.role})</p>
        </div>
        <svg
          className="font-default"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 30 30"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 4.83879C12.2386 4.83879 10 7.00515 10 9.6775C10 12.3498 12.2386 14.5162 15 14.5162C17.7614 14.5162 20 12.3498 20 9.6775C20 7.00515 17.7614 4.83879 15 4.83879ZM19.5512 15.4469C21.3437 14.1206 22.5 12.0297 22.5 9.6775C22.5 5.66898 19.1421 2.41943 15 2.41943C10.8579 2.41943 7.50001 5.66898 7.50001 9.6775C7.50001 12.0297 8.65628 14.1206 10.4488 15.4469C9.19193 15.9849 8.03564 16.7463 7.04506 17.705C6.28015 18.4452 5.63669 19.2812 5.12723 20.1837C4.18708 21.8492 4.57049 23.5473 5.62925 24.7481C6.64851 25.9041 8.28129 26.613 10 26.613H20C21.7187 26.613 23.3515 25.9041 24.3708 24.7481C25.4295 23.5473 25.8129 21.8492 24.8728 20.1837C24.3633 19.2812 23.7199 18.4452 22.955 17.705C21.9644 16.7463 20.8081 15.9849 19.5512 15.4469ZM15 16.9356C12.6794 16.9356 10.4538 17.8277 8.81283 19.4157C8.21782 19.9915 7.71743 20.6416 7.3212 21.3435C6.9375 22.0233 7.06128 22.645 7.53102 23.1777C8.04026 23.7553 8.95731 24.1936 10 24.1936H20C21.0427 24.1936 21.9598 23.7553 22.469 23.1777C22.9387 22.645 23.0625 22.0233 22.6788 21.3435C22.2826 20.6416 21.7822 19.9915 21.1872 19.4157C19.5463 17.8277 17.3207 16.9356 15 16.9356Z"
          />
        </svg>
        <MenuOutlined
          onClick={() => hamburgerHandler()}
          className="text-sm  font-default hamburger-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
