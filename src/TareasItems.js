import './TareasItems.css'

function TareasItems(props){
    return(
      <li className="TodoItem">
        <span 
          className={`Icon Icon-check ${props.completado && "Icon-check--active"}`}
          onClick={props.onComplete}
          >V
        </span>
        <p className={`TodoItem-p ${props.completado && "TodoItem-p--complete"}`}>{ props.text }</p>
        <span 
          className="Icon Icon-delete"
          onClick={props.onDelete}
          >X
        </span>
      </li>
    );
  }

export {TareasItems};