import "./ComboBox.css";

const ComboBox = (props) => {
  return (
    <div className="combobox">
      <label>{props.label}</label>
      <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.value}>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
