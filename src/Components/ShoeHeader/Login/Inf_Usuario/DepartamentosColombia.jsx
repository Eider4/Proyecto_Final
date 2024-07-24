import React, { useState } from "react";
import { departamentosColombia } from "./DepartamensColombia/departamentosColombia";

const DepartamensColombia = ({
  departamento,
  municipio,
  manejarActualizarPerfil,
}) => {
  const [selectedDepartamento, setSelectedDepartamento] =
    useState(departamento);
  const [municipios, setMunicipios] = useState([]);

  const handleDepartamentoChange = (e) => {
    const departamento = e.target.value;
    setSelectedDepartamento(departamento);
    manejarActualizarPerfil({
      target: { name: "departamento", value: departamento },
    });
    const selected = departamentosColombia.find(
      (d) => d.departamento === departamento
    );
    setMunicipios(selected ? selected.municipios : []);
    manejarActualizarPerfil({ target: { name: "municipio", value: "" } });
  };

  const handleMunicipioChange = (e) => {
    const municipio = e.target.value;
    manejarActualizarPerfil({
      target: { name: "municipio", value: municipio },
    });
  };

  return (
    <div>
      <label htmlFor="departamento">Departamento:</label>
      <select
        id="departamento"
        value={selectedDepartamento}
        onChange={handleDepartamentoChange}
      >
        <option value="">Selecciona un departamento</option>
        {departamentosColombia.map((d, index) => (
          <option key={index} value={d.departamento}>
            {d.departamento}
          </option>
        ))}
      </select>

      <label htmlFor="municipio">Municipio:</label>
      <select
        id="municipio"
        value={municipio}
        onChange={handleMunicipioChange}
        disabled={!selectedDepartamento}
      >
        <option value="">Selecciona un municipio</option>
        {municipios.map((m, index) => (
          <option key={index} value={m}>
            {m}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DepartamensColombia;
