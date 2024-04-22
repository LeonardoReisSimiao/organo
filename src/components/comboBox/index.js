import './ComboBox.css'

const ComboBox = (props) => {
    return (
        <div className="combobox">
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ComboBox