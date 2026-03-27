const Button = ({ children, ...props }) => {
  return (
    <button
      className="
  py-4 
  px-8 
  font-semibold 
  uppercase 
  rounded
  text-stone-900 
  bg-amber-400 
  border-none 
  hover:bg-amber-500
  "
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
