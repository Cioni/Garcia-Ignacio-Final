import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes } from './utils/Routes';
import { THEME } from './utils/constants';
import { BsSun, BsCloudSunFill } from "react-icons/bs";
import { useGlobalContext } from './utils/global.context';
import { link } from './utils/Styles';

const useNavbar = () => {
  const {globalState: {theme, data}, dispatchGlobalState} = useGlobalContext()

  const handleThemeToggle = () => {  //maneja el cambio de tema
      dispatchGlobalState({
          type: "SWITCH_THEME",
          payload: theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
      })
  };

  const getLogoIcon = () => {
      if (theme === 'light') {
          return (
              <div>
                  <i className={BsSun}></i>
                  <i className={BsCloudSunFill}></i>
              </div>
          );
      } else if (theme === 'dark') {
          return (
              <div>
                  <i className={BsSun}></i>
                  <i className={BsCloudSunFill}></i>
              </div>
          );
      }
      return null;
  };

  const isDarkMode = theme === THEME.DARK ?? THEME.LIGHT
  const navbarClassName = `navbar ${theme}`;

  return {handleThemeToggle, getLogoIcon, isDarkMode, navbarClassName}
}

const Navbar = () => {
  const {globalState: {theme, data}} = useGlobalContext()
    const { handleThemeToggle, getLogoIcon, isDarkMode, navbarClassName } = useNavbar();
    const linkStyles = {
      color: isDarkMode ? 'white' : 'var(--color-fondo-dark)',
      ...styles.link
    };

    useEffect(() => {
      document.body.className = theme === "dark" ? "dark" : "light";
    }, [theme]);

    const iconSize = 30; // Tamaño del icono en píxeles
    const iconColor = isDarkMode ? 'black' : 'white'; // Color del icono
    const iconBackground = isDarkMode ? 'white' : 'black'; // Fondo del icono

    return (
      <nav className={navbarClassName} style={{ display: 'flex', justifyContent: 'flex-end' }} >
        <div style={styles.logoContainer}>
          {getLogoIcon()}
        </div>
        <div style={styles.linksContainer}>
          <Link to={routes.home} className={link} style={linkStyles}>Home</Link>
          <Link to={routes.favs} className={link} style={linkStyles}> Favs </Link>
          <Link to={routes.contact} className={link} style={linkStyles}>Contact</Link>
        </div>
        <div style={styles.themeToggleContainer}>
          <span className="toggle-icon" onClick={handleThemeToggle}>
             {isDarkMode ? (
              <BsSun style={{ fontSize: iconSize, color: iconColor, backgroundColor: iconBackground }} />
            ) : (
            <BsCloudSunFill style={{ fontSize: iconSize, color: iconColor, backgroundColor: iconBackground }} />
          )}
        </span>
      </div>
      </nav>
    );
  };


const styles = {
    navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem 1rem 2rem',
        width: '100vw',
    },
    logoContainer: {
        marginRight: '2rem',
    },
    linksContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '2rem',
    },
    link: {
        cursor: 'pointer',
        textDecoration: 'none',
        margin: '5px',
    },
    themeToggleContainer: {
        marginLeft: 'auto',
    },
};

export default Navbar;
