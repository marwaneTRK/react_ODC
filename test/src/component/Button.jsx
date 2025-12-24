const Button = ({ children, onClick, variant = "primary" }) => {
  return (
    <button
      onClick={onClick}
      className={`w-64 px-4 py-2 ${
        variant == "primary" ? "bg-blue-600" : "bg-red-600"
      } text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
