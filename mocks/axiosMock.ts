import axios from "axios";

export async function GetConcurso() {
  const response = await axios.get(
    "https://brainn-api-loterias.herokuapp.com/api/v1/loterias"
  );
  return response.data[0].nome;
}
