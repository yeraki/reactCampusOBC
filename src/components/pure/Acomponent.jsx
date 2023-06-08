import React from 'react';
import { Contact } from '../../models/contact.class'
import Bcomponent from '../container/Bcomponent'

const Acomponent = () => {

    const firstContact = new Contact("Pedro", "Fleitas", "pedrofleitas@gmail.com", true);

    return (
        <div>
            <div>
                <h1>Your contact:</h1>
            </div>
            <Bcomponent contacto={firstContact}></Bcomponent>
            
        </div>
    );
}

export default Acomponent;
