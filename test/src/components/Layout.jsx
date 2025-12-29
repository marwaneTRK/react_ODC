import { useContext } from "react";
import { Button } from "./Button";
import { AuthContext } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
export function Layout({ children }) {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/login");
  }
  return (
    <>
      <nav className="bg-gray-100 shadow-md">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Logo</h1>
            <div className="flex justify-end items-center gap-8">
              <ul className="flex justify-end items-center gap-8">
                <li>
                  <Link to="/" className="text-green-800 font-semibold">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-green-800 font-semibold">
                    Contact
                  </a>
                </li>
                <li>
                  <Link to="/about" className="text-green-800 font-semibold">
                    About
                  </Link>
                </li>
              </ul>
              {user == null ? (
                <Button onClick={handleLogin} variant="bg-primary-200">
                  Login
                </Button>
              ) : (
                <p>Bonjour : {user.name}</p>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="bg-gray-800">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8 p-12">
            <div>
              <h3 className="text-lg text-white">Logo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adip isicing elit. Dicta
                dignissimos harum repudian
              </p>
            </div>
            <div>
              <h3 className="text-lg text-white"> Carrers </h3>
              <ul className="flex flex-col gap-8">
                <li>Join us</li> <li>Our culture</li> <li>Help center</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-white">Products</h3>
              <ul className="flex flex-col gap-8">
                <li>Pricing</li> <li>features</li> <li>Support</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
