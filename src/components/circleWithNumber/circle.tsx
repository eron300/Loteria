import { useContext } from "react";
import { AuthContext } from "../../providers/auth";
import { Circle, ContainerCircle } from "./styles";

export function CircleWithNumber() {
  const { concursoId } = useContext(AuthContext);

  return (
    <ContainerCircle>
      {concursoId?.numeros.map((item: string) => (
        <Circle key={item}>{item}</Circle>
      ))}
    </ContainerCircle>
  );
}
