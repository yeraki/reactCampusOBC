import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    //Creación de dos contadores distintos.

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    
    //Crear referencia useREF para asociar variable con elemento DOM
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
     * ?Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el stado del componente
     * se ehecuta aquello que esté dentro de useEffect
     */
    /* useEffect(() => {
        console.log('Cambio ESTADO de COMPONENTE');
        console.log(miRef);       
    });*/

    /**
     * ? Caso 2: Ejecutar SÓLO cuando cambie contador1 
     */

    /*useEffect(() => {
        console.log('Cambio ESTADO de COMPONENTE');
        console.log(miRef); 
    }, [contador1]);*/

    /**
     * ? Caso 3: Ejecutar SÓLO cuando cambie contador1 o contador2
     */

    useEffect(() => {
        console.log('Cambio ESTADO de COMPONENTE');
        console.log(miRef); 
    }, [contador1, contador2]);

    return (
        <div>
            <h1>Ejemplo de useState, useRef y useEffect</h1>
            <h2>CONTADOR 1: { contador1 }</h2>
            <h2>CONTADOR 2: { contador2 }</h2>
            <h4 ref= { miRef }>Ejemplo de elemento referenciado</h4>


            <div>
                <button onClick={incrementar1}>incrementar1</button>
                <button onClick={incrementar2}>incrementar2</button>
            </div>
            
        </div>
    );
}

export default Ejemplo2;
