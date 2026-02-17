import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;

  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  .wrapper {
    width: min(1100px, 92%);
    margin: 0 auto;
  }

  .flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .burger {
    appearance: none;
    border: 0;
    background: transparent;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    width: 48px;
    height: 48px;
    border-radius: 14px;

    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.04);

    transition:
      transform 120ms ease,
      background 120ms ease,
      border-color 120ms ease;
  }

  .burger:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 80, 80, 0.35);
    transform: translateY(-1px);
  }

  .burger svg {
    display: block;
  }

  @media (min-width: 900px) {
    .burger {
      display: none;
    }
  }
`;
