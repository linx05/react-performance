import "./Nav.css";
import { NavLink } from "./Link";

export const Nav = () => (
  <nav className="Nav">
    <ul id="menu" className="nav-menu">
      <li>
        <NavLink to="rendering">Rendering</NavLink>
      </li>
      <li>
        <a href="#">Structure ￬</a>
        <ul className="hidden">
          <li>
            <NavLink to="structure/slow">Slow</NavLink>
          </li>
          <li>
            <NavLink to="structure/state-down">Move state down</NavLink>
          </li>
          <li>
            <NavLink to="structure/slow-higher-state">
              Slow higher state
            </NavLink>
          </li>
          <li>
            <NavLink to="structure/lift-content">Move content up</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">React API ￬</a>
        <ul className="hidden">
          <li>
            <NavLink to="react-api/memo">memo</NavLink>
          </li>
          <li>
            <NavLink to="react-api/use-memo">useMemo</NavLink>
          </li>
          <li>
            <NavLink to="structure/use-callback">useCallback</NavLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
);
