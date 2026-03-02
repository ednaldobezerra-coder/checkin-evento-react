import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import styled from "styled-components";
import { AppHeader } from "./Header";
import { AppFooter } from "./Footer";

const Main = styled.main`
  padding: 22px 0 40px;
`;

export function Layout() {
  return (
    <>
      <AppHeader />
      <Main>
        <Container className="container-narrow">
          <Outlet />
        </Container>
      </Main>
      <AppFooter />
    </>
  );
}