import React from 'react';
import './styles/TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}){
    const getSearchValue  = (event) => {
        setSearchValue(event.target.value);
        console.log(searchValue);
    }
    return (
        <input 
            className='TodoSearch' 
            placeholder="Ingrese la tarea a buscar" 
            onChange={ getSearchValue }/>
    );
}

export {TodoSearch}