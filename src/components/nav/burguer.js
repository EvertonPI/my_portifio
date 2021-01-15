import React, { useState } from "react";
import RightNav from "./RightNav";
import styled from "styled-components";

const BarNav = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  div {
    flex-flow: column nowrap;
    justify-content: space-around;
    display: flex;
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "	#f8f8ff" : "#2f4f4f")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default function burguer() {
  const { open, setOpen } = useState(true);
  const handleClick = () => {
    return setOpen(!open);
  };
  return (
    <>
      <BarNav open={open} onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </BarNav>
      <RightNav open={open} />
    </>
  );
}
