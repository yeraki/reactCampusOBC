import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class'


const Bcomponent = ({ contacto }) => {
    return (
        <div>
            <h2>Nombre: { contacto.name }</h2>
            <h3>Apellido: { contacto.surname }</h3>
            <h4>Email: { contacto.email }</h4>
            <h4>Estado: { contacto.connected ? "Contacto En Línea":"Contacto No Disponible" }</h4>
        </div>
    );
};


Bcomponent.propTypes = {

    task: PropTypes.instanceOf(Contact),
};


export default Bcomponent;
