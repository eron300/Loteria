import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  urlConcursoById,
  urlLoterias,
  urlLoteriasConcursos,
} from "../utils/urlApi";

export const AuthContext = React.createContext<any>({});

export interface Loteria {
  id: number;
  nome: string;
}

export interface Concurso {
  loteriaId: number;
  concursoId: string;
}

export interface ConcursoId {
  data: string;
  id: string;
  loteria: number;
  numeros: string[];
}

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
  const [currentLottery, setCurrentLottery] = useState("");

  const GetConcurso = () => {
    axios
      .get(urlLoterias)
      .then((response) => {
        setLoterias(response.data);
      })
      .catch((error) => console.log(error));
  };

  const GetLoteriasConcurso = () => {
    axios
      .get(urlLoteriasConcursos)
      .then((response) => {
        setConcurso(response.data);
      })
      .catch((error) => console.log(error));
  };

  const GetConcursoById = (props: string) => {
    axios
      .get(`${urlConcursoById}/${props}`)
      .then((response) => {
        setConcursoId(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (concurso) {
      GetConcursoById(concurso[+value].concursoId);
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
      }}
    >
      {props.children} 
    </AuthContext.Provider>
  );
};
