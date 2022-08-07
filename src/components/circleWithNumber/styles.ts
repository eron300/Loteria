import styled from "styled-components";
import { black, gray, white } from "../../utils/colors";

export const ContainerCircle = styled.div`
  display: flex;
  background-color: ${gray};
  align-items: center;
  gap: 2em;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  float: right;
  border-top-left-radius: 120px 50%;
  border-bottom-left-radius: 120px 50%;
  padding: 1em;

  @media (max-width: 768px) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 120px 10%;
    border-top-right-radius: 120px 10%;
    height: 100vh;
  }
`;
export const Circle = styled.div`
  display: flex;
  background-color: ${white};
  border-radius: 70%;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 4em;
  height: 4em;
  font-weight: bold;
  font-size: 1.8em;

  @media (max-width: 768px) {
    font-size: 1.4em;
  }
`;
