import React, { useState } from "react";
import LOGO from "../../assets/LOGO.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = useNavigate();

  const handleReDirect = () => {
    navigation("/cart");
  };

  const handleReDirectHome = () => {
    navigation("/");
  };

  return (
    <div className="shadow-sm">
      <div className="h-8 bg-black text-white text-center">
        <p className="p-2 text-sm">FREE SHIPPING ON WHEN YOU ORDER 2+</p>
      </div>
      <nav className="flex items-center p-4 relative">
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu size={24} />
        </div>

        <ul
          className={`lg:flex gap-4 ${
            isOpen ? "block" : "hidden"
          } absolute top-12 left-0 bg-white shadow-md p-4 w-full lg:static lg:w-auto lg:shadow-none`}
        >
          <li className="cursor-pointer hover:underline font-bold">Shop</li>
          <li className="cursor-pointer hover:underline font-semibold">FAQ</li>
          <li className="cursor-pointer hover:underline font-semibold">
            Contact
          </li>
        </ul>

        <img
          src={LOGO}
          alt="LOGO"
          className="absolute left-1/2 transform -translate-x-1/2 w-[170px] h-[34px]"
          onClick={handleReDirectHome}
        />

        <div className="cursor-pointer ml-auto" onClick={handleReDirect}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 19 22"
            fill="none"
            className="hover:scale-110 transition-transform"
          >
            <path
              d="M6.67333 17.7853C6.36875 17.7853 6.07101 17.8831 5.81775 18.0663C5.5645 18.2495 5.36712 18.5099 5.25056 18.8146C5.134 19.1192 5.1035 19.4545 5.16292 19.7779C5.22234 20.1014 5.36902 20.3985 5.58439 20.6316C5.79976 20.8648 6.07416 21.0236 6.37289 21.088C6.67162 21.1523 6.98127 21.1193 7.26267 20.9931C7.54406 20.8669 7.78458 20.6532 7.9538 20.379C8.12301 20.1048 8.21333 19.7824 8.21333 19.4526C8.21333 19.0104 8.05108 18.5863 7.76228 18.2736C7.47347 17.9609 7.08177 17.7853 6.67333 17.7853ZM17.4533 14.4505H5.13333C4.86104 14.4505 4.59991 14.3334 4.40737 14.125C4.21483 13.9165 4.10667 13.6338 4.10667 13.3389C4.10667 13.0441 4.21483 12.7614 4.40737 12.5529C4.59991 12.3445 4.86104 12.2274 5.13333 12.2274H13.851C14.5198 12.225 15.1699 11.9881 15.7038 11.5521C16.2378 11.116 16.6268 10.5044 16.8127 9.80882L18.4404 3.64031C18.4841 3.47488 18.4917 3.30072 18.4626 3.13157C18.4336 2.96241 18.3686 2.80286 18.2729 2.66549C18.1773 2.52812 18.0534 2.41666 17.9112 2.33991C17.769 2.26315 17.6122 2.22319 17.4533 2.22316H4.86545C4.65291 1.57551 4.26112 1.01455 3.74346 0.616719C3.22579 0.21889 2.60743 0.00353565 1.97263 0H1.02667C0.754378 0 0.493241 0.117112 0.300704 0.325574C0.108166 0.534035 0 0.81677 0 1.11158C0 1.40639 0.108166 1.68912 0.300704 1.89758C0.493241 2.10605 0.754378 2.22316 1.02667 2.22316H1.97263C2.1955 2.224 2.41212 2.30299 2.59006 2.44829C2.768 2.59359 2.89768 2.79738 2.95969 3.02916L3.11935 3.63469L3.1196 3.64031L4.80398 10.0232C4.02018 10.1145 3.29855 10.5277 2.78767 11.1777C2.2768 11.8278 2.01557 12.6651 2.05778 13.5174C2.09998 14.3697 2.44242 15.1721 3.01456 15.7592C3.58671 16.3464 4.34501 16.6737 5.13333 16.6737H17.4533C17.7256 16.6737 17.9868 16.5566 18.1793 16.3481C18.3718 16.1397 18.48 15.8569 18.48 15.5621C18.48 15.2673 18.3718 14.9846 18.1793 14.7761C17.9868 14.5676 17.7256 14.4505 17.4533 14.4505ZM16.0923 4.44632L14.8385 9.19766C14.7766 9.42963 14.6469 9.63362 14.4688 9.77903C14.2908 9.92444 14.074 10.0035 13.851 10.0042H6.93451L6.67277 9.01245L5.46846 4.44632H16.0923ZM14.8867 17.7853C14.5821 17.7853 14.2843 17.8831 14.0311 18.0663C13.7778 18.2495 13.5805 18.5099 13.4639 18.8146C13.3473 19.1192 13.3168 19.4545 13.3763 19.7779C13.4357 20.1014 13.5823 20.3985 13.7977 20.6316C14.0131 20.8648 14.2875 21.0236 14.5862 21.088C14.885 21.1523 15.1946 21.1193 15.476 20.9931C15.7574 20.8669 15.9979 20.6532 16.1671 20.379C16.3363 20.1048 16.4267 19.7824 16.4267 19.4526C16.4267 19.0104 16.2644 18.5863 15.9756 18.2736C15.6868 17.9609 15.2951 17.7853 14.8867 17.7853Z"
              fill="black"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
};
