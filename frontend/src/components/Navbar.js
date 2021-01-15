import {

  Link
} from "react-router-dom";

function Navbar() {
  return (
    <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">Instagram</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/signin">SignIn</Link></li>
        <li><Link to="/signUp">SignUp</Link></li>
        <li><Link to="/createpost">Create Post</Link></li>
      </ul>
    </div>
  </nav>

  );
}

export default Navbar;
