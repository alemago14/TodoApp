import './TareasLista.css';

function TareasLista(props){
    return(
        <ul className="TodoList">
            {props.children}
        </ul>
    );
}

export { TareasLista };