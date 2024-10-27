import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="py-[10px] px-[20px] bg-[#E6FAF0] flex justify-between items-center w-[90%] h-[71px] fixed bottom-[10px] z-[100] rounded-[20px]">
      <NavLink to="/" className="flex flex-col items-center gap-y-[10px]">
        <img src="/homeIcon.svg" alt="Home" />
        <span className="text-[12px] text-[#383838] leading-[18.6px] font-medium font-laila">Asosiy sahifa</span>
      </NavLink>
      <NavLink to="/direction" className="flex flex-col items-center gap-y-[10px]">
        <img src="/directionIcon.svg" alt="Direction" />
        <span className="text-[12px] text-[#383838] leading-[18.6px] font-medium font-laila">Yo'nalishlar</span>
      </NavLink>
      <NavLink to="/drive" className="flex flex-col items-center gap-y-[10px]">
        <img src="/driveIcon.svg" alt="Drive" />
        <span className="text-[12px] text-[#383838] leading-[18.6px] font-medium font-laila">Haydovchilar</span>
      </NavLink>
    </nav>
  );
}
export default Navbar;