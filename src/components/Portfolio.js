import { Col, Row, Container, Nav, NavLink, Offcanvas } from "react-bootstrap";
import React, { useEffect } from "react";
import "./SlideBackGround.css";
import { AppContext } from "./AppProvider";
import styled from "styled-components";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { TfiMenu } from "react-icons/tfi";

import keep from "../images/Keep.png";
import movie from "../images/movie.png";
import chatapp from "../images/chatapp.png";
import github from "../images/github.png";
import live from "../images/live.png";
import todo from "../images/todo.png";
import weatherapp from "../images/weatherapp.png";
import calculator from "../images/calculator.png";

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

  .portfolio__container,
  .portfolio__container-row,
  .menu {
    width: ${(props) => props.width}%;
    height: ${(props) => props.height}%;
  }
  .portfolio__container-row {
    margin: 0 auto;
  }
  .portfolio__container-row-col1 {
    ${(props) => props.centeredFlex()}
  }

  //---------------------------------------------------MENU----------------------------------------------
  .menu {
    ${(props) => props.centeredFlex()}

    ul {
      position: fixed;
    }
    li {
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
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

  // ---------------------------------------------INFO---------------------------------------------
  .portfolio__info {
    ${(props) => props.centeredFlex()}
    padding: 5%;
    height: 65vh;

    &-title {
      ${(props) => props.centeredFlex()}
      margin-bottom: 150px;
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
  }

  //-------------------------------------------------HIGHLIGHT-----------------------------------------
  h1 {
    text-align: center;
    font-size: 50px;
    color: ${(props) => props.text_color};
    margin-bottom: 60px;
  }
  .portfolio__highlight {
    width: 60%;
    margin-bottom: 150px;
    ${(props) => props.centeredFlex()}
    font-size: 25px;
    }
    img {
      width: 50px;
    }
    a {
      transition: border 1s ease-in-out, border-radius 1s ease-in-out;
    }
    a:hover {
      img {
        border: 1px solid ${(props) => props.primary_color};
        border-radius: 5px;
      }
    }
  }

  .portfolio__highlight-container2 ul {
    li:not(:first-child) {
      p {
        margin: 5px 0px 5px 0px;
      }
    }
    li:first-child {
      h3 {
        margin-bottom: 20px;
      }
    }
  }

  .portfolio__highlight-container1,
  .portfolio__highlight-container2 {
      &-col2 {
        border: 1px solid white;
      }
      ${(props) => props.centeredFlex("flex", "row", "center")}
      margin: 20px 0px 20px 0px;
      li {
        margin: 20px 0px 20px 0px;
        width: 100%;
      }

      li h3 {
        color: ${(props) => props.primary_color};
      }
      li p {
        color: ${(props) => props.text_color};
      }

      ul .skills {
        .skill {
          padding: 0;
          ${(props) => props.centeredFlex("flex", "row", "center")}

          p {
            color: white;
            padding: 5px;
            border: 1px solid ${(props) => props.text_color};
          }
        }
      }
    }

  .portfolio__highlight-container1-image {
    img {
      transition: transform 0.5s ease-in-out;
      width: 100%;
      border-radius: 20px;
      border: 5px solid ${(props) => props.primary_color};

      &:hover {
        transform: scale(1.3) translateX(-12%);
      }
    }
  }

  .portfolio__highlight-container2-image {
    position: relative;

    img {
      width: 100%;
      border-radius: 20px;
      border: 5px solid ${(props) => props.primary_color};
      transition: transform 0.5s ease-in-out;

      &:hover {
        transform: scale(1.1) translateX(12%);
      }
    }
  }

  // --------------------------------------------OTHERS-------------------------------------------------

  .portfolio__others {
    font-size: 25px;
    width: 60%;
    ${(props) => props.centeredFlex("flex", "column", "center", "center")}
    padding-bottom: 100px;
    span {
      padding: 5px;
      border: 5px solid white;
    }
    p {
      color: white;
      margin: 20px 0px 20px 0px;
    }
    h3 {
      color: ${(props) => props.primary_color};
      margin-bottom: 20px;
    }

    &-image {
      width: 100%;
      transition: width 0.5s ease-in-out;
    }

    &-container {
      &-row1,
      &-row2,
      &-row3 {
        ul {
          li{
            width:100%;
          }
        }
        width: 100%;
        margin: 20px 0px 20px 0px;
        border-bottom: 1px solid white;
        ${(props) => props.centeredFlex("flex", "row", "center", "center")}
      }
    }
    

    a {
      transition: border 1s ease-in-out, border-radius 1s ease-in-out;
      img{
        width: 50px;
      }
      &:hover{
        img {
          border: 1px solid ${(props) => props.primary_color};
        }
      }
    }


  @media (max-width: 1400px){
    .portfolio__highlight{
      width:70%;
    }
    .portfolio__others{
      width:70%;
    }
  }

  @media (max-width: 1200px) {
    .portfolio__highlight-container1-col,
    .portfolio__highlight-container2-col {
      ${(props) => props.centeredFlex("flex", "column", "center", "center")}
    }

    .portfolio__highlight{
      width:50%;
    }
    .portfolio__others{
      width:70%;
    }
    .portfolio__highlight-container1-image{
      img:hover{
        transform: none;
      }
    }
    .portfolio__highlight-container1,
    .portfolio__highlight-container2{
      &-col1{
        margin-bottom: 20px;
      }
    }
  }
  @media (max-width: 992px){
    .portfolio__others-container-row1,
    .portfolio__others-container-row2,
    .portfolio__others-container-row3{
      &-col1,ul{
      text-align:center;
      }
    }
  }
  @media (max-width: 768px){
    .portfolio__highlight{
      width:70%;
    }
    .portfolio__others{
      width:80%;
    }
  }

  @media (max-width: 576px){
    .portfolio__highlight{
      width:90%;
    }
    .portfolio__others{
      width:100%;
    }
    .portfolio__others-container-row1,
    .portfolio__others-container-row2,
    .portfolio__others-container-row3{
      &-col2{
        padding:0;
      }
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

export default function Portfolio() {
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
    setActiveLink("PORTFOLIO");
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

      <Container className="portfolio__container" fluid>
        <Row className="portfolio__container-row">
          <Col
            xl={11}
            lg={12}
            md={12}
            xs={12}
            className="portfolio__container-row-col1"
          >
            <div className="portfolio__info">
              <button
                className="d-block d-xl-none menuToggleButton "
                onClick={handleShow}
              >
                <TfiMenu className="menu-icon" />
              </button>
              <div className="portfolio__info-title">
                <p>WORKS</p>
                <p>
                  MY<span> PORTFOLIO</span>
                </p>
              </div>
            </div>
            <hr></hr>
            <Row className="portfolio__highlight">
              <h1>HIGHLIGHT</h1>
              <Row className="portfolio__highlight-container1 ">
                <Col xl={6} className="portfolio__highlight-container1-col1">
                  <div className="portfolio__highlight-container1-image">
                    <img src={keep} alt="" />
                  </div>
                </Col>
                <Col xl={6} className="portfolio__highlight-container1-col2">
                  <ul>
                    <li>
                      <h3>Description:</h3>
                      <p>
                        The Keep Note project is a web application that enables
                        users to create, store, remove, modify, and customize
                        notes. It provides a simple and intuitive interface for
                        organizing and managing notes effectively.{" "}
                      </p>
                    </li>
                    <li>
                      <h3>Skills in use:</h3>
                      <Row className="p-3 skills">
                        <Col xl={6} lg={6} md={6} className="skill p-3">
                          <p>Sass</p>
                        </Col>
                        <Col xl={6} lg={6} md={6} className="skill p-3">
                          <p>Jquery</p>
                        </Col>
                        <Col xl={12} lg={12} md={6} className="skill p-3">
                          <p>Django</p>
                        </Col>
                        <Col xl={6} lg={6} md={6} className="skill p-3">
                          <p>Bootstrap</p>
                        </Col>
                        <Col xl={6} lg={6} md={6} className="skill p-3">
                          <p>PostgreSQL</p>
                        </Col>
                      </Row>
                    </li>
                    <li className="d-flex align-items-center justify-content-center">
                      <Nav.Link href="https://github.com/THP297/KeepNote">
                        <img src={github} alt="#github" width={50} />
                      </Nav.Link>
                      <Nav.Link href="https://keepnote-production.up.railway.app/">
                        <img src={live} width={50} alt="#demo" />
                      </Nav.Link>
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row className="portfolio__highlight-container2">
                <Col
                  xl={6}
                  lg={12}
                  md={12}
                  className="portfolio__highlight-container2-col1 order-xl-2"
                >
                  <div className="portfolio__highlight-container2-image">
                    <img src={chatapp} alt="" />
                  </div>
                </Col>
                <Col
                  xl={6}
                  lg={12}
                  md={12}
                  className="portfolio__highlight-container2-col2 order-xl-1"
                >
                  <ul>
                    <li>
                      <h3>Description:</h3>
                      <p>
                        Real time chatting with multiple chatroom. Feel free to
                        create any room for any specific topic then invite your
                        friends{" "}
                      </p>
                    </li>
                    <li>
                      <h3>Skills in use:</h3>
                      <p>
                        Frontend: <span>HTML,</span>{" "}
                        <span> Styled-Components</span>{" "}
                      </p>
                      <p>
                        <span>React-Bootstrap,</span> <span>Reactjs</span>{" "}
                      </p>
                      <p>
                        Backend: <span>Firebase</span>{" "}
                      </p>
                      <p>
                        Responsive: <span>Antd-Design</span>
                      </p>
                    </li>
                    <li>
                      <p>Demo Account: livedemo297@gmail.com</p>
                      <p>Demo Password: DemoAccount123@</p>
                    </li>
                    <li className="d-flex align-items-center justify-content-center">
                      <Nav.Link href="https://github.com/THP297/RealTimeChatApp">
                        <img src={github} alt="#github" />
                      </Nav.Link>
                      <Nav.Link href="https://chat-cijxka40t-thp297.vercel.app/">
                        <img src={live} alt="#demo" />
                      </Nav.Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Row>
            <Row className="portfolio__others">
              <h1>OTHERS</h1>
              <Container className="portfolio__others-container" fluid>
                <Row className="portfolio__others-container-row1">
                  <Col
                    xl={6}
                    lg={6}
                    md={12}
                    className="p-0 portfolio__others-container-row1-col1"
                  >
                    <img
                      className="portfolio__others-image"
                      src={todo}
                      alt="#todo"
                    />
                  </Col>
                  <Col
                    xl={6}
                    lg={6}
                    md={12}
                    className="portfolio__others-container-row1-col2"
                  >
                    <ul>
                      <li>
                        <h3>Description</h3>
                        <p>
                          A simple app to manage your tasks with adding,
                          removing and editing the task.
                        </p>
                      </li>
                      <li>
                        <h3>Skills in use:</h3>
                        <p>
                          <span>Reactjs</span> <span>SASS</span>
                        </p>
                      </li>
                      <li className="d-flex align-items-center justify-content-center">
                        <Nav.Link href="https://github.com/THP297/TodoApp">
                          <img src={github} alt="#github" width={50} />
                        </Nav.Link>
                        <Nav.Link href="https://todo-app-hazel-delta.vercel.app/">
                          <img src={live} width={50} alt="#demo" />
                        </Nav.Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row className="portfolio__others-container-row2">
                  <Col
                    xl={6}
                    lg={6}
                    md={12}
                    className="p-0 portfolio__others-container-row2-col1"
                  >
                    <img
                      className="portfolio__others-image"
                      src={weatherapp}
                      alt="#todo"
                    />
                  </Col>
                  <Col
                    xl={6}
                    lg={6}
                    md={12}
                    className="portfolio__others-container-row2-col2"
                  >
                    <ul>
                      <li>
                        <h3>Description</h3>
                        <p>
                          Weather application allow you to know the current
                          weather in every city in the world. You can get it by
                          typing the name of the full name of the city
                        </p>
                      </li>
                      <li>
                        <h3>Skills in use:</h3>
                        <p>
                          <span>Javascript</span> <span>CSS</span>{" "}
                          <span>HTML</span>
                        </p>
                      </li>
                      <li className="d-flex align-items-center justify-content-center">
                        <Nav.Link href="https://github.com/THP297/WeatherApp">
                          <img src={github} alt="#github" width={50} />
                        </Nav.Link>
                        <Nav.Link href="https://thp297.github.io/WeatherApp/">
                          <img src={live} width={50} alt="#demo" />
                        </Nav.Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row className="portfolio__others-container-row3">
                  <Col
                    xl={6}
                    lg={6}
                    md={12}
                    className="p-0 portfolio__others-container-row3-col1"
                  >
                    <img
                      className="portfolio__others-image"
                      src={calculator}
                      alt="#todo"
                    />
                  </Col>
                  <Col
                    xl={6}
                    lg={6}
                    md={12}
                    className="portfolio__others-container-row3-col2"
                  >
                    <ul>
                      <li>
                        <h3>Description</h3>
                        <p>
                          An ultimate calculator with beautiful user interface
                          and simple calculating let you to solve math faster.
                        </p>
                      </li>
                      <li>
                        <h3>Skills in use:</h3>
                        <p>
                          <span>Javascript</span> <span>CSS</span>{" "}
                          <span>HTML</span>
                        </p>
                      </li>
                      <li className="d-flex align-items-center justify-content-center">
                        <Nav.Link href="https://github.com/THP297/Calculator">
                          <img src={github} alt="#github" width={50} />
                        </Nav.Link>
                        <Nav.Link href="https://thp297.github.io/Calculator/">
                          <img src={live} width={50} alt="#demo" />
                        </Nav.Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row className="portfolio__others-container-row4">
                  <Col
                    xl={6}
                    lg={6}
                    md={12}
                    className="p-0 portfolio__others-container-row4-col1"
                  >
                    <img
                      className="portfolio__others-image"
                      src={movie}
                      alt="#todo"
                    />
                  </Col>
                  <Col
                    xl={6}
                    lg={6}
                    md={12}
                    className="portfolio__others-container-row4-col2"
                  >
                    <ul>
                      <li>
                        <h3>Description</h3>
                        <p>
                          A movie app allows users to select their preferred
                          movie genres, search for movies, receive
                          recommendations for related films, and watch trailers
                          of their chosen films
                        </p>
                      </li>
                      <li>
                        <h3>Skills in use:</h3>
                        <p>
                          <span>Javascript</span> <span>SASS</span>
                          <span>HTML</span>
                        </p>
                      </li>
                      <li className="d-flex align-items-center justify-content-center">
                        <Nav.Link href="https://github.com/THP297/Movie-App">
                          <img src={github} alt="#github" width={50} />
                        </Nav.Link>
                        <Nav.Link href="https://thp297.github.io/Movie-App/">
                          <img src={live} width={50} alt="#demo" />
                        </Nav.Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </Row>
          </Col>
          <Col xl={1} className="d-none d-xl-block h-100 p-0 ">
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
