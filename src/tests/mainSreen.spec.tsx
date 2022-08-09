import { render, screen, waitFor } from "@testing-library/react";
import { MainScreen } from "../components/mainScreen/mainScreen";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { AuthProvider } from "../providers/auth";

it("When the screen to render should appear the Title", () => {
  render(<MainScreen />);

  const title = screen.getByTestId("title");
  screen.logTestingPlaygroundURL();
  expect(title).toBeInTheDocument();
});

it("When the screen to render should appear the Dropdown", async () => {
  render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );
  const select = await screen.getByTestId("select");
  userEvent.click(select);

  expect(select).toBeInTheDocument();
});

import { GetConcurso } from "../../mocks/axiosMock";
const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

var axiosMock = new MockAdapter(axios);

it("Get values of api, response xxios", async () => {
  var dataMock = [
    {
      id: 0,
      nome: "mega-sena",
    },
    {
      id: 1,
      nome: "quina",
    },
    {
      id: 2,
      nome: "lotofácil",
    },
    {
      id: 3,
      nome: "lotomania",
    },
    {
      id: 4,
      nome: "timemania",
    },
    {
      id: 5,
      nome: "dia de sorte",
    },
  ];

  axiosMock.onGet().reply(200, dataMock);
  const firstOption = await GetConcurso();
  expect(firstOption).toEqual("mega-sena");
});
