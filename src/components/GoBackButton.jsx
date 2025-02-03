function GoBackButton() {
  return (
    <button
      className=" font-medium text-[15px] text-black opacity-[50%] hover:text-burnt-orange hover:opacity-[100%] xl:mt-[79px] max-xl:mt-[33px] xl:mb-[56px] max-xl:mb-[24px] xl:px-[165px] max-xl:px-[39px]"
      onClick={() => window.history.back()}
    >
      Go Back
    </button>
  );
}

export default GoBackButton;
