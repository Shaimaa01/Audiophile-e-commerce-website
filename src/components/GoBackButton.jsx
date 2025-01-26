function GoBackButton() {
  return (
    <button
      className=" font-medium text-[15px] text-black opacity-[50%] hover:text-burnt-orange hover:opacity-[100%] mt-[79px] mb-[56px]"
      onClick={() => window.history.back()}
    >
      Go Back
    </button>
  );
}

export default GoBackButton;
