import styled from "styled-components";
import Link from "next/link";

const NavLink = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  li {
    color: #ebcd21;
    margin: 0 2rem;
    font-size: 1.8rem;
  }
`;
const routes = [
  { path: "/", label: "Products" },
  { path: "/", label: "Contacts" },
];
function RightNav({ open }) {
  return (
    <NavLink open={open}>
      {routes.map(({ path, label }, idx) => (
        <Link key={idx} href={path}>
          <li>{label}</li>
        </Link>
      ))}
    </NavLink>
  );
}
export default RightNav;
