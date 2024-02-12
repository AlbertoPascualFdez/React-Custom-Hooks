import { useState } from "react";

/**
 * Hook que gestiona los campos d eun formulario y los cambios en ellos.
 * Los campos del formulario deben tener un name que identifique al campo, y en value una variable con el valor
 * ej: const {username, password, OnInputChange} = useForm({username:"", password:""})
 *   
 * input type="text" name="username" value={username} placeholder="Nombre" onChange={onInputChange}
 * 
 * input type="password" name="password" value={password} placeholder="Nombre" onChange={onInputChange}
 * 
 * El handle del submit debe ser controlado por el componente que use este hook
 * 
 * @param {*} initialForm  Objeto con los atributos del formulario. Son los campos del formulario identificados por {name: value, name2: value2.....}
 * @returns 
 */
export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = (e) =>{
        const {name, value} = e.target;
        setFormState({...formState, [name]:value})
    }

    const onResetForm = (e) =>{
       
        setFormState(initialForm);
    }


    return  {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
      }
}
