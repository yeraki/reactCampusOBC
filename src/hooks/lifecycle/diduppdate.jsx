/**
 * Ejemplo uso método componentDidUpdate en componente clase
 */

import React, { Component, useEffect } from 'react'

export class diduppdate extends Component {

    componentDidUpdate(){
        console.log("Comportamiento cuando el componente recibe nuevos props")
    }

  render() {
    return (
      <div>diduppdate</div>
    )
  }
}

export const DiduppdateHook = () => {

    useEffect(() => {
        console.log("Comportamiento cuando el componente recibe nuevos props")
        
    },);
    return (
        <div>
            <div>diduppdate</div>
        </div>
    );
}


