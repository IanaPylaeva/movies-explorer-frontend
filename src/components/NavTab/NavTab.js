import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <dev className="nav-tab">
      <Link to="/signup" className="nav-tab__reg">Регистрация</Link>
      <Link to="/signin" className="nav-tab__auth">Войти</Link>
    </dev>
  )
}

export default NavTab;