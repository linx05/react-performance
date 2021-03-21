import "./Nav.css";

export const Nav = () => (
  <nav className="Nav">
    <ul id="menu" className="nav-menu">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About ￬</a>
        <ul className="hidden">
          <li>
            <a href="#">Who We Are</a>
          </li>
          <li>
            <a href="#">What We Do</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">Portfolio ￬</a>
        <ul className="hidden">
          <li>
            <a href="#">Photography</a>
          </li>
          <li>
            <a href="#">Web &amp; User Interface Design</a>
          </li>
          <li>
            <a href="#">Illustration</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">News</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
);
