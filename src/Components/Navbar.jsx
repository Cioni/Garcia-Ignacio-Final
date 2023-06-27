import React from 'react'
import { useContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom/dist'
import { FaRegLightbulb, FaLightbulb  } from 'react-icons/fa';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useContextGlobal()
  const changeTheme = () => {
    !localStorage.getItem('theme') && localStorage.setItem('theme', state.theme)
    localStorage.getItem('theme') === 'light'
      ? dispatch({type: localStorage.getItem('theme'), payload: 'dark'})
      : dispatch({type: localStorage.getItem('item'), payload: 'light'})
  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to='/'>
        <h3 className='logo-nav'><span>Odonto</span></h3>  
      </Link>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/favs'>Favs</Link>
        <button onClick={changeTheme}
        className='btn-theme'>
          {state.theme === "dark"
          ? <FaRegLightbulb />
          : <FaLightbulb />
          }
        </button>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    </nav>
  )
}

export default Navbar