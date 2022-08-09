import axios from "axios";
import React, { useEffect, useState } from "react";
import { Concurso, ConcursoId, Loteria } from "../types/interfaces";
import {
  urlConcursoById,
  urlLoterias,
  urlLoteriasConcursos,
} from "../utils/urlApi";

export const AuthContext = React.createContext<any>({});

export const AuthProvider = (props: {
  children:
    | string
    | boolean
    | number
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [loterias, setLoterias] = useState<Array<Loteria>>();
  const [concurso, setConcurso] = useState<Array<Concurso>>();
  const [concursoId, setConcursoId] = useState<ConcursoId>();
  const [value, setValue] = useState("");
  const [currentLottery, setCurrentLottery] = useState("Mega-Sena");
  const [loading, setLoading] = useState(false);

  const GetConcurso = async () => {
    await axios
      .get(urlLoterias)
      .then((response) => {
        setLoterias(response.data);
      })
      .catch((error) => console.log(error));
  };

  const GetLoteriasConcurso = async () => {
    await axios
      .get(urlLoteriasConcursos)
      .then((response) => {
        setConcurso(response.data);
        setLoading(true);
      })
      .catch((error) => console.log(error));
  };

  const GetConcursoById = async (props: string) => {
    await axios
      .get(`${urlConcursoById}/${props}`)
      .then((response) => {
        setConcursoId(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (concurso) {
      GetConcursoById(concurso[+value].concursoId);
    } else {
      GetConcursoById("2359");
    }
  }, [value]);

  useEffect(() => {
    GetConcurso();
    GetLoteriasConcurso();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loterias,
        setLoterias,
        concurso,
        setConcurso,
        value,
        setValue,
        concursoId,
        currentLottery,
        setCurrentLottery,
        loading,
      }}
    >
      {props.children} 
    </AuthContext.Provider>
  );
};
