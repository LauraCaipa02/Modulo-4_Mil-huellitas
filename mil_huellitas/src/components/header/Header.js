import './Header.css';
import Logo from './img/logo.png';

function Header(){
    return (
    <header class="Header">
        <nav>
            <div class="nav__logo">
                <img src={Logo} alt="" class="nav__logo--img" />
                <p class="nav__logo--text"> Mil<br/>huellitas</p>
            </div>

            <input type="checkbox" id="check" />
            <label for="check" class="bar__btn">
                <i class="fa-solid fa-bars"></i>
            </label>

            <ul class="nav__menu">
                <li><a href="../../index.html">INICIO</a></li>
                <li><a href="../adopcion/adopcion.html">ADOPCIÓN</a></li>
                <li><a href="../donacion/donacion_economica.html">DONACIÓN</a></li>
                <li><a href="../blog/blog.html">BLOG</a></li>
                <li><a href="../aliados/aliados.html">ALIADOS</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;