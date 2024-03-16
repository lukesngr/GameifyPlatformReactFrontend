import { Link } from "react-router-dom";

export default function Navbar() {
    return (<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Gameify</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link to="/" class="nav-link">User Home</Link>
        </li>
        <li class="nav-item">
            <Link to="/superuser" class="nav-link">Superuser Home</Link>
        </li>
      </ul>
    </div>
  </nav>)
}