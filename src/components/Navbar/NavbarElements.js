import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    backgroundL #ffb3ff;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) /2);
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%
    cursor: pointer;
    text-decoration: none;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
