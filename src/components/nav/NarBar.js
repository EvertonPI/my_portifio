import React from "react";
import Link from "next/link";
import Burguer from "./burguer";
import styled from "styled-components";

const Navegation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid green;
  width: 100%;
  height: 7rem;

  a {
    color: #2f4f4f;
    margin-left: 2rem;
    font-size: 1.9rem;
  }
  a:hover {
    margin-bottom: 1rem;
    transition: margin-bottom 0.5s;
  }
`;

export default function NarBar() {
  return (
    <Navegation>
      <Link href="/">
        <a>Everton Souza</a>
      </Link>
      <Burguer />
    </Navegation>
  );
}
