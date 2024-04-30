import { ContadorTareas } from './ContadorTareas';
import { BuscadorTareas } from './BuscadorTareas';
import { TareasLista } from './TareasLista';
import { TareasItems } from './TareasItems';
import { CrearTarea } from './CrearTarea';
import './App.css';
import React from 'react';

/* defaultTarea = [
  {text: 'Tarea N° 1', completado: false}, 
  {text: 'Tarea N° 2', completado: false},
  {text: 'ESTADOS', completado: true}
];*/

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if(localStorageItem){
    parsedItem = JSON.parse(localStorageItem);
  }else{
    localStorage.setItem(itemName, JSON.stringify([]));
    parsedItem = [];
  }

  const [item, setItem] = React.useState(parsedItem);

  const guardarItems = (nuevaItem) => {
    localStorage.setItem(itemName, JSON.stringify(nuevaItem));
    setItem(nuevaItem);
  };

  return [item, guardarItems];
}

function App() {

  
  const [searchValue, setSearchValue] = React.useState('');
    console.log(searchValue);
  const [tareas, guardarItems] = useLocalStorage('TODOS_V1', []);
  const tareasCompletadas = tareas.filter( tarea => !!tarea.completado).length;
  const tareasIncompletas = tareas.length - tareasCompletadas;
  const totalTareas = tareas.length;
  const tareasBuscadas = tareas.filter(
    (tarea) => {
      return tarea.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  );

  const completados = (text) => {
    const nuevasTareas = [...tareas];
    const indiceTarea = nuevasTareas.findIndex(
      (tarea) => tarea.text == text
    );
    nuevasTareas[indiceTarea].completado = true;
    guardarItems(nuevasTareas);
  };

  const borrarTarea = (text) => {
    const nuevasTareas = [...tareas];
    const indiceTarea = nuevasTareas.findIndex(
      (tarea) => tarea.text == text
    );
    nuevasTareas.splice(indiceTarea, 1);
    guardarItems(nuevasTareas);
  };

  

  return (
    <React.Fragment>
      <ContadorTareas hechos={tareasCompletadas} faltantes={tareasIncompletas}/>

      <BuscadorTareas 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TareasLista>
        {tareasBuscadas.map(tarea => (
        <TareasItems key={tarea.text}
                     text={tarea.text}
                     completado={tarea.completado}
                     onComplete = {() => completados(tarea.text)}
                     onDelete = {() => borrarTarea(tarea.text)}
                     />))}
      </TareasLista>

      <CrearTarea/>
    </React.Fragment>
  );
}


export default App;
