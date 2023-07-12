import React, { useState, useEffect } from 'react';

export const ClockFunctionComponent = () => {

 
  const [fecha, setFecha] = useState(new Date());
  const [edad, setEdad] = useState(0);
  const nombre = 'Martín';
  const apellidos = 'San José';

  useEffect(() => {
     const timerID = setInterval (
        () => tick(), 1000
     );
     return () => clearInterval (timerID);
  }, []);

  const tick = () => {
     setFecha(new Date());
     setEdad(prevState => prevState + 1);
  }

  return (
     <div>
        <h2>
           Hora Actual:
           {fecha.toLocaleTimeString()}
        </h2>
        <h3>{nombre} {apellidos}</h3>
        <h1>Edad: {edad}</h1>
     </div>
  )
}



