import React from 'react'
import './styles/TodoCounter.css';
function TodoCounter({ total, completed }){
    const [counter, setCounter] = React.useState(0);
    return (
        <h2>
               
            You've <span> got the shit out </span>  <span className='numbers'> {completed}</span> of <span className='numbers'>{total} </span> Bitches

        </h2>
    );
}

export { TodoCounter }