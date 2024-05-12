import createGlobalStyle, { styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
`;

// Topnav styles
export const TopnavStyles = styled.div`
  .topnav {
    display: flex;
    justify-content: space-between;
    background-color: beige;
    height: 10vh;
    align-items: center;
    text-align: center;
    box-shadow: 4px 4px 4px 4px solid black;
    padding: 8px 40px;
  }

  .menu {
    margin-right: 100px;
  }

  .menu ul {
    display: flex;
    list-style: none;
    gap: 12px;
  }

  .menu ul li a {
    text-decoration: none;
    font-size: 26px;
    color: #000;
    cursor: pointer;
  }

  .open-menu {
    font-weight: bold;
    font-size: 26px;
    cursor: pointer;
    display: none;
  }

  .close-menu {
    font-weight: bold;
    font-size: 32px;
    cursor: pointer;
    color: #000;
    position: absolute;
    right: 40px;
    top: 10px;
    display: none;
  }

  .btns {
    margin-left: 20px;
    display: flex;
    gap: 10px;
    padding-top: 18px;
  }

  .btns .button {
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 25px;
    cursor: pointer;
    background-color: blue;
    color: white;
    font-size: 16px;
    font-weight: bold;
  }

  .auth-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  @media only screen and (max-width: 670px) {
    .menu {
      /* background: #9acdff; */
      position: fixed;
      top: 0;
      margin-right: 0;
      right: -250px;
      width: 250px;
      height: 100%;
      padding-top: 60px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      display: flex;
      justify-content: center;
    }

    .menu ul {
      display: block;
    }

    .open-menu,
    .close-menu {
      display: block;
    }

    .auth-links {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
    }
  }
`;

// landing styles
export const LandingStyles = styled.div`
  .container-fluid {
    background: linear-gradient(to left, #9acdff, #f2f2f2);
    height: 90vh;
    width: 100%;
  }

  .landing {
    display: flex;
    justify-content: space-between;
  }

  .landing-info {
    padding-top: 130px;
    padding-left: 80px;
  }

  .landing-info h1 {
    font-size: 50px;
  }

  .landing-info h5 {
    font-size: 24px;
    color: #555;
  }

  .landing-btn {
    margin-top: 20px;
  }

  .landing-info a {
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    background-color: blue;
    color: white;
    font-size: 16px;
    font-weight: bold;
  }

  .landing-pic {
    padding-top: 80px;
    padding-right: 75px;
  }

  .landing-pic img {
    width: 600px;
    border: none;
    outline: none;
    z-index: -2;
  }

  @media only screen and (max-width: 670px) {
    .landing-info {
      padding-top: 60px;
      padding-left: 20px;
    }

    .landing {
      display: block;
      justify-content: space-between;
      text-align: center;
      align-items: center;
    }

    .landing-info h1 {
      font-size: 36px;
    }

    .landing-info h5 {
      font-size: 18px;
      color: #555;
    }

    .landing-info a {
      font-size: 14px;
    }

    .landing-pic {
      padding-top: 40px;
      padding-right: 0px;
    }

    .landing-pic img {
      width: 380px;
      border: none;
      outline: none;
      z-index: -2;
    }
  }
`;

// clients styles
export const ClientsStyle = styled.div`
  .clients {
    height: 45vh;
    background: rgba(0, 0, 0, 0.1);
    text-align: center;
    padding-top: 15px;
  }

  .companies {
    padding-bottom: 20px;
    margin-top: 30px;
  }

  .companies span {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: -60px;
  }

  .companies img {
    width: 260px;
    height: 150px;
    margin-top: -30px;
  }

  .companies div {
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 760px) {
    .clients {
      height: 80vh;
    }
    .c-title h2 {
      font-size: 22px;
    }

    .companies {
      display: flex;
      flex-direction: column;
    }

    .companies div {
      display: flex;
      flex-direction: column;
      margin-bottom: -75px;
    }

    .companies .amazon {
      margin-top: -10px;
      margin-bottom: -40px;
    }

    .companies span {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: -20px;
    }
  }
`;

// about styles
export const AboutStyles = styled.div`
  .about {
    height: 100vh;
    width: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .talents {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .talents .talent {
    // height: 38vh;
    // width: 25vw;
    // background-color: #97cdff;
    // padding: 10px 20px;
    // border: 1px solid #333;
    // border-radius: 20px;

    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 10px 20px;
    width: 25vw;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 760px) {
    .about {
      height: 154vh;
    }
    .abt-head h1 {
      font-size: 22px;
    }
    .talents {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-left: 4vw;
      margin-top: 10px;
    }

    .talents .talent {
      width: 45vw;
      height: 44vh;
    }

    .talent h3 {
      font-size: 18px;
    }

    .talent p {
      font-size: 15px;
    }
  }
`;

// whyus styles
export const WhyusStyles = styled.div`
  .whyus {
    padding: 10px 40px;
    /* background-color: #97cdff; */
    background: rgba(0, 0, 0, 0.1);
  }

  .whyus .cols {
    display: flex;
    gap: 40px;
    margin-top: 20px;
  }

  .whyus .left-col {
    margin-right: 20px;
  }

  .reasons span {
    margin-right: 3px;
    background-color: #fff;
    width: 10px;
    padding: 2px;
    border-radius: 50px;
  }

  .reasons p {
    color: #333;
  }

  .right-col img {
    width: 35vw;
    height: 65vh;
  }

  @media only screen and (max-width: 760px) {
    .whyus {
      text-align: center;
    }
    .whyus h3 {
      font-size: 20px;
    }

    .whyus .cols {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .right-col img {
      width: 80vw;
      height: 60vh;
    }
  }
`;

// footer styles
export const FooterStyles = styled.div`
  .footer {
    background-color: #000;
    color: #fff;
    display: flex;
    height: 56.5vh;
    width: 100%;
    position: relative;
    bottom: 0;
    gap: 50px;
    text-align: center;
    justify-content: space-evenly;
  }

  .footer ul {
    list-style: none;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .footer ul li a {
    text-decoration: none;
    color: #888;
    font-size: 17px;
  }

  .footer ul li a:hover {
    color: #fff;
  }

  .app-img img {
    width: 250px;
    display: block;
    cursor: pointer;
  }

  .for-clients,
  .freelancers,
  .quick-links,
  .app {
    margin-top: 40px;
  }

  .copyright p {
    text-align: center;
    color: #fff;
  }

  @media only screen and (max-width: 760px) {
    .footer {
      display: flex;
      flex-direction: column;
      height: 170vh;
    }

    .footer ul {
      text-align: center;
    }

    .app,
    .freelancers,
    .quick-links,
    .for-clients {
      margin-top: -100px;
    }

    .for-clients,
    .freelancers,
    .quick-links {
      margin-bottom: -60px;
    }

    .app-img {
      margin-left: 100px;
    }

    .copyright {
      position: relative;
      margin-left: 100px;
      margin-top: 0px;
    }
  }
`;

// forms styles
export const FormStyles = styled.div`
  .form-container {
    width: 100%;
    height: 100vh;
    background-color: #eee;
    justify-content: center;
    display: flex;
    align-items: center;
  }

  .form-el {
    height: 85vh;
    background-color: #97cdff;
    text-align: center;
    z-index: 10;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .login-form {
    height: 65vh;
    gap: 20px;
  }

  .form-el div {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 5px;
  }

  .form-el div label {
    font-weight: 500;
  }

  .form-el div input {
    width: 100%;
    border-radius: 6px;
    padding: 4px 8px;
  }

  .submit-btn {
    width: 200px;
    background-color: blue;
    color: #fff;
    font-weight: bold;
    text-align: center;
    border: none;
    outline: none;
    border-radius: 16px;
    padding: 10px 0;
    justify-content: center;
    display: flex;
  }

  .show-password {
    position: absolute;
    right: 41.5%;
    top: 59.8%;
    font-weight: bold;
    font-size: 12px;
    color: blue;
  }

  .show-confirm-password {
    position: absolute;
    right: 41.5%;
    top: 71.5%;
    font-weight: bold;
    color: blue;
    font-size: 12px;
  }

  .show-password-login {
    right: 41.5%;
    top: 49.5%;
  }

  @media only screen and (max-width: 760px) {
    .show-password {
      right: 26%;
      top: 58.5%;
    }

    .show-confirm-password {
      right: 26%;
      top: 70%;
    }

    .show-password-login {
      right: 26%;
      top: 48.5%;
    }
  }
`;


// Dashboard styles
export const DatashboardStyles = styled.div`
  .dashboard-container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
  }

  .dashboard-container nav {
    display: flex;
    width: 100%;
    height: 10vh;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .dashboard-container .logo a {
    text-decoration: none;
  }

  .dashboard-container .logo h1 {
    color: #000;
    font-family: fantasy;
  }

  .dashboard-container .dash-links {
    display: flex;
    gap: 20px;
  }

  .nav-button {
    text-decoration: none;
    background-color: blue;
    color: #fff;
    font-size: 16px;
    padding: 8px 16px;
    border-radius: 25px;
    border: none;
    outline: none;
  }

  .available-jobs-section {
    position: relative;
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  .available-jobs {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.1);
    height: 38vh;
    width: 100%;
    border-radius: 20px;
    /* margin-left: 10px; */
    padding: 20px;
    backdrop-filter: blur(10px);
  }

  .profile-view {
    text-decoration: none;
    border: 1px solid #333;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-image {
    color: black;
    font-size: 28px;
  }

  @media only screen and (max-width: 960px) {
    .available-jobs-section {
      position: relative;
      padding-top: 30px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      justify-content: center;
      align-items: center;
    }

    .available-jobs {
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.1);
      height: 40vh;
      width: 100%;
      border-radius: 20px;
      /* margin-left: 10%; */
      padding: 20px;
      backdrop-filter: blur(10px);
    }
  }

  @media only screen and (max-width: 670px) {
    .available-jobs-section {
      position: relative;
      padding-top: 30px;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
      justify-content: center;
      align-items: center;
    }

    .available-jobs {
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.1);
      height: 40vh;
      width: 100%;
      border-radius: 20px;
      /* margin-left: 10%; */
      padding: 20px;
      backdrop-filter: blur(10px);
    }
  }
`;