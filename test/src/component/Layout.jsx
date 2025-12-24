const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <div>this nav </div>
      </nav>
      <main>{children}</main>
      <footer>
        <div>this is footer</div>
      </footer>
    </div>
  );
};

export default Layout;
