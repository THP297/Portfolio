import { Col, Row, Container, Nav, NavLink, Offcanvas } from "react-bootstrap";
import React, { useEffect } from "react";
import "./SlideBackGround.css";
import { AppContext } from "./AppProvider";
import styled from "styled-components";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { AiOutlineContacts } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { TfiMenu } from "react-icons/tfi";

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
  }

  .menu-icon {
    font-size: 50px;
  }
  .menuToggleButton {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  box-sizing: border-box;
  height: 100vh;
  background-color: ${(props) => props.background_color};
  margin: 0 auto;
  background-size: cover;
  overflow-x: hidden;

  .home__container,
  .home__container_row,
  .menu {
    width: ${(props) => props.width}%;
    height: ${(props) => props.height}%;
  }
  .home__container_row {
    margin: 0 auto;
  }

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

  // --------------------------------------------OTHERS-------------------------------------------------

  .portfolio__others {
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

    .container {
      ${(props) => props.centeredFlex()}
    }
    &-image {
      width: 350px;
      transition: width 0.5s ease-in-out;
      &:hover {
        width: 380px;
      }
    }

    &-row1,
    &-row2,
    &-row3 {
      font-size: 30px;
      margin: 20px 0px 20px 0px;
      width: 60%;
      ${(props) => props.centeredFlex("flex", "row", "space-between", "center")}
    }
    a img {
      width: 50px;
    }

    a {
      transition: border 1s ease-in-out, border-radius 1s ease-in-out;
    }

    a:hover {
      border: 1px solid ${(props) => props.primary_color};
      border-radius: 5px;
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
    margin-bottom: 150px;
    ${(props) => props.centeredFlex()}

    &-container1,
    &-container2 {
      ${(props) => props.centeredFlex("flex", "row", "center")}
      margin: 20px 0px 20px 0px;
      li {
        margin: 20px 0px 20px 0px;
      }

      li h3 {
        color: ${(props) => props.primary_color};
      }
      li p {
        color: ${(props) => props.text_color};
      }
    }

    .colDescription1 {
      li:not(:first-child) p {
        display:flex;
      }

      font-size: 30px;
      float: left;
      width: 80%;
      li {
        p {
          margin: 20px 0px 20px 0px;
        }
      }
    }
    .colDescription2 {
      li:not(:first-child) p {
        display: flex;
        align-items: center;
      }
      font-size: 30px;

      float: right;
      width: 80%;
      li:not(:first-child) {
        p {
          margin: 35px 0px 35px 0px;
        }
      }
      li:first-child {
        h3 {
          margin-bottom: 20px;
        }
      }
    }

    span {
      border: 5px solid white;
      padding: 8px;
    }
    img {
      width: 50px;
    }
    a {
      transition: border 1s ease-in-out, border-radius 1s ease-in-out;
    }
    a:hover {
      border: 1px solid ${(props) => props.primary_color};
      border-radius: 5px;
    }
  }

  .portfolio__highlight-image1 {
    transition: margin 1s ease-in-out, transform 1s ease-in-out;
    text-align: right;

    img {
      width: 550px;
      float: right;
      transition: width 0.5s ease-in-out, margin 0.5s ease-in-out;
      border-radius: 20px;
      height: 100%;
      border: 5px solid ${(props) => props.primary_color};

      &:hover {
        width: 600px;
      }
    }
  }

  .portfolio__highlight-image2 {
    transition: padding 1s ease-in-out, transform 1s ease-in-out;
    position: relative;

    img {
      border-radius: 20px;
      width: 70%;
      border: 5px solid ${(props) => props.primary_color};
      transition: width 0.5s ease-in-out, margin 0.5s ease-in-out;

      &:hover {
        width: 75%;
      }
    }
  }

  @media (max-width: 1400px) {
    .portfolio__others {
      &-row1,
      &-row2,
      &-row3 {
        width: 70%;
        font-size: 25px;
      }
    }
    .portfolio__highlight {
      .colDescription1,
      .colDescription2 {
        width: 80%;
        font-size: 25px;


        span {
          margin: 5px 2px 5px 2px;
        }
      }
    }

    .portfolio__highlight-image1 {
      img {
        width: 550px;
      }
    }
    .portfolio__highlight-image2 {
      img {
        width: 80%;
      }
    }
    .portfolio__highlight {
      .colDescription2 {
        width: 100%;
      }
    }
  }

  @media (max-width: 1200px) {
    .portfolio__others {
      &-row1,
      &-row2,
      &-row3 {
        width: 80%;

      }
    }
    .portfolio__highlight {
      .colDescription1,
      .colDescription2 {
        width: 50%;
        text-align: center;

        li:not(:first-child) p {
          justify-content:center;          
        }
        
        li:last-child {
          justify-content: center;
        }

        span {
          margin: 5px 2px 5px 2px;
        }
      }
    }
    .portfolio__highlight-container1,
    .portfolio__highlight-container2 {
      margin: 70px 0px 0px 0px;
      div {
        ${(props) => props.centeredFlex()}
      }
    }

    .portfolio__highlight-image1 {
      img {
        width: 500px;
      }
    }
    .portfolio__highlight-image2 {
      width: 100%;
      img {
        width: 50%;
      }
    }

    .portfolio__highlight-container1:hover .colDescription1 {
      margin: 0 0 0 0;
    }
    .portfolio__highlight-container2:hover .colDescription2 {
      margin: 0 0 0 0;
    }
    .portfolio__highlight-image2,
    .portfolio__highlight-image1 {
      img {
        &:hover {
          margin: 0 0 50px 0;
          transform: scale(1.1);
        }
      }
    }
  }
  @media (max-width: 992px) {
    .portfolio__others {
      &-row1,
      &-row2,
      &-row3 {
        ul {
          width: 60%;
          li{
            ${(props) => props.centeredFlex()}
            
          }
          li:last-child{
            flex-direction:row;
          }
          p{
            text-align:center;
          }
        }
        div {
          margin: 20px 0px 20px 0px;
          ${(props) => props.centeredFlex()}
        }
      }
    }

    .portfolio__highlight {
      .colDescription1,
      .colDescription2 {
        width: 60%;

    }
  }
  @media (max-width: 768px) {
    .portfolio__highlight-image2 {
      width: 100%;
      img {
        width: 60%;
      }
    }
    .portfolio__highlight {
      .colDescription1,
      .colDescription2 {
        width: 80%;
        font-size;20px;
      }
    }
    .portfolio__others {
      &-row1,
      &-row2,
      &-row3 {
        ul {
          width: 70%;
          font-size:20px;
        }

      }
    }
  }
  @media (max-width: 576px) {
    .portfolio__highlight-image1 {
      img {
        width: 300px;
        &:hover {
          width: 330px;
        }
      }
    }
    .portfolio__highlight-image2 {
      width: 100%;
      img {
        width: 80%;
        &:hover {
          width: 90%;
        }
      }
    }
    .portfolio__highlight {
      .colDescription1,
      .colDescription2 {
        width: 100%;
        font-size: 15px;
      }
    }
    .portfolio__others {
      &-row1,
      &-row2,
      &-row3 {
        ul {
          width: 100%;
          font-size: 15px;
          li:last-child{
            display:flex;
          }
        }
        div {
          margin: 20px 0px 20px 0px;
          ${(props) => props.centeredFlex()}
        }
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

      <Container className="home__container" fluid>
        <Row className="home__container_row">
          <Col xl={11} lg={12} md={12} xs={12}>
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
                <Col xl={6}>
                  <div className="portfolio__highlight-image1">
                    <img src={movie} alt="" />
                  </div>
                </Col>
                <Col xl={6}>
                  <ul className="colDescription1">
                    <li>
                      <h3>Description:</h3>
                      <p>
                        A movie app allows users to select their preferred movie
                        genres, search for movies, receive recommendations for
                        related films, and watch trailers of their chosen films{" "}
                      </p>
                    </li>
                    <li>
                      <h3>Skills in use:</h3>
                      <p>
                        <span>HMTL</span> <span>CSS</span>{" "}
                        <span>JAVASCRIPT</span> <span>BOOTSTRAP 5</span>{" "}
                      </p>
                    </li>
                    <li className="d-flex">
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
              <Row className="portfolio__highlight-container2">
                <Col xl={6} lg={12} md={12} className="Col2 order-xl-2">
                  <div className="portfolio__highlight-image2">
                    <img src={chatapp} alt="" />
                  </div>
                </Col>
                <Col xl={6} lg={12} md={12} className="Col1 order-xl-1">
                  <ul className="colDescription2">
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
                        Frontend: <span>HTML</span>{" "}
                        <span>Styled-Components</span>{" "}
                      </p>
                      <p>
                        <span>React-Bootstrap</span> <span>Reactjs</span>{" "}
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
                    <li className="d-flex">
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
              <Container>
                <Row className="portfolio__others-row1">
                  <Col xl={6} lg={6} md={12}>
                    <img
                      className="portfolio__others-image"
                      src={todo}
                      alt="#todo"
                    />
                  </Col>
                  <Col xl={6} lg={6} md={12}>
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
                          <span>Reactjs</span> <span>SCSS</span>
                        </p>
                      </li>
                      <li className="d-flex">
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
                <Row className="portfolio__others-row2">
                  <Col xl={6} lg={6} md={12}>
                    <img
                      className="portfolio__others-image"
                      src={weatherapp}
                      alt="#todo"
                    />
                  </Col>
                  <Col xl={6} lg={6} md={12}>
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
                      <li className="d-flex">
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
                <Row className="portfolio__others-row3">
                  <Col xl={6} lg={6} md={12}>
                    <img
                      className="portfolio__others-image"
                      src={calculator}
                      alt="#todo"
                    />
                  </Col>
                  <Col xl={6} lg={6} md={12}>
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
                      <li className="d-flex">
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
