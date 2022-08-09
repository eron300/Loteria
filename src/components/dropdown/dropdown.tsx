import { ReactElement, SetStateAction, useState, useContext } from "react";
import { AuthContext, Loteria } from "../../providers/auth";
import { Select } from "./styles";

export function Dropdown() {
  const { loterias, setValue, setCurrentLottery } = useContext(AuthContext);

  const handleChange = (event: {
    target: {
      value: any;
      selectedIndex: any;
      childNodes: { [x: string]: any };
    };
  }) => {
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const option = el.getAttribute("id");
    setValue(option);
    setCurrentLottery(event.target.value);
  };

  return (
    <div>
      <Select data-testid="select" onChange={handleChange}>
        {loterias?.map((item: Loteria) => (
          <option
            data-testid={"id" + item.id.toString()}
            id={item.id.toString()}
            key={item.id}
          >
            {item.nome}
          </option>
        ))}
      </Select>
    </div>
  );
}
