/**
 * Ejemplo  uso método componentwillunmount 
 */

import React, { Component, useEffect } from 'react'

export class willunmount extends Component {

    componentWillUnmount(){
        console.log("comportamiento antes de que el componente desaparezca")
    }
  render() {
    return (
      <div>
        <h1>willunmount</h1>
      </div>
    )
  }
}

export const Willunmount = () => {

    useEffect(() => {
        //no ponemos nada aquí
        return () => {
            console.log("comportamiento antes de que el componente desaparezca")
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}
