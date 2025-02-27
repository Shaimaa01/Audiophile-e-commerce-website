import logo from "/assets/logo.png";

const Logo = () => {
  return (
    <div className="text-2xl font-bold text-orange-500 ">
      <a href="/">
        <img src={logo} alt="Company Name Logo"  />
      </a>
    </div>
  );
};

export default Logo;
