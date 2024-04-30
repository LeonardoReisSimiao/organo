import { useState } from "react";
import Banner from "./components/banner/Banner";
import Formulario from "./components/formulario";
import Time from "./components/time";
import { SpeedInsights } from "@vercel/speed-insights/react"


<SpeedInsights/>

function App() {
  const times = [
    { nome: "Front-End", corPrimaria: "#D9F7E9", corSecundaria: "#57C278" },
    { nome: "Back-End", corPrimaria: "#E8F8FF", corSecundaria: "#82CFFA" },
    {
      nome: "Banco de Dados",
      corPrimaria: "#F0F8E2",
      corSecundaria: "#A6D157",
    },
    {
      nome: "Redes de Computadores",
      corPrimaria: "#FDE7E8",
      corSecundaria: "#E06B69",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;
