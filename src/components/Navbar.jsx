import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <section>
        <div className="flex justify-center items-center px-20 py-8 bg-gray-900 text-white">
          <ul className="flex justify-between items-center gap-10">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link to={"/order"}>Order</Link>
            </li>
            <li>
              <Link to={"/sign-in"}>SignIn</Link>
            </li>
          </ul>
        </div>
        <div className="px-32 py-6">
          <Outlet></Outlet>
        </div>
      </section>
    </>
  );
}

export default Navbar;
