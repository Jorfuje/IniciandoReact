import { useContext } from "react";
import { useForm } from "../hooks/useForm";
import { UsuarioContext } from "../context/UsuarioContext";

export const LoginScreen = () => {

    const initialForm = {
        nombre: '',
        tecnologia: '',
        mail: '',
        redes: ''
    }

    const { formState, nombre, tecnologia, mail, redes, onInputChange } = useForm(initialForm)

    const {setUsuario} = useContext( UsuarioContext )

    const onSubmit = (event) => {
        event.preventDefault()
        setUsuario(formState)
    }

  return (
    <>
      <form className="container" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={nombre}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tecnologia" className="form-label">
            Tecnología
          </label>
          <input
            type="text"
            className="form-control"
            name="tecnologia"
            value={tecnologia}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mail" className="form-label">
            Mail
          </label>
          <input
            type="text"
            className="form-control"
            name="mail"
            value={mail}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="redes" className="form-label">
            Redes
          </label>
          <input
            type="text"
            className="form-control"
            name="redes"
            value={redes}
            onChange={onInputChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Registrar Usuario
        </button>
      </form>
    </>
  );
};
