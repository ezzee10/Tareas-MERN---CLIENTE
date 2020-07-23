import React, { useEffect, useContext } from 'react';
import AuthContext from '../../context/autenticacion/authContext';


const Barra = () => {

    //Extraer la información de autenticación
    const authToken = useContext(AuthContext);
    const { usuarioAutenticado, usuario, cerrarSesion } = authToken;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, [])


    return (

        < header className="app-header" >

            {usuario ? <p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p> : null}


            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion btn-primario"
                    onClick={() => cerrarSesion()}
                >Cerrar Sesión</button>
            </nav>
        </header >
    );
}

export default Barra;