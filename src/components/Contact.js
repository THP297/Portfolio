import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { AiOutlineContacts } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { useEffect } from "react";
import "./SlideBackGround.css";

const WrapperStyled = styled.div`
  box-sizing: border-box;
  height: 100vh;
  background-color: ${(props) => props.background_color};
  margin: 0 auto;
  background-size: cover;
  overflow-y: hidden;

  .home__container,
  .home__container_row,
  .menu {
    width: ${(props) => props.width}%;
    height: ${(props) => props.height}%;
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
      margin: 60px;
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
`;

export default function Contact() {
  const background_color = "rgb(17, 17, 17)";
  const primary_color = "rgb(255, 180, 0)";
  const text_color = "white";
  useEffect(() => {
    const root = document.getElementById("root");
    document.body.style.overflowY = "hidden";
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide-background");
    root.appendChild(slideDiv);
    slideDiv.addEventListener("animationend", () => {
      root.removeChild(slideDiv);
    });
  }, []);
  return (
    <WrapperStyled
      width={100}
      height={100}
      primary_color={primary_color}
      text_color={text_color}
      background_color={background_color}
    >
      <Container className="home__container" fluid>
        <Row className="home__container_row">
          <Col xl={11}></Col>
          <Col xl={1} className="h-100 p-0">
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
                <li>
                  <p>CONTACT</p>
                  <a href="/contact">
                    <AiOutlineContacts />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </WrapperStyled>
  );
}
