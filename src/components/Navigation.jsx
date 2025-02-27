import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav aria-label="Main Navigation">
      <ul className="flex uppercase gap-[34px] max-sm:gap-[16px] font-bold text-[13px] tracking-[2px] max-sm:flex-col max-sm:items-center">
        <li>
          <Link
            to="/"
            className={`transition-colors ${
              location.pathname === "/" ? "text-burnt-orange" : ""
            }`}
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/headphones"
            className={`transition-colors ${
              location.pathname === "/headphones" ? "text-burnt-orange" : ""
            }`}
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            Headphones
          </Link>
        </li>
        <li>
          <Link
            to="/speakers"
            className={`transition-colors ${
              location.pathname === "/speakers" ? "text-burnt-orange" : ""
            }`}
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            Speakers
          </Link>
        </li>
        <li>
          <Link
            to="/earphones"
            className={`transition-colors ${
              location.pathname === "/earphones" ? "text-burnt-orange" : ""
            }`}
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            Earphones
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
