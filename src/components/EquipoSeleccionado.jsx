import React from 'react';
import Suplentes from './Suplentes';
import Titulares from './Titulares';


//en este componente padre(contenido en app.js)vamos a tener dos componentes hijos(titulares y suplentes)
const EquipoSeleccionado = () => (
    <section>
        <Titulares />
        <Suplentes />
    </section>
)

export default EquipoSeleccionado