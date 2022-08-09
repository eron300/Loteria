import React, { ReactElement, useContext, useEffect, useState } from "react";
import { CircleWithNumber } from "../circleWithNumber/circle";

import { Container, Sidebar, Title } from "./styles";
import { Dropdown } from "../dropdown/dropdown";
import { AuthContext } from "../../providers/auth";
import Logo_Sena from "../../img/Logo_Sena.svg";

export function MainScreen(): ReactElement {
  const { concursoId, currentLottery, loading } = useContext(AuthContext);
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
    <>
      <Container loterryColor={currentLottery}>
        <Sidebar>
          <Dropdown />
          <Title>
            <img src={Logo_Sena} />
            <div>
              <h1 data-testid="title">{currentLottery}</h1>
            </div>
          </Title>
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
    </>
  );
}
