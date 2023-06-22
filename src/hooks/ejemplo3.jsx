/**
 * Ejemplo HOOKS:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns @returns Componente 1
 * Disponible de un contexto que va a tener un valor que recibe del padre
 */

const miContexto = React.createContext(null);
    
const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>El token es: { state.token }</h1>

            {/*Pintamos Componente 2 */}
            <Componente2></Componente2>
            
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>La sesión es: {state.sesion}</h2>
        </div>
    );
}


export default function MiComponenteContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    const [sessiondata, setsessionData] = useState(estadoInicial);

    function actualizarSesion (){
        setsessionData({token: 'JWT123456789', sesion: sessiondata.sesion + 1})
        
    }

  return (
    <miContexto.Provider value={ sessiondata }>
        <h1>Ejemplo useState y useContext</h1>
        <Componente1></Componente1>
        <button onClick={ actualizarSesion }>Actualizar sesión</button>


    </miContexto.Provider>

  )
}



