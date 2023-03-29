import { Container, Row, Col, NavLink, Nav, Offcanvas } from "react-bootstrap";
import styled from "styled-components";
import "./SlideBackGround.css";
import React, { useEffect, useState } from "react";
import { AppContext } from "./AppProvider";

import { BsArrowRight, BsFillHouseDoorFill } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { AiOutlineContacts } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { TfiMenu } from "react-icons/tfi";

import avatar from "../images/avatar.jpg";

const WrapperStyled = styled.div`
  box-sizing: border-box;
  height: 100vh;
  background-color: ${(props) => props.background_color};
  margin: 0 auto;
  background-size: cover;
  overflow-y: hidden;
  overflow-x: hidden;

  .home__container,
  .home__container_row,
  .home__avatar,
  .home__introduce,
  .menu {
    width: ${(props) => props.width}%;
    height: ${(props) => props.height}%;
  }

  .home__avatar {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      width: 50%;
      height: 40px;
      left: 30%;
      background-color: rgb(17, 17, 17);
      clip-path: polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%);
    }

    &::after {
      position: absolute;
      content: "";
      width: 30%;
      height: 40px;
      background-color: rgb(17, 17, 17);
      top: calc(100% - 40px);
      left: 50%;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 5% 100%);
    }

    img {
      width: 70%;
      height: ${(props) => props.height}%;
      border-left: 40px solid rgb(255, 180, 0);
      border-top: 40px solid rgb(255, 180, 0);
      border-bottom: 40px solid rgb(255, 180, 0);
    }
  }
  .home__introduce {
    ${(props) => props.centeredFlex()}
  }
  .home__introduce-element {
    margin-bottom: 20px;
  }
  .home__introduce-name {
    font-size: 40px;
    color: ${(props) => props.primary_color};
  }
  .home__introduce-description {
    text-align: center;
    font-size: 30px;
    color: ${(props) => props.text_color};
  }
  .home__introduce-about-wrapper {
    display: inline-flex;
  }
  .home__introduce-about {
    padding: 0;
    background-image: linear-gradient(
      to right,
      ${(props) => props.primary_color},
      ${(props) => props.primary_color}
    );
    background-repeat: no-repeat;
    background-size: 200% 100%; /* double the width to create space for the slide */
    transition: background-position 0.3s ease-out;
    font-size: 20px;
    font-weight: bold;
    padding-left: 20px;
    border: 1px solid ${(props) => props.primary_color};
    border-radius: 60px;
    color: "black";

    &:hover {
      color: white;
      background-position: -100% 0; /* slide the background to the left by 100% (i.e. its full width) */
      .right-arrow {
        background-color: ${(props) => props.primary_color};
      }
    }
  }

  .right-arrow {
    background-color: ${(props) => props.background_color};

    font-size: 50px;
    color: ${(props) => props.text_color};
    border-radius: 100%;
  }

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

  @media (max-width: 992px) {
    .home__introduce {
      width: 70%;
      align-items: start;
      justify-content: start;
    }
    .home__container {
      height: 60%;
    }
    .home__avatar {
      &::before,
      &::after {
        display: none;
      }

      img {
        border-radius: 30%;
        border: 5px solid grey;
        width: 30%;
      }
    }

    .home__container_row {
      div {
        ${(props) => props.centeredFlex("flex", "column", "none", "center")}
        margin-bottom:5%;
      }
    }
  }

  @media (max-width: 1200px) {
    .home__container {
      display: flex;
      align-items: center;
      &_row {
        height: 70%;
      }
    }
  }
  @media (max-width: 576px) {
    .home__avatar {
      img {
        width: 55%;
      }
    }
  }

  @media (max-width: 786px) {
    .home__container {
      display: flex;
      align-items: center;
      &_row {
        height: 50%;
      }
    }
    .home__introduce {
      &-name {
        font-size: 30px;
      }
      &-description {
        font-size: 20px;
      }
      &-about {
        font-size: 15px;
      }
    }
  }
  .menu-icon {
    font-size: 50px;
  }
  .menuToggleButton {
    position: absolute;
    top: 20px;
    right: 20px;
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

export default function Home() {
  const { show, setShow, activeLink, setActiveLink } =
    React.useContext(AppContext);

  console.log(activeLink);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const background_color = "rgb(17, 17, 17)";
  const primary_color = "rgb(255, 180, 0)";
  const text_color = "white";

  useEffect(() => {
    setActiveLink("HOME");
    const root = document.getElementById("root");
    document.body.style.overflowY = "hidden";
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide-background");
    root.appendChild(slideDiv);
    slideDiv.addEventListener("animationend", () => {
      root.removeChild(slideDiv);
    });
  }, []);

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

  return (
    <>
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
                <LiStyled
                  className={activeLink === "PORTFOLIO" ? "active" : ""}
                >
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
        <button
          className="d-block d-lg-none menuToggleButton "
          onClick={handleShow}
        >
          <TfiMenu className="menu-icon" />
        </button>
        <Container className="home__container" fluid>
          <Row className="home__container_row">
            <Col xl={6} lg={6} md={12} xs={12} className="h-100 p-0">
              <div className="home__avatar">
                <img src={avatar} alt="#avatar"></img>
              </div>
            </Col>
            <Col xl={5} lg={5} md={12} xs={12} className="h-100 p-0">
              <div className="home__introduce">
                <p className="home__introduce-element home__introduce-name">
                  -- I'm Tran Hoang Phu <br /> A Web developer{" "}
                </p>
                <p className="home__introduce-element home__introduce-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem impedit quam atque qui distinctio suscipit ad
                  quibusdam vitae doloremque reiciendis!
                </p>
                <div className="home__introduce-element home__introduce-about-wrapper">
                  <Nav.Link className="home__introduce-about" href="/about">
                    More About Me <BsArrowRight className="right-arrow" />
                  </Nav.Link>
                </div>
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
    </>
  );
}
