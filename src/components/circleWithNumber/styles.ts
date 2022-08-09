import styled from "styled-components";
import { gray, white } from "../../utils/colors";

export const ContainerCircle = styled.div`
  display: flex;
  background-color: ${gray};
  align-items: center;
  gap: 2em;
  justify-content: center;
  flex-wrap: wrap;
  float: right;
  border-top-left-radius: 120px 50%;
  border-bottom-left-radius: 120px 50%;
  padding: 1em;
  width: 100%;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 120px 10%;
    border-top-right-radius: 120px 10%;
    overflow-y: scroll;
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
  margin: 0.5em;

  @media (max-width: 768px) {
    font-size: 1.4em;
  }
`;
