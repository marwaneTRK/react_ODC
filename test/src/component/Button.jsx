const Button = ({ children, onClick, variant = "bg-primary-800" }) => {
  return (
    <button onClick={onClick} className={`w-36  py-2 ${variant} text-white`}>
      {children}
    </button>
  );
};

export default Button;
