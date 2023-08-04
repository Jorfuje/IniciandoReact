import { useReducer } from "react"
import { useForm } from "../hooks/useForm"

const inicialState = [{
    id: new Date().getTime(),
    tarea: 'Explicar Reducer',
    finalizada: false
}]

// const editarTarea = {
//     type: '[TAREAS] Editar Tarea',
//     payload: nuevaTarea
// }

// const eliminarTarea = {
//     type: '[TAREAS] Eliminar Tarea',
// }

// const eliminarTareas = {
//     type: '[TAREAS] Borrar Tareas',
// }

const tareaReducer = (state = inicialState, action = {}) => {

    switch (action.type) {
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload]
        case '[TAREAS] Finalizar Tarea':
            return state.map(tarea => {
                if(tarea.id === action.payload){
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada
                    }
                } return tarea 
            })
        case '[TAREAS] Eliminar Tarea':
            return state.filter(tarea => tarea.id !== action.payload)
        case '[TAREAS] Borrar Tareas':
            return []
        default:
            return state
    }
}

export const ListaTareas = () => {

    const [tareasState, dispatch] = useReducer(tareaReducer, inicialState)

    const {tarea, formState, onInputChange} = useForm({tarea:''})

    const agregarTarea = (event) => {
        event.preventDefault()
        if (formState.tarea == '') return 
        const tarea ={
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREAS] Agregar Tarea',
            payload: tarea
        } 
        dispatch(action)
    }

    const finalizarTarea = ({id}) => {
        const action = {
            type: '[TAREAS] Finalizar Tarea',
            payload: id
        }
        dispatch(action)
    }

    const eliminarTarea = ({id}) => {
        const action = {
            type: '[TAREAS] Eliminar Tarea',
            payload: id
        }
        dispatch(action)
    }

    const reset = () => {
        const action = {
            type: '[TAREAS] Borrar Tareas',
            payload: ''
        }
        dispatch(action)
    }

  return (
    <>
    <form onSubmit={agregarTarea}>
    <div className="form-group">
      <input 
        type="text" 
        className="form-control" 
        id="tarea" 
        name="tarea" 
        placeholder="Ingresatarea" 
        value={tarea}
        onChange={onInputChange}
    />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>
  </form>

  <hr />
  <ul className="list-group">
    {tareasState.map(item => {
        return (
            <li key={item.id} className="list-group-item d-flex justify-content-between">
                <span>{item.tarea}</span>
                <div>
                <input 
                    type="checkbox" 
                    value={item.finalizada}
                    onChange={() => finalizarTarea(item)}
                />
                <button 
                    className="btn btn-danger"
                    onClick={() => eliminarTarea(item)}
                >
                    Borrar
                </button>
                </div>
            </li>
        )
    })}
  </ul>
  </>
  )
}
