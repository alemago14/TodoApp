import './TareasItems.css'
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

function TareasItems(props){
    return(
      <li className="TodoItem">
        <span 
          className={`Icon Icon-check ${props.completado && "Icon-check--active"}`}
          onClick={props.onComplete}
          ><FaRegSquareCheck></FaRegSquareCheck>
        </span>
        <p className={`TodoItem-p ${props.completado && "TodoItem-p--complete"}`}>{ props.text }</p>
        <span 
          className="Icon Icon-delete"
          onClick={props.onDelete}
          ><FaX></FaX>
        </span>
      </li>
    );
  }

export {TareasItems};