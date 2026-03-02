import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  :root { color-scheme: dark; }

    body {
    margin: 0;
    background: radial-gradient(circle at top left, #0f1b3d, #0b1020 60%);
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    }

  /* Deixa títulos e textos mais legíveis */
  h1,h2,h3,h4,h5,h6 {
    color: ${({ theme }) => theme.colors.text};
  }

  /* Labels do Reactstrap estavam apagadas */
  label, .form-label {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.92;
    font-weight: 600;
  }

  /* Cards com mais contraste */
  .card {
    background: rgba(16, 26, 51, 0.92);
    border: 1px solid rgba(255,255,255,.14);
    box-shadow: ${({ theme }) => theme.shadow.soft};
    border-radius: ${({ theme }) => theme.radius.lg};
  }

  /* Inputs: texto e placeholder visíveis */
  .form-control, .form-select {
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.16);
    color: ${({ theme }) => theme.colors.text};
  }

  .form-control::placeholder,
  textarea.form-control::placeholder {
    color: rgba(232,238,252,.55);
  }

  /* Links do menu mais claros */
  .navbar .nav-link {
    color: rgba(232,238,252,.85) !important;
  }
  .navbar .nav-link.active {
    color: ${({ theme }) => theme.colors.text} !important;
    font-weight: 700;
  }

  .text-muted {
    color: rgba(232,238,252,.70) !important;
  }

  .btn-primary {
    background: linear-gradient(90deg, #3d8bfd, #1dd1a1);
    border: none;
    font-weight: 600;
    }

    .btn-primary:hover {
    opacity: 0.9;
    }
`;