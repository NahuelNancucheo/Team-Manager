import { createStore } from 'redux';

//vamos a defninir el estado inicial
const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Juan Carlitos",
        foto: "https://images.unsplash.com/photo-1583083339018-3bcc8514c932?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    {
        id: 2,
        nombre: "Cosme Fulanito",
        foto: "https://images.unsplash.com/photo-1622077650859-c547c8cd1f76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    {
        id: 3,
        nombre: "Luis Marcelinho",
        foto: "https://images.unsplash.com/photo-1613053341193-2b7f654c155f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    }],
    titulares: [],
    suplentes: []
}

//mi func reductora recibe 2 parametros: el estado actual y 
//un obj action(nos indica que cambios debemos efectuar en el estado)(los obj dispatch de mapdispatchtoprops)
const reducerEntrenador = (state = initialState, action) => {
    //si es agregar titular, lo tengo que agregar al array de titulares del estado inicial
    if(action.type === "AGREGAR_TITULAR") {
        return {
            //va a tener todo lo que ya tiene el estado
            ...state,
            //y ademas leo lo que ya tiene ese state de titulares y le concateno
            //el action(jugador ene ste caso) que me llega
            titulares: state.titulares.concat(action.jugador),
            //aca le digo que en jugadores solo permanezcan los que tienen diferentes id
            //del jugador que llego por action.
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "AGREGAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            //quiero que permanezca en titulares lo que sean diferentes al action que le llega(action.jugador.id) 
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            //luego le concateno la action a los jugadores
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if(action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

//esto exporta la funcion reductora que vamos a crear aca.
export default createStore(reducerEntrenador)