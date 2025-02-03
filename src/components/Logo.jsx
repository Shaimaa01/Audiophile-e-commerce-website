import logo from "/public/assets/logo.png";


const Logo = () => {
    return (
      <div className="text-2xl font-bold text-orange-500 ">
    
        <a href="/"><img src={logo} alt="Logo"/></a>
      </div>
    );
  };
  
  export default Logo;