import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ( {value} ) => {

    const [ counter, setCounter] = useState(value);

    const handleAdd = () => {
        // setCounter(counter + 1); // es usado cuando se conoce el nombre del parametro
        setCounter( (c) => c + 1 ); // es usado cuando se desconoce el nombre del parametro
    }

    const handleRest = () => {
        setCounter( counter - 1 );
    }

    const handleReset = () => {
        setCounter( value );
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            <button onClick = { handleAdd }> +1 </button>
            <button onClick = { handleRest }> -1 </button>
            <button onClick = { handleReset }> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}