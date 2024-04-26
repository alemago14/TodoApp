import React from 'react';
import './BuscadorTareas.css';

function BuscadorTareas({searchValue, setSearchValue}){

    return(
        <input placeholder="Buscar Tarea..."
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {setSearchValue(event.target.value);}}>

        </input>
    );
}

export { BuscadorTareas };