//Entender uso PROPS.Children

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo CHILDREN PROPS</h1>
            <h2>
                Nombre: { props.nombre }
            </h2>

            { props.children }
        </div>
    );
}

export default Ejemplo4;
