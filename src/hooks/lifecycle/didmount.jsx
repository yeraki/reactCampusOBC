/**
 * Ejemplo Uso Método ciclo de vida en comp. clase y Hooks
 */

import React, { Component, useEffect } from 'react';

export class Didmount extends Component {

    componentDidMount(){
        console.log("comportamiento ANTES de que el componente se renderice")
    }
    render() {
        return (
            <div>
                <h1>Didmount</h1>
            </div>
        );
    }
}


export const DidmountHook = () => {

    useEffect(() => {
        console.log("comportamiento ANTES de que el componente se renderice")

    }, []);
    return (
        <div>        
            <h1>Didmount</h1>
        </div>
    );
}





