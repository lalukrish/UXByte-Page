

const ButtonComponent = ({ change }) => {
  return (
    <>
      <button
        className="bg-black p-4 text-white"
        onClick={() => {
          console.log("object");
          // change();
        }}
      >
        click me
      </button>
    </>
  );
};
export default ButtonComponent;
