import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Link to="/">
        <img src="/images/logo.svg" alt="logo" />
      </Link>
      <Menu>
        <Link to="/">Model S</Link>

        <Link to="/">Model 3</Link>

        <Link to="/">Model X</Link>

        <Link to="/">Model Y</Link>
      </Menu>
      <RightMenu>
        <Link to="/">Shop</Link>
        <Link to="/"> Account</Link>
        <Link to="/" onClick={() => setShow(true)}>
          Menu
        </Link>
      </RightMenu>
      <BurgerNav show={show}>
        <CloseWrapper>
          <svg
            onClick={() => setShow(false)}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z"
              fill="currentColor"
            ></path>
          </svg>
        </CloseWrapper>
        <li>
          <Link to="/">Existing Inventory</Link>
        </li>
        <li>
          <Link to="/">Trade-in </Link>
        </li>

        <li>
          <Link to="/">Used Inventory</Link>
        </li>
        <li>
          <Link to="/">Cybertruck</Link>
        </li>
        <li>
          <Link to="/">Roadster</Link>
        </li>
        <li>
          <Link to="/">Trade-in </Link>
        </li>

        <li>
          <Link to="/">Used Inventory</Link>
        </li>
        <li>
          <Link to="/">Cybertruck</Link>
        </li>
        <li>
          <Link to="/">Roadster</Link>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  min-height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    /* font-weight: 600; */
    /* text-transform: uppercase; */
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  a {
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
  z-index: 10;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    width: 40px;
    cursor: pointer;
  }
`;
