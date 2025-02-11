import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className="header">
        <h1>Projects</h1>
        <Link to="/">Home</Link>
        <Link to="/pokemon-match">Pokemon Match</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
