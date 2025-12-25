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
      <footer className="bg-gray-800">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg text-white">Logo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                nihil. Cum, possimus vero eos porro aspernatur nam assumenda
                impedit? Asperiores?
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg text-white">Careers</h3>
            <ul className="flex flex-col gap-8">
              <li>Join us</li> <li>Our culture</li> <li>Help center</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-white">Products</h3>
            <ul className="flex flex-col gap-8">
              <li>Pricing</li> <li>Features</li> <li>Support</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
