import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <section className="nav-tab">
      <Link to="/signup" className="nav-tab__reg">Регистрация</Link>
      <Link to="/signin" className="nav-tab__auth">Войти</Link>
    </section>
  )
}

export default NavTab;