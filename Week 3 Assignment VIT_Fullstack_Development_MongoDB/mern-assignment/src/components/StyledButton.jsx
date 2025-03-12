const StyledButton = () => {
  const handleClick = () => console.log("Button clicked!");

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
    >
      Click Me
    </button>
  );
};

export default StyledButton;
