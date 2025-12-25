import Button from "./Button";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-100 shadow-md">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Logo</h1>
            <div className="flex justify-end items-center">
              <ul className="flex justify-end items-center gap-6  mr-7">
                <li>
                  <a href="#" className="text-green-800 font-semibold">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-800 font-semibold">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-800 font-semibold">
                    About
                  </a>
                </li>
              </ul>
              <Button onClick={(e) => {}}>Login</Button>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer>
        <div></div>
      </footer>
    </div>
  );
};

export default Layout;
