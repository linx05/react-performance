import "./Nav.css";
import { NavLink } from "./Link";

export const Nav = () => (
  <nav className="Nav">
    <ul id="menu" className="nav-menu">
      <li>
        <NavLink to="rendering">Rendering</NavLink>
      </li>
      <li>
        <a href="#">React Performance Profiling ￬</a>
        <ul className="hidden">
          <li>
            <NavLink to="profiling/dev-tools">DevTools</NavLink>
          </li>
          <li>
            <NavLink to="profiling/profiler">Profiler API</NavLink>
          </li>
        </ul>
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
            <NavLink to="structure/lift-content">Move content up</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">memo() ￬</a>
        <ul className="hidden">
          <li>
            <NavLink to="memo/base">Base</NavLink>
          </li>
          <li>
            <NavLink to="memo/memo">memo</NavLink>
          </li>
          <li>
            <NavLink to="memo/is-equal">memo with is equal</NavLink>
          </li>
          <li>
            <NavLink to="memo/object-prop">memo with object prop</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">useMemo() ￬</a>
        <ul className="hidden">
          <li>
            <NavLink to="use-memo/base">Base</NavLink>
          </li>
          <li>
            <NavLink to="use-memo/memo">useMemo()</NavLink>
          </li>
          <li>
            <NavLink to="use-memo/object-prop">
              useMemo() for object props
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
);
