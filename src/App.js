import { ContadorTareas } from './ContadorTareas';
import { BuscadorTareas } from './BuscadorTareas';
import { TareasLista } from './TareasLista';
import { TareasItems } from './TareasItems';
import { CrearTarea } from './CrearTarea';
import './App.css';
import React from 'react';

const defaultTarea = [
  {text: 'Tarea N° 1', completado: false}, 
  {text: 'Tarea N° 2', completado: false},
  {text: 'ESTADOS', completado: true}
];

function App() {

  const [searchValue, setSearchValue] = React.useState('');
    console.log(searchValue);
  const [tareas, setTareas] = React.useState(defaultTarea);
  const tareasCompletadas = tareas.filter( tarea => !!tarea.completado).length;
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
    setTareas(nuevasTareas);
  };

  const borrarTarea = (text) => {
    const nuevasTareas = [...tareas];
    const indiceTarea = nuevasTareas.findIndex(
      (tarea) => tarea.text == text
    );
    nuevasTareas.splice(indiceTarea, 1);
    setTareas(nuevasTareas);
  };

  return (
    <React.Fragment>
      <ContadorTareas hechos={tareasCompletadas} faltantes={totalTareas}/>

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
