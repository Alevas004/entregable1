import "./Button.css"

const Button = ({handlerClick}) => {
  return (
    <button className="switch_btn" onClick={handlerClick}>
        <i className='bx bx-refresh switch_btn'></i>
    </button>
  )
}

export default Button