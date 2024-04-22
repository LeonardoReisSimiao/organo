import Botao from "../botao";
import CampoTexto from "../campoTexto/CampoTexto";
import ComboBox from "../comboBox";
import "./Formulario.css";
import { useState } from "react";

const Formulario = () => {
  
  const times = [
    "Front-End",
    "Back-End",
    "Banco de Dados",
    "Redes de Computadores",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setimagem] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form foi submetido =>", nome, cargo, imagem);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome..."
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo..."
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite a url da sua imagem..."
          valor={imagem}
          aoAlterado={valor => setimagem(valor)}
        />
        <ComboBox obrigatorio={true} label="Times" itens={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
