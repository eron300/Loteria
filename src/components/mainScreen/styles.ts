import { ReactElement } from "react";
import styled from "styled-components";
import {
  green,
  white,
  pink,
  orange,
  darkGreen,
  purple,
  beige,
} from "../../utils/colors";

interface LoterryColor {
  loterryColor?: string;
}

export const Container = styled.div<LoterryColor>`
  display: flex;
  height: 100vh;
  overflow: auto;
  background-color: ${({ loterryColor }: LoterryColor) =>
    loterryColor == "mega-sena"
      ? green
      : loterryColor == "quina"
      ? purple
      : loterryColor == "lotofácil"
      ? pink
      : loterryColor == "lotomania"
      ? orange
      : loterryColor == "timemania"
      ? darkGreen
      : loterryColor == "dia de sorte"
      ? beige
      : green};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10em;

  h1 {
    color: ${white};
    text-transform: capitalize;
  }

  p {
    color: ${white};
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 6em;
    padding: 1em;
  }
`;
