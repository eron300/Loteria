import React, { useContext, useEffect, useState } from "react";
import { CircleWithNumber } from "../circleWithNumber/circle";

import { Container, Sidebar } from "./styles";
import { Dropdown } from "../dropdown/dropdown";
import { AuthContext } from "../../providers/auth";

import Logo_Sena from "../../img/Logo_Sena.svg";

export function MainScreen() {
  const { concursoId, currentLottery } = useContext(AuthContext);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    if (concursoId) {
      const date = concursoId?.data?.split("T")[0].split("-");
      setYear(date[0]);
      setMonth(date[1]);
      setDay(date[2]);
    }
  }, [concursoId]);

  return (
    <Container loterryColor={currentLottery}>
      <Sidebar>
        <Dropdown />
        <div style={{ display: "flex", gap: "1em", alignItems: "center" }}>
          <img src={Logo_Sena} />
          <h1>{currentLottery}</h1>
        </div>
        <div />
        <p>
          CONCURSO
          <br />
          <b>
            {concursoId &&
              concursoId.id + " - " + day + " / " + month + " / " + year}
          </b>
        </p>
      </Sidebar>
      <CircleWithNumber />
    </Container>
  );
}
