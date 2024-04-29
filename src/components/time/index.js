import Colaborador from "../colaborador";
import "./time.css";

const Time = (props) => {
  return (
    <section className="time" style={{ backgroundColor: props.corPrimaria }}>
      <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
      <div className="colaboradores">
      {props.colaboradores.map((colaborador) => (
        <Colaborador
          nome={colaborador.nome}
          cargo={colaborador.cargo}
          imagem={colaborador.imagem}
        />
      ))}
      </div>
    </section>
  );
};

export default Time;
