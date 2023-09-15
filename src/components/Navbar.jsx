import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="bg-white sm:flex sm:items-center sm:justify-between p-4 sticky top-0 z-40">
        <h1 className="ml-4 text-4xl font-semibold sm:justify-center ">BAMA</h1>
      <div className="w-full sm:w-auto flex items-center justify-center">
          <ul className="sm:flex sm:gap-4 m-3 text-2xl hidden">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;
