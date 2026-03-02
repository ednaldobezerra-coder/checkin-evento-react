import { NavLink as RRNavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const BrandWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 52px;
    height: 52px;
    object-fit: contain;
    border-radius: 12px;
    flex-shrink: 0;
  }

  span {
    font-weight: 800;
    letter-spacing: 0.2px;
    font-size: 1.25rem;
    line-height: 1;
  }
`;

export function AppHeader() {
  return (
    <Navbar
        expand="md"
        dark
        style={{
            borderBottom: "1px solid rgba(255,255,255,.12)",
            background: "linear-gradient(90deg, rgba(11,16,32,1) 0%, rgba(16,26,51,0.95) 100%)",
            backdropFilter: "blur(6px)",
            paddingTop: 14,
            paddingBottom: 14,
        }}
        >
      <Container className="container-narrow">
        <NavbarBrand tag={RRNavLink} to="/">
          <BrandWrap>
            <img src={logo} alt="Logo" />
            <span>Check-in de Evento</span>
          </BrandWrap>
        </NavbarBrand>

        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to="/" end>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/checkin">
              Check-in
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/lista">
              Lista
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}