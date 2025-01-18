import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="flex uppercase gap-[34px] font-bold text-[13px] tracking-[2px]">
        <li>
          <Link
            to="/"
            className={`transition-colors ${
              location.pathname === "/"
                ? "text-burnt-orange"
                : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/headphones"
            className={`transition-colors ${
              location.pathname === "/headphones"
                ? "text-burnt-orange"
                : ""
            }`}
          >
            Headphones
          </Link>
        </li>
        <li>
          <Link
            to="/speakers"
            className={`transition-colors ${
              location.pathname === "/speakers"
                ? "text-burnt-orange"
                : ""
            }`}
          >
            Speakers
          </Link>
        </li>
        <li>
          <Link
            to="/earphones"
            className={`transition-colors ${
              location.pathname === "/earphones"
                ? "text-burnt-orange"
                : ""
            }`}
          >
            Earphones
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
