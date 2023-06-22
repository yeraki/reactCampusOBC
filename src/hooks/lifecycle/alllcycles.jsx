import React, { useEffect } from 'react';

const Alllcycles = () => {

    useEffect(() => {
        console.log("Componente creado")

        const intervalID = setInterval( () =>{
            document.title = `${new Date()}`
            console.log("Actualización de componente")
        }, 1000);

        return () => {
            console.log("Componente va a desaparecer")
            document.title = "tiempo detenido";
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default Alllcycles;
