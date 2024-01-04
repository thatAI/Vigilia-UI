import React, { useState } from "react";
import "./leftSider.css";
import { useNavigate } from "react-router-dom";

const LeftSider = ({ routeSidebarHandler }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(window.location.pathname);
  const activeClassHandlder = (activename) => {
    console.log(activename);
    switch (activename) {
      case "dashboard":
        navigate("/runbook");
        break;
      case "runbook":
        navigate("/");
        break;
      case "nist_csf":
        navigate("/nist_csf");
        break;
      case "cves":
        navigate("/cves");
        break;
      case "policy":
        navigate("/policy");
        break;
      case "runbook/1":
        navigate(`/runbook/${1}`);
        break;
      default:
        break;
    }
    setActive(window.location.pathname);
    routeSidebarHandler();
  };
  return (
    <div className="sider-parent-div">
      <div
        className={`sider-child-div sider-child-primary font-default ${
          active === "/runbook" ? "active" : ""
        }`}
        onClick={() => activeClassHandlder("dashboard")}
      >
        <svg
          className={`font-default ${
            active === "/runbook" ? "active-icons" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="19"
          viewBox="0 0 24 26"
        >
          <path d="M8.44553 23.9779V20.1519C8.44553 19.1752 9.24309 18.3834 10.2269 18.3834H13.8233C14.2958 18.3834 14.7489 18.5697 15.083 18.9014C15.417 19.233 15.6047 19.6828 15.6047 20.1519V23.9779C15.6017 24.384 15.7621 24.7744 16.0503 25.0626C16.3385 25.3508 16.7306 25.5128 17.1396 25.5128H19.5933C20.7392 25.5158 21.8392 25.0659 22.6506 24.2626C23.4619 23.4592 23.9179 22.3683 23.9179 21.2307V10.3308C23.9179 9.4119 23.5076 8.54024 22.7975 7.95067L14.4507 1.33289C12.9988 0.172562 10.9185 0.210026 9.50989 1.42186L1.35356 7.95067C0.609958 8.52286 0.165518 9.39711 0.143555 10.3308V21.2196C0.143555 23.5907 2.07977 25.5128 4.4682 25.5128H6.8658C7.71535 25.5128 8.40577 24.8324 8.41192 23.9891L8.44553 23.9779Z" />
        </svg>
        <span className="text-lh font-sans">Installed Runbooks </span>
      </div>
      <div
        className={`sider-child-div sider-child-primary font-default ${
          active === "/" ? "active" : ""
        }`}
        onClick={() => activeClassHandlder("runbook")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="19"
          viewBox="0 0 24 26"
          className={`font-default ${active === "/" ? "active-icons" : ""}`}
        >
          <path d="M17.2749 0.487183C21.1401 0.487183 23.2923 2.71446 23.2923 6.53087V19.4566C23.2923 23.3356 21.1401 25.5128 17.2749 25.5128H6.78789C2.984 25.5128 0.769226 23.3356 0.769226 19.4566V6.53087C0.769226 2.71446 2.984 0.487183 6.78789 0.487183H17.2749ZM7.12574 17.6798C6.75035 17.6423 6.38748 17.8174 6.18728 18.1428C5.98707 18.4556 5.98707 18.8685 6.18728 19.1938C6.38748 19.5067 6.75035 19.6944 7.12574 19.6443H16.9358C17.4351 19.5943 17.8117 19.1676 17.8117 18.6683C17.8117 18.1553 17.4351 17.7298 16.9358 17.6798H7.12574ZM16.9358 11.9727H7.12574C6.58644 11.9727 6.14974 12.4119 6.14974 12.95C6.14974 13.488 6.58644 13.926 7.12574 13.926H16.9358C17.4738 13.926 17.9118 13.488 17.9118 12.95C17.9118 12.4119 17.4738 11.9727 16.9358 11.9727ZM10.8658 6.30564H7.12574V6.31816C6.58644 6.31816 6.14974 6.75611 6.14974 7.29416C6.14974 7.83221 6.58644 8.27016 7.12574 8.27016H10.8658C11.4051 8.27016 11.8431 7.83221 11.8431 7.28039C11.8431 6.74359 11.4051 6.30564 10.8658 6.30564Z" />
        </svg>{" "}
        <span className="text-lh font-sans"> Runbook Store </span>
      </div>
      <div
        className={`sider-child-div sider-child-primary font-default ${
          active === "/nist_csf" ? "active" : ""
        }`}
        onClick={() => activeClassHandlder("nist_csf")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="19"
          viewBox="0 0 28 29"
          className={`font-default ${
            active === "/nist_csf" ? "active-icons" : ""
          }`}
        >
          <path d="M12.25 15.0347L9.98375 12.6875L8.75 13.9653L12.25 17.5903L19.25 10.3403L18.0163 9.0625L12.25 15.0347Z" />
          <path d="M14 27.1875L8.59601 24.2032C7.05542 23.3543 5.7671 22.087 4.86931 20.5372C3.97152 18.9874 3.49815 17.2136 3.50001 15.4062V3.625C3.50047 3.14444 3.68499 2.6837 4.01308 2.3439C4.34117 2.00409 4.78602 1.81298 5.25001 1.8125H22.75C23.214 1.81298 23.6588 2.00409 23.9869 2.3439C24.315 2.6837 24.4995 3.14444 24.5 3.625V15.4062C24.5019 17.2136 24.0285 18.9874 23.1307 20.5372C22.2329 22.087 20.9446 23.3543 19.404 24.2032L14 27.1875ZM5.25001 3.625V15.4062C5.24855 16.8851 5.63597 18.3364 6.37067 19.6044C7.10538 20.8724 8.15962 21.9093 9.42025 22.6037L14 25.133L18.5798 22.6046C19.8405 21.9101 20.8948 20.8731 21.6296 19.6049C22.3643 18.3367 22.7516 16.8852 22.75 15.4062V3.625H5.25001Z" />
        </svg>
        <span className="text-lh font-sans"> NIST CSF</span>
      </div>
      <div
        className={`sider-child-div sider-child-primary font-default ${
          active === "/cves" ? "active" : ""
        }`}
        onClick={() => activeClassHandlder("cves")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="19"
          viewBox="0 0 20 25"
          className={`font-default ${active === "/cves" ? "active-icons" : ""}`}
        >
          <path d="M10 0C6.33333 0 3.33333 2.81124 3.33333 6.2472H6.66667C6.66667 4.49798 8.13333 3.1236 10 3.1236C11.8667 3.1236 13.3333 4.49798 13.3333 6.2472V12.4944H0V24.9888H20V12.4944H16.6667V6.2472C16.6667 2.81124 13.6667 0 10 0Z" />
        </svg>
        <span className="text-lh font-sans"> CVEs</span>
      </div>
      <div
        className={`sider-child-div sider-child-primary font-default ${
          active === "/policy" ? "active" : ""
        }`}
        onClick={() => activeClassHandlder("policy")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="19"
          viewBox="0 0 25 27"
          className={`font-default ${
            active === "/policy" ? "active-icons" : ""
          }`}
        >
          <g clip-path="url(#clip0_206_1340)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.9721 15.3281C25.2813 21.6804 22.9879 25.4356 18.9229 27C14.9974 25.5322 12.6697 21.9441 12.85 15.2315C15.0282 15.3974 17.1874 14.7171 18.8971 13.3264C20.6387 14.4558 22.8591 15.5237 24.97 15.3281H24.9721ZM13.4986 2.66309L17.9437 6.92359H13.4986V2.66309ZM4.19603 12.4739C4.24269 12.4215 4.29935 12.3795 4.3625 12.3504C4.42566 12.3213 4.49398 12.3057 4.56324 12.3047H13.5501C13.6214 12.3049 13.6917 12.3207 13.7566 12.351C13.8214 12.3814 13.8791 12.4255 13.9259 12.4805C14.0216 12.5954 14.0742 12.7415 14.0742 12.8925C14.0742 13.0435 14.0216 13.1895 13.9259 13.3045C13.8937 13.3393 13.8576 13.3703 13.8185 13.3967C13.6467 13.4297 13.4749 13.4561 13.3031 13.4802H4.57183C4.50048 13.4799 4.42999 13.4643 4.3649 13.4344C4.2998 13.4045 4.24155 13.361 4.19388 13.3066C4.09615 13.1918 4.04232 13.0447 4.04232 12.8925C4.04232 12.7402 4.09615 12.5931 4.19388 12.4783L4.19603 12.4739ZM4.19603 16.1499C4.24289 16.0948 4.30059 16.0505 4.36535 16.0199C4.43011 15.9892 4.50047 15.9729 4.57183 15.9719H10.8272C10.8465 16.374 10.8723 16.7673 10.9066 17.1519H4.57183C4.50043 17.1518 4.42986 17.1363 4.36473 17.1064C4.2996 17.0765 4.24138 17.0328 4.19388 16.9783C4.09615 16.8635 4.04232 16.7164 4.04232 16.5641C4.04232 16.4118 4.09615 16.2647 4.19388 16.1499H4.19603ZM4.19603 19.8237C4.24326 19.7693 4.30108 19.7255 4.36579 19.6953C4.4305 19.665 4.50068 19.6489 4.57183 19.648H11.261C11.3426 20.0537 11.4349 20.447 11.538 20.8279H4.57183C4.5002 20.828 4.4294 20.8123 4.3642 20.782C4.29899 20.7517 4.24091 20.7074 4.19388 20.6521C4.09567 20.5372 4.04217 20.3894 4.04357 20.2368C4.04407 20.0848 4.09822 19.9381 4.19603 19.8237ZM4.19603 8.79786C4.24289 8.74279 4.30059 8.69847 4.36535 8.6678C4.43011 8.63713 4.50047 8.6208 4.57183 8.61988H9.72558C9.79634 8.62 9.86625 8.63555 9.93068 8.66548C9.99511 8.69541 10.0526 8.73904 10.0992 8.79346C10.1979 8.90889 10.2515 9.05758 10.2495 9.21094C10.2496 9.36266 10.1963 9.50932 10.0992 9.62403C10.0522 9.67821 9.99476 9.72181 9.93044 9.75207C9.86612 9.78233 9.79636 9.79859 9.72558 9.79981H4.57183C4.50048 9.79947 4.42999 9.78385 4.3649 9.75396C4.2998 9.72406 4.24155 9.68055 4.19388 9.62623C4.0957 9.51048 4.04224 9.36201 4.04357 9.20875C4.0417 9.05434 4.09604 8.90474 4.19603 8.78907V8.79786ZM4.19603 5.37891C4.24289 5.32385 4.30059 5.27953 4.36535 5.24886C4.43011 5.21819 4.50047 5.20186 4.57183 5.20093H7.40639C7.47658 5.20137 7.5459 5.21685 7.60988 5.24636C7.67387 5.27588 7.7311 5.31879 7.77789 5.37232C7.87562 5.48713 7.92946 5.63425 7.92946 5.78651C7.92946 5.93876 7.87562 6.08588 7.77789 6.20069C7.73107 6.25508 7.67363 6.29883 7.60928 6.3291C7.54492 6.35938 7.47507 6.37552 7.40424 6.37647H4.57183C4.50043 6.37641 4.42986 6.36091 4.36473 6.331C4.2996 6.30109 4.24138 6.25743 4.19388 6.20289C4.09615 6.08808 4.04232 5.94096 4.04232 5.7887C4.04232 5.63645 4.09615 5.48933 4.19388 5.37452L4.19603 5.37891ZM20.4175 7.53443C20.4165 7.37041 20.3633 7.21118 20.2661 7.08078C20.1689 6.95037 20.0328 6.85587 19.8785 6.81153L13.3289 0.27906C13.2604 0.191548 13.1734 0.121002 13.0745 0.0726839C12.9756 0.0243655 12.8673 -0.00047794 12.7577 6.96416e-06H1.3314C0.978298 6.96416e-06 0.639654 0.143535 0.389971 0.399017C0.140287 0.654498 1.67604e-05 1.00101 1.67604e-05 1.36231V24.6665C-0.000867505 24.8458 0.0332466 25.0235 0.100359 25.1891C0.16747 25.3548 0.266229 25.505 0.390843 25.6311C0.640786 25.8855 0.978876 26.0284 1.3314 26.0288H14.1557C13.7516 25.5537 13.3867 25.0451 13.0648 24.5083H1.48602V1.51392H12.0083V7.69044C12.0088 7.89285 12.0878 8.08678 12.2279 8.2297C12.368 8.37263 12.5577 8.45289 12.7556 8.45289H18.9315V11.0501C19.434 11.3753 19.9293 11.6719 20.4175 11.9399V7.53443ZM15.6202 19.5381L16.7819 19.5227C17.0912 19.5754 17.7268 20.1555 17.9501 20.4016C18.1412 20.0896 18.3388 19.7908 18.5428 19.5007C18.769 19.1785 19.0009 18.8709 19.2385 18.5779C19.4962 18.2571 19.7647 17.9517 20.0395 17.6594C20.2779 17.4045 20.7074 16.8904 21.0187 16.7673C21.0279 16.765 21.0375 16.765 21.0467 16.7673H22.3179C22.3379 16.7673 22.357 16.7754 22.3711 16.7899C22.3852 16.8043 22.3931 16.8238 22.3931 16.8442C22.3932 16.8546 22.3912 16.8649 22.3871 16.8743C22.383 16.8838 22.377 16.8923 22.3695 16.8992L22.1182 17.1782C21.726 17.6177 21.3523 18.0696 20.9973 18.5339C20.6387 18.9976 20.2972 19.47 19.9751 19.9468C19.653 20.4236 19.3502 20.9026 19.0625 21.3926C18.7747 21.8826 18.4998 22.3879 18.2443 22.8955L18.0833 23.2119C18.0737 23.2295 18.0579 23.2427 18.0392 23.2489C18.0204 23.255 18.0001 23.2536 17.9823 23.2449C17.9678 23.2358 17.9559 23.2229 17.948 23.2075L17.8019 22.8867C17.6713 22.5952 17.5236 22.3119 17.3596 22.0386C17.2003 21.7713 17.0238 21.5151 16.8313 21.2717C16.6396 21.0294 16.4315 20.801 16.2086 20.5884C15.9808 20.3723 15.7374 20.174 15.4806 19.9951C15.4673 19.9855 15.4573 19.9718 15.4523 19.9559C15.4473 19.9401 15.4474 19.923 15.4527 19.9072L15.545 19.5908C15.5501 19.5746 15.5602 19.5605 15.5737 19.5506C15.5872 19.5407 15.6035 19.5356 15.6202 19.5359V19.5381Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_206_1340">
              <rect width="25" height="27" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="text-lh font-sans"> Policies</span>
      </div>
      <div
        className={`sider-child-div sider-child-primary font-default ${
          active === "/runbook/1" ? "active" : ""
        }`}
        onClick={() => activeClassHandlder("runbook/1")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="19"
          viewBox="0 0 25 27"
          className={`font-default ${
            active === `/runbook/1` ? "active-icons" : ""
          }`}
        >
          <g clip-path="url(#clip0_206_1340)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.9721 15.3281C25.2813 21.6804 22.9879 25.4356 18.9229 27C14.9974 25.5322 12.6697 21.9441 12.85 15.2315C15.0282 15.3974 17.1874 14.7171 18.8971 13.3264C20.6387 14.4558 22.8591 15.5237 24.97 15.3281H24.9721ZM13.4986 2.66309L17.9437 6.92359H13.4986V2.66309ZM4.19603 12.4739C4.24269 12.4215 4.29935 12.3795 4.3625 12.3504C4.42566 12.3213 4.49398 12.3057 4.56324 12.3047H13.5501C13.6214 12.3049 13.6917 12.3207 13.7566 12.351C13.8214 12.3814 13.8791 12.4255 13.9259 12.4805C14.0216 12.5954 14.0742 12.7415 14.0742 12.8925C14.0742 13.0435 14.0216 13.1895 13.9259 13.3045C13.8937 13.3393 13.8576 13.3703 13.8185 13.3967C13.6467 13.4297 13.4749 13.4561 13.3031 13.4802H4.57183C4.50048 13.4799 4.42999 13.4643 4.3649 13.4344C4.2998 13.4045 4.24155 13.361 4.19388 13.3066C4.09615 13.1918 4.04232 13.0447 4.04232 12.8925C4.04232 12.7402 4.09615 12.5931 4.19388 12.4783L4.19603 12.4739ZM4.19603 16.1499C4.24289 16.0948 4.30059 16.0505 4.36535 16.0199C4.43011 15.9892 4.50047 15.9729 4.57183 15.9719H10.8272C10.8465 16.374 10.8723 16.7673 10.9066 17.1519H4.57183C4.50043 17.1518 4.42986 17.1363 4.36473 17.1064C4.2996 17.0765 4.24138 17.0328 4.19388 16.9783C4.09615 16.8635 4.04232 16.7164 4.04232 16.5641C4.04232 16.4118 4.09615 16.2647 4.19388 16.1499H4.19603ZM4.19603 19.8237C4.24326 19.7693 4.30108 19.7255 4.36579 19.6953C4.4305 19.665 4.50068 19.6489 4.57183 19.648H11.261C11.3426 20.0537 11.4349 20.447 11.538 20.8279H4.57183C4.5002 20.828 4.4294 20.8123 4.3642 20.782C4.29899 20.7517 4.24091 20.7074 4.19388 20.6521C4.09567 20.5372 4.04217 20.3894 4.04357 20.2368C4.04407 20.0848 4.09822 19.9381 4.19603 19.8237ZM4.19603 8.79786C4.24289 8.74279 4.30059 8.69847 4.36535 8.6678C4.43011 8.63713 4.50047 8.6208 4.57183 8.61988H9.72558C9.79634 8.62 9.86625 8.63555 9.93068 8.66548C9.99511 8.69541 10.0526 8.73904 10.0992 8.79346C10.1979 8.90889 10.2515 9.05758 10.2495 9.21094C10.2496 9.36266 10.1963 9.50932 10.0992 9.62403C10.0522 9.67821 9.99476 9.72181 9.93044 9.75207C9.86612 9.78233 9.79636 9.79859 9.72558 9.79981H4.57183C4.50048 9.79947 4.42999 9.78385 4.3649 9.75396C4.2998 9.72406 4.24155 9.68055 4.19388 9.62623C4.0957 9.51048 4.04224 9.36201 4.04357 9.20875C4.0417 9.05434 4.09604 8.90474 4.19603 8.78907V8.79786ZM4.19603 5.37891C4.24289 5.32385 4.30059 5.27953 4.36535 5.24886C4.43011 5.21819 4.50047 5.20186 4.57183 5.20093H7.40639C7.47658 5.20137 7.5459 5.21685 7.60988 5.24636C7.67387 5.27588 7.7311 5.31879 7.77789 5.37232C7.87562 5.48713 7.92946 5.63425 7.92946 5.78651C7.92946 5.93876 7.87562 6.08588 7.77789 6.20069C7.73107 6.25508 7.67363 6.29883 7.60928 6.3291C7.54492 6.35938 7.47507 6.37552 7.40424 6.37647H4.57183C4.50043 6.37641 4.42986 6.36091 4.36473 6.331C4.2996 6.30109 4.24138 6.25743 4.19388 6.20289C4.09615 6.08808 4.04232 5.94096 4.04232 5.7887C4.04232 5.63645 4.09615 5.48933 4.19388 5.37452L4.19603 5.37891ZM20.4175 7.53443C20.4165 7.37041 20.3633 7.21118 20.2661 7.08078C20.1689 6.95037 20.0328 6.85587 19.8785 6.81153L13.3289 0.27906C13.2604 0.191548 13.1734 0.121002 13.0745 0.0726839C12.9756 0.0243655 12.8673 -0.00047794 12.7577 6.96416e-06H1.3314C0.978298 6.96416e-06 0.639654 0.143535 0.389971 0.399017C0.140287 0.654498 1.67604e-05 1.00101 1.67604e-05 1.36231V24.6665C-0.000867505 24.8458 0.0332466 25.0235 0.100359 25.1891C0.16747 25.3548 0.266229 25.505 0.390843 25.6311C0.640786 25.8855 0.978876 26.0284 1.3314 26.0288H14.1557C13.7516 25.5537 13.3867 25.0451 13.0648 24.5083H1.48602V1.51392H12.0083V7.69044C12.0088 7.89285 12.0878 8.08678 12.2279 8.2297C12.368 8.37263 12.5577 8.45289 12.7556 8.45289H18.9315V11.0501C19.434 11.3753 19.9293 11.6719 20.4175 11.9399V7.53443ZM15.6202 19.5381L16.7819 19.5227C17.0912 19.5754 17.7268 20.1555 17.9501 20.4016C18.1412 20.0896 18.3388 19.7908 18.5428 19.5007C18.769 19.1785 19.0009 18.8709 19.2385 18.5779C19.4962 18.2571 19.7647 17.9517 20.0395 17.6594C20.2779 17.4045 20.7074 16.8904 21.0187 16.7673C21.0279 16.765 21.0375 16.765 21.0467 16.7673H22.3179C22.3379 16.7673 22.357 16.7754 22.3711 16.7899C22.3852 16.8043 22.3931 16.8238 22.3931 16.8442C22.3932 16.8546 22.3912 16.8649 22.3871 16.8743C22.383 16.8838 22.377 16.8923 22.3695 16.8992L22.1182 17.1782C21.726 17.6177 21.3523 18.0696 20.9973 18.5339C20.6387 18.9976 20.2972 19.47 19.9751 19.9468C19.653 20.4236 19.3502 20.9026 19.0625 21.3926C18.7747 21.8826 18.4998 22.3879 18.2443 22.8955L18.0833 23.2119C18.0737 23.2295 18.0579 23.2427 18.0392 23.2489C18.0204 23.255 18.0001 23.2536 17.9823 23.2449C17.9678 23.2358 17.9559 23.2229 17.948 23.2075L17.8019 22.8867C17.6713 22.5952 17.5236 22.3119 17.3596 22.0386C17.2003 21.7713 17.0238 21.5151 16.8313 21.2717C16.6396 21.0294 16.4315 20.801 16.2086 20.5884C15.9808 20.3723 15.7374 20.174 15.4806 19.9951C15.4673 19.9855 15.4573 19.9718 15.4523 19.9559C15.4473 19.9401 15.4474 19.923 15.4527 19.9072L15.545 19.5908C15.5501 19.5746 15.5602 19.5605 15.5737 19.5506C15.5872 19.5407 15.6035 19.5356 15.6202 19.5359V19.5381Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_206_1340">
              <rect width="25" height="27" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="text-lh font-sans"> S3 Runbook</span>
      </div>
    </div>
  );
};

export default LeftSider;
