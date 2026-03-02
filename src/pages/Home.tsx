import { Button, Card, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import banner from "../assets/banner.png";

const Hero = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  margin-top: 16px;

  .img {
    height: 220px;
    background: url(${banner}) center/cover no-repeat;
  }

    .content {
    padding: 20px;
    background: linear-gradient(
        180deg,
        rgba(16,26,51,0.85) 0%,
        rgba(16,26,51,0.95) 100%
    );
    }

  h1 {
    margin: 0 0 6px 0;
    font-size: 1.6rem;
  }
`;

export function Home() {
  const nav = useNavigate();

  return (
    <>
      <Hero>
        <div className="img" />
        <div className="content">
          <h1>Bem-vindo 👋</h1>
          <div className="text-muted">
            Faça um check-in rápido. O app demonstra rotas, ciclo de vida, formulários com Reactstrap,
            validação e styled-components com tema.
          </div>

          <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Button color="primary" onClick={() => nav("/checkin")}>
              Fazer check-in
            </Button>
            <Button outline color="light" onClick={() => nav("/lista")}>
              Ver lista
            </Button>
          </div>
        </div>
      </Hero>

      <Card className="mt-3">
        <CardBody>
          <strong>Como funciona:</strong>
          <div className="text-muted" style={{ marginTop: 6 }}>
            Você cadastra nome, e-mail e tipo do evento (select vindo de JSON). O formulário valida os dados e
            salva no navegador (localStorage). Depois você visualiza a lista em cards.
          </div>
        </CardBody>
      </Card>
    </>
  );
}