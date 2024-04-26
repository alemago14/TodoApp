import './ContadorTareas.css';

function ContadorTareas({hechos, faltantes}){
  return(
    <h1 className='Titulo'>Tareas hechas <span>{hechos}</span>. Faltan <span>{faltantes}</span></h1>
  );
}

export { ContadorTareas };