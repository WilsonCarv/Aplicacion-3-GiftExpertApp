import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');//se utiliza para el actulaizar el campo de texto
    const handleInputChange = (e)=> {
        setInputValue( e.target.value);//se le coloca el valor que tenga el campo de texto en el momento que cambia
    }
    const handleSubmit = (e) =>{//Es el evento del formulario
        e.preventDefault();//para evitar que la pagina se refresque 
        if (inputValue.trim().length > 2) {
            setCategories(cats => [ inputValue,...cats]);  //se agrega el valor del input a las catergorias mediante la funcion pasada como argumento
            setInputValue('');  //limpia el campo de texto        
        }
        
    }
    return (
        <form onSubmit={handleSubmit}> 
            <input type="text"
            value={inputValue}
            onChange={handleInputChange}></input>
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
