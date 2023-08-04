import { useState } from "react"

export const AgregarTarea = ({agregarTarea}) => {

    const [inputValue, setinputValue] = useState('')
    const onInputChange = (event) => {
        setinputValue(event.target.value) 
    }
    const onSubmit = (event) => {
        // Primer forma con la funcion recibida
        /* const envio = {
            nombre: inputValue,
            visto: false
        }
        event.preventDefault()
        agregarTarea(tareas =>[...tareas, envio]) */

        // Segunda forma, recibiendo una fución
        event.preventDefault()
        agregarTarea(inputValue)
    }
  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Ingresa tarea nueva"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
