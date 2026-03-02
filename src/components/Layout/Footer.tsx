import { Container } from "reactstrap";
import styled from "styled-components";

const Foot = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 16px 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
`;

export function AppFooter() {
  return (
    <Foot>
      <Container className="container-narrow">
        <div>
          React • Rotas • Reactstrap • Styled-components • Validação • JSON Select
        </div>
      </Container>
    </Foot>
  );
}