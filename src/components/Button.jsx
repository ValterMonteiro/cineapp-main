import './Button.css'
export function Button(props) {
    return (
        <button className={`btn ${props.variant}`}>{props.text}</button>
    )
}