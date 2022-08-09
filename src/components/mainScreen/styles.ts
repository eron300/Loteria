import { ReactElement } from "react";
import styled from "styled-components";
import { LoterryColor } from "../../types/interfaces";
import {
  green,
  white,
  pink,
  orange,
  darkGreen,
  purple,
  beige,
} from "../../utils/colors";

export const Container = styled.div<LoterryColor>`
  display: flex;
  flex-grow: 1;
  flex-basis: auto;

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
  width: calc(100% / 2.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10em;
  padding: 1em;
  text-align: center;

  h1 {
    color: ${white};
    text-transform: capitalize;
    font-size: 2.8em;
  }

  p {
    color: ${white};
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 0;
    height: 40%;
    padding: 3.4em;

    h1 {
      font-size: 2em;
      margin-top: 0;
    }

    p {
      font-size: 0.8em;
    }
  }

  @media (max-height: 768px) {
    gap: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    padding-top: 14%;
    word-wrap: break-word;
    width: 80%;
  }

  img {
    width: 24%;
  }

  @media (max-width: 768px) {
    margin: 1em;
    flex-direction: column;
    gap: 0.5em;

    div {
      padding-top: 0;
      width: 100%;
    }
  }
`;
