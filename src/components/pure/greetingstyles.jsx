import React, { useState } from 'react';

//Definiendo estilos en constantes::

const loggedStyle = {
    color: 'blue'
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}


const Greetingstyles = (props) => {

    //Generar Estado para cmpte y controlarlo
    const [logged, setLogged] = useState(false);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            {logged ? (<p>Hola, { props.name }</p>) : (<p>Please Login </p>)}

            
            <button onClick={()=>{
                console.log('Botón Pulsado');
                setLogged(!logged);
            } }>
            {logged ? 'logout' : 'login' }</button>
            
        </div>
    );
}

export default Greetingstyles;
