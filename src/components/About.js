import { Col, Row, Container, Offcanvas, NavLink } from "react-bootstrap";
import styled from "styled-components";
import React, { useEffect } from "react";
import "./SlideBackGround.css";
import { AppContext } from "./AppProvider";

import { BsFillHouseDoorFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";

import nodejs from "../images/nodejs.png";
import bootstrap from "../images/bootstrap.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import reactjs from "../images/reactjs.png";
import html from "../images/html.png";
import TranHoangPhu_CV from "../files/cv.pdf";
import ml from "../files/ml.jpg";

import { TfiMenu } from "react-icons/tfi";

const WrapperStyled = styled.div`
  position: relative;
  * {
    z-index: 1;
    box-sizing: border-box;
  }

  .menu-icon {
    font-size: 50px;
  }

  .menuToggleButton {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  height: 100vh;
  background-color: ${(props) => props.background_color};
  margin: 0 auto;
  background-size: cover;
  overflow-x: hidden;
  overflow-y: auto;

  .about__container,
  .about__container-row,
  .menu {
    width: ${(props) => props.width}%;
    height: ${(props) => props.height}%;
  }
  .about__container-row {
    margin: 0 auto;
  }
  .about__container-row-col1 {
    ${(props) => props.centeredFlex()}
  }

  // -------------------------------------------------MENU------------------------------------------------
  .menu {
    ${(props) => props.centeredFlex()}
    ul {
      position: fixed;
    }
    li {
      border-radius: 20px;
      ${(props) => props.centeredFlex("flex", "row", "flex-end", "center")}
      margin: 60px 60px 60px 0px;

      background-repeat: no-repeat;
      background-image: linear-gradient(
        to right,
        ${(props) => props.primary_color},
        ${(props) => props.primary_color}
      );
      background-position: -101% 0;
      background-size: 200% 100%;
      transition: background-position 1s ease-out;

      p {
        padding-left: 5px;
        color: white;
        opacity: 0;
        font-size: 20px;
        transition: opacity 1s ease-out;
      }

      a {
        font-size: 30px;
        color: ${(props) => props.text_color};
        padding: 15px;
        border-radius: 50%;
        background-color: rgb(43, 42, 42);
      }
      &:hover {
        background-position: 0 0;

        a {
          background: none;
        }
        p {
          opacity: 1;
        }
      }
    }
  }

  //------------------------------------------------ABOUT ME---------------------------------------------
  .about__info {
    width: 70%;
    ${(props) => props.centeredFlex()}
    margin-top: 100px;
  }

  .about__info-title {
    ${(props) => props.centeredFlex()}
    margin-bottom: 100px;
    color: ${(props) => props.text_color};

    & p:nth-child(1) {
      position: fixed;
      font-size: 200px;
      letter-spacing: 10px;
      line-height: 0.5;
      font-weight: 800;
      color: rgba(255, 255, 255, 0.07);
      top: 50%;
      left: 0%;
      z-index: -1;
    }
    & p:nth-child(2) {
      font-size: 56px;
      font-weight: 900;
      color: #fff;

      span {
        color: ${(props) => props.primary_color};
      }
    }
  }

  .about__info-personal {
    width: 100%;
    margin-bottom: 30px;
    &-container {
      width: 100%;
      ${(props) => props.centeredFlex()}
      #personal_info_title {
        color: ${(props) => props.text_color};
        font-size: 40px;
        margin-bottom: 20px;
      }
    }
    &-container-row {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
      div {
        width: 100%;
        a {
          margin-right: 20px;
        }
        display: flex;
        justify-content: center;
      }
    }
    &-container-row2 {
      width: ${(props) => props.width}%;
      margin-bottom: 40px;

      p {
        margin: 10px;
        color: rgb(205, 205, 205);
        font-size: 30px;
      }
      span {
        font-weight: bold;
        color: ${(props) => props.text_color};
      }
    }
    .download-button {
      display: flex;
      align-items: center;
      position: relative;
      text-decoration: none;
      color: black;
      background: none;
      background-image: linear-gradient(
        to right,
        ${(props) => props.primary_color},
        ${(props) => props.primary_color}
      );
      background-repeat: no-repeat;
      background-size: 200% 100%; /* double the width to create space for the slide */
      transition: background-position 0.3s ease-out;
      font-weight: bold;
      padding-left: 20px;
      padding-right: 60px;
      font-size: 20px;
      border: 1px solid ${(props) => props.primary_color};
      color: "black";
      border-radius: 60px;

      &:hover {
        color: white;
        background-position: -100% 0; /* slide the background to the left by 100% (i.e. its full width) */
        .download-arrow {
          background-color: ${(props) => props.primary_color};
        }
      }
      .download-arrow {
        right: 0;
        bottom: 0;
        position: absolute;
        background-color: ${(props) => props.background_color};
        font-size: 54px;
        color: ${(props) => props.text_color};
        border-radius: 60px;
      }
    }
  }

  //-----------------------------------------------SKILLS------------------------------------------------

  .about__skills {
    margin-bottom: 150px;
    width: 70%;
  }

  .about__skills div {
    ${(props) => props.centeredFlex("flex", "row", "center", "center")}

    p {
      font-size: 40px;
      font-weight: 800;
      color: ${(props) => props.text_color};
    }
    img {
      margin: 50px 50px;
      width: 200px;
      height: 240px;
      border: 20px solid ${(props) => props.primary_color};
    }

    div {
      ${(props) => props.centeredFlex("flex", "column", "center", "center")}
    }
  }

  //-------------------------------------------EXPERIENCE AND EDUCATION-----------------------------------
  .about__experience {
    width: 70%;
    ${(props) => props.centeredFlex()}

    a {
      color: ${(props) => props.text_color};
    }
    &-row {
      width: 100%;
      margin-bottom: 200px;
    }
    h1 {
      font-size: 40px;
      font-weight: 800;
      color: ${(props) => props.text_color};
      margin-bottom: 70px;
    }
    li {
      display: flex;
      margin: 20px 0px 20px 0px;
    }

    .icon {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        height: 100%;
        border-left: 1px solid ${(props) => props.primary_color};
      }
    }

    .graduation-icon {
      color: white;
      font-size: 50px;
      padding: 10px;
      background-color: ${(props) => props.primary_color};
      border-radius: 50%;
      position: relative;
    }
    span {
      color: ${(props) => props.text_color};
      background-color: rgb(43, 42, 42);
      padding: 7px;
      border-radius: 10%;
    }
    strong {
      color: ${(props) => props.primary_color};
    }
    h5 {
      color: ${(props) => props.primary_color};
      font-size: 35px;
    }
    p {
      color: ${(props) => props.text_color};
      font-size: 30px;
    }
    .about__experience-content * {
      margin: 20px;
    }
  }

  @media (max-width: 1200px) {
    .about__info {
      width: 80%;
    }
    .about__skills {
      width: 80%;
    }
    .about__experience {
      width: 80%;
    }
  }

  @media (max-width: 992px) {
    .about__skills div {
      p {
        font-size: 25px;
      }
    }
    .about__experience {
      h1 {
        font-size: 30px;
      }
      h5 {
        font-size: 25px;
      }
      p {
        font-size: 20px;
      }
    }
    .about__info {
      &-personal-container {
        #personal_info_title {
          font-size: 30px;
        }
        &-row2 {
          p {
            font-size: 25px;
          }
        }
      }
    }
  }

  @media (max-width: 786px) {
    .about__info {
      width: 100%;
    }
  }
  @media (max-width: 786px) {
    .about__experience h1 {
      text-align: center;
    }
  }
`;
const LiStyled = styled.li`
  margin: "20px 0px 20px 20px", .active {

  }
`;
const UlStyled = styled.ul`
  .active {
    p,
    a {
      color: rgb(255, 180, 0) !important;
    }
  }
`;

export default function About() {
  const { show, setShow, activeLink, setActiveLink } =
    React.useContext(AppContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const background_color = "rgb(17, 17, 17)";
  const primary_color = "rgb(255, 180, 0)";
  const text_color = "white";

  const pStyled = {
    fontSize: "30px",
    color: "white",
    fontWeight: "bold",
    marginLeft: "20px",
  };

  const aStyled = {
    fontSize: "30px",
    color: "white",
    display: "flex",
    textDecoration: "none",
  };

  useEffect(() => {
    setActiveLink("ABOUT");
    const root = document.getElementById("root");
    document.body.style.overflowY = "hidden";
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide-background");
    root.appendChild(slideDiv);
    slideDiv.addEventListener("animationend", () => {
      root.removeChild(slideDiv);
    });
  }, []);

  function centeredFlex(
    display = "flex",
    direction = "column",
    justify = "center",
    align = "center"
  ) {
    return `
      display: ${display};
      flex-direction: ${direction};
      justify-content: ${justify};
      align-items: ${align};
    `;
  }
  return (
    <WrapperStyled
      width={100}
      height={100}
      primary_color={primary_color}
      text_color={text_color}
      background_color={background_color}
      centeredFlex={centeredFlex}
    >
      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ background: background_color }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <UlStyled>
              <LiStyled className={activeLink === "HOME" ? "active" : ""}>
                <NavLink href="/" style={aStyled}>
                  <BsFillHouseDoorFill />
                  <p style={pStyled}>HOME</p>
                </NavLink>
              </LiStyled>
              <hr />
              <LiStyled className={activeLink === "ABOUT" ? "active" : ""}>
                <NavLink href="/about" style={aStyled}>
                  <IoIosInformationCircle />
                  <p style={pStyled}>ABOUT</p>
                </NavLink>
              </LiStyled>
              <hr />
              <LiStyled className={activeLink === "PORTFOLIO" ? "active" : ""}>
                <NavLink href="/portfolio" style={aStyled}>
                  <GiSkills />
                  <p style={pStyled}>PORTFOLIO</p>
                </NavLink>
              </LiStyled>
              <hr />
              {/* <LiStyled className={activeLink === "CONTACT" ? "active" : ""}>
                <NavLink href="/contact" style={aStyled}>
                  <AiOutlineContacts />
                  <p style={pStyled}>CONTACT</p>
                </NavLink>
              </LiStyled> */}
            </UlStyled>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Container className="about__container" fluid>
        <Row className="about__container-row">
          <Col xl={11} lg={11} md={12} className="about__container-row-col1">
            <div className="about__info">
              <button
                className="d-block d-lg-none menuToggleButton "
                onClick={handleShow}
              >
                <TfiMenu className="menu-icon" />
              </button>
              <div className="about__info-title">
                <p>RESUME</p>
                <p>
                  ABOUT <span>ME</span>
                </p>
              </div>
              <div className="about__info-personal">
                <Container className="about__info-personal-container">
                  <div>
                    <p id="personal_info_title">PERSONAL INFOS</p>
                  </div>
                  <Row className=" about__info-personal-container-row2">
                    <Col className="p-0 d-flex flex-column align-items-center">
                      <div>
                        <p>
                          First name: <span>Tran</span>
                        </p>
                        <p>
                          Last name: <span>Phu</span>
                        </p>
                        <p>
                          Age: <span>19 Years</span>
                        </p>
                        <p>
                          Nationality: <span>Vietnamese</span>
                        </p>
                      </div>
                    </Col>
                    <Col className="p-0 d-flex justify-content-center">
                      <div>
                        <p>
                          Address: <span>An Lac HCM</span>
                        </p>
                        <p>
                          Phone: <span>+84937937214</span>
                        </p>
                        <p>
                          Email: <span>phutech2973@gmail.com</span>
                        </p>
                        <p>
                          Languages: <span>Vietnamese, English</span>
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row className="about__info-personal-container-row">
                    <div>
                      <a
                        href={TranHoangPhu_CV}
                        className="download-button"
                        download="TranHoangPhu_CV"
                      >
                        Download CV <MdDownload className="download-arrow" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/tr%E1%BA%A7n-ph%C3%BA-ba05aa229/"
                        style={{ fontSize: "50px" }}
                      >
                        <BsLinkedin />
                      </a>
                      <a
                        href="https://github.com/THP297"
                        style={{ fontSize: "50px" }}
                      >
                        <BsGithub />
                      </a>
                    </div>
                  </Row>
                </Container>
              </div>
            </div>
            <hr></hr>
            <div className="about__skills">
              <div>
                <p>MY SKILLS</p>
              </div>
              <Row>
                <Col md={6} sm={6} xs={12}>
                  <img src={html} alt="" />
                  <p>HTML</p>
                </Col>
                <Col md={6} sm={6} xs={12}>
                  <img src={css} alt="" />
                  <p>CSS</p>
                </Col>
                <Col md={6} sm={6} xs={12}>
                  <img src={javascript} alt="" />
                  <p>JAVASCRIPT</p>
                </Col>
              </Row>
              <Row>
                <Col md={6} sm={6} xs={12}>
                  <img src={bootstrap} alt="" />
                  <p>BOOTSTRAP</p>
                </Col>
                <Col md={6} sm={6} xs={12}>
                  <img src={reactjs} alt="" />
                  <p>REACTJS</p>
                </Col>
                <Col md={6} sm={6} xs={12}>
                  <img src={nodejs} alt="" />
                  <p>NODEJS</p>
                </Col>
              </Row>
            </div>
            <hr></hr>
            <div className="about__experience">
              <h1>EXPERIENCE & EDUCATION</h1>
              <Row className="about__experience-row">
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <ul>
                    <li>
                      <div className="icon">
                        <FaGraduationCap className="graduation-icon" />
                      </div>
                      <div className="about__experience-content">
                        <span>2022-</span>
                        <h5>Teky Holdings</h5>
                        <p>
                          {" "}
                          <strong>Role:</strong> Progamming Tutor
                        </p>
                        <p>
                          Teaching primary school and secondary school students
                          in web development
                        </p>
                        <p>
                          <strong>Technical skills:</strong> Html, Css,
                          Javascript, Bootstrap, Python, Django.
                        </p>
                      </div>
                    </li>
                  </ul>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <ul>
                    <li>
                      <div className="icon">
                        <FaGraduationCap className="graduation-icon" />
                      </div>
                      <div className="about__experience-content">
                        <span>2020</span>
                        <h5>
                          FPT SoftWare Academy: Python And Machine Learning
                        </h5>
                        <a href={ml} download="ml">
                          Certification
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <FaGraduationCap className="graduation-icon" />
                      </div>
                      <div className="about__experience-content">
                        <span>2022-2024</span>
                        <h5>Saigon College: APPLIED INFORMATICS</h5>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xl={1} lg={1} className="d-none d-lg-block h-100 p-0">
            <div className="menu">
              <ul>
                <li>
                  <p>HOME</p>
                  <a href="/">
                    <BsFillHouseDoorFill />
                  </a>
                </li>
                <li>
                  <p>ABOUT</p>
                  <a href="/about">
                    <IoIosInformationCircle />
                  </a>
                </li>
                <li>
                  <p>PORTFOLIO</p>
                  <a href="/portfolio">
                    <GiSkills />
                  </a>
                </li>
                {/* <li>
                  <p>CONTACT</p>
                  <a href="/contact">
                    <AiOutlineContacts />
                  </a>
                </li> */}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </WrapperStyled>
  );
}
