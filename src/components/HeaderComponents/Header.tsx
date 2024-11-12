import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonHeader from "./ButtonHeader/ButtonHeader";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="p-3 shadow-sm shadow-lightgray sm:px-5">
      <div className="flex items-center justify-between mx-auto md:max-w-[860px] xl:max-w-[1200px]">
        <Link
          href="/"
          className="flex items-center gap-1 cursor-pointer select-none transition-all duration-200 hover:scale-[.95]"
        >
          <FontAwesomeIcon
            icon={faGlobe}
            className="w-[30px] text-[30px] text-violet 
            sm:w-[40px] sm:text-[40px] 
            md:w-[50px] md:text-[50px]
            "
          />
          <p className=" text-2xl font-inknutAntiqua text-blackPage sm:text-[28px] md:text-[32px]">
            RB
          </p>
        </Link>

        <div className="flex gap-2 sm:gap-4">
          <ButtonHeader href="#" label="INICIAR SESIÓN" />
          <ButtonHeader href="#" label="REGISTRARSE" isPrimary />
        </div>
      </div>
    </header>
  );
};

export default Header;
