import React, { useState } from 'react';

const Ejemplo1 = () => {

    //Valor Inicial para contador
    const vInicial = 0;

    //Valor inicial para persona
    const pInicial = {
        nombre: 'Lolo',
        email: 'lolo@gmail.com'
    }

    /**El Valor Inicial y PErsona Inicial debeen ser parte del estado del componente */

    const [contador, setContador] = useState(vInicial);
    const [persona, setPersona] = useState(pInicial);

    /** Función para actualizar el estado prinvado que contiene contador */
    function upContador (){

        setContador( contador + 1 );
    }

    /** */
    function updatePersona(){

        setPersona(
            {
                nombre: 'Pablo',
                email: 'pablo@gmail.com',
            }
        )
    }

    return (
        <div>
            <h1>***Ejemplo de USESTATE***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>INFO PERSONA</h2>
            <h3>NOMBRE: { persona.nombre }</h3>
            <h3>EMAIL:  { persona.email }</h3>

            <div>
                <button onClick={ upContador } >Incrementar Contador</button>
                <button onClick={ updatePersona } >Actualizar Persona</button>
                
            </div>
        </div>
    );
}

export default Ejemplo1;
