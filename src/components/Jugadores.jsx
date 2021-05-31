import React from 'react';
//con este import me conecto al store
import { connect } from 'react-redux';


//componente jugadores con el cual voy a armar cada uno de ellos
const Jugadores = ({jugadores, agregarTitular, agregarSuplente}) => (
    <section>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores">
            {
                jugadores.map(j => (            
                    <article className="jugador" key={j.id}>
                        <img src={j.foto} alt={j.nombre} />
                        <h3>{j.nombre}</h3>
                        <div>
                            <button onClick={() => agregarTitular(j)}>Titular</button>
                            <button onClick={() => agregarSuplente(j)}>Suplente</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

//esta fc recibe un estado y con estado retorna un obj.
const mapStateToProps = state => ({
    jugadores: state.jugadores
})

//aca convertimos las funciones en props
const mapDispatchToProps = dispatch => ({

    agregarTitular(jugador) {
        //el obj dispatch es un action que lo va a recibir el reducer en store
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    },
    agregarSuplente(jugador) {
        dispatch({
            type: "AGREGAR_SUPLENTE",
            jugador
        })
    }

})

//connect es una fc que recibe mas funciones, la primera mapea lo que tengo en el 
//estado y lo convierte en props. la segunda mapea las acciones(dispatch) y tmb las
//convierte en props.(tmb pueden ser {} vacios)
export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)