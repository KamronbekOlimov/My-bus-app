import { FiEdit } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoBus } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Direction() {
  const [date, setDate] = useState(new Date())
  const navigate = useNavigate()
  useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000);
  }, [])
  return (
    <div className="w-full h-screen bg-[#F1F1F1]">
      <div className="w-full h-[109px] bg-[#3ABA7E] flex items-center justify-center">
        <div className="w-[90%] flex justify-between items-center">
          <div className="flex items-center gap-x-[15px]">
            <button onClick={() => navigate('/')} className="text-[#FDFDFD] text-[18.92px]"><FaArrowLeftLong /></button>
            <div>
              <div className="flex items-center gap-x-[5px]">
                <span className="text-[#FDFDFD] font-medium text-[20px] font-laila leading-[31px]">Namangan</span>
                <button className="text-[#FDFDFD]"><FaArrowRight /></button>
                <span className="text-[#FDFDFD] font-medium text-[20px] font-laila leading-[31px]">Farg'ona</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#FDFDFD] font-medium font-laila font-[12px] leading-[18.6px]">{date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.{date.getMonth() + 1 < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1}.{date.getFullYear()}</span>
                <span className="text-[#FDFDFD] font-medium font-laila font-[12px] leading-[18.6px]">{date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:{date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}</span>
              </div>
            </div>
          </div>
          <button className="text-[#FFFFFF] text-[18.92px]"><FiEdit /></button>
        </div>
      </div>
      <div className="bg-[#FFFFFF] w-full h-[62px] flex items-center justify-center">
        <div className="w-[90%] h-[29px] bg-[#E6FAF0] rounded-[10px] flex items-center">
          <span className="px-[28px] text-[#000000] font-normal text-[12px] leading-[18.6px]">My Buss App</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-[10px] items-center">
        <div className="w-[90%] flex items-start"><span className="text-[#000000] font-medium leading-[37.2px] text-[24px] font-laila">Yo'nalishlar</span></div>
        <div className="bg-[#FFFFFF] w-[90%] h-[187px] p-[15px]">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[#3ABA7E] font-medium leading-[31px] text-[20px] font-laila">201-yo'nalish</span>
              <span className="text-[#3ABA7E] font-medium leading-[31px] text-[20px] font-laila">{date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#989898] font-medium leading-[21.7px] text-[14px] font-laila">O'rindiqlar soni</span>
              <span className="text-[#3ABA7E] font-medium leading-[21.7px] text-[14px] font-laila">Mavjud</span>
            </div>
          </div>
          <div className="flex items-center justify-between py-[20px] relative">
            <span className="absolute w-[17px] h-[34px] rounded-r-full bg-[#F1F1F1] left-[-17px]"></span>
            <hr className="w-full border-dashed border-[#000000] bg-to-transparent" />
            <span className="absolute w-[17px] h-[34px] rounded-l-full bg-[#F1F1F1] right-[-17px]"></span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[#989898] font-medium leading-[21.7px] text-[14px] font-laila">Jo'nab ketish</span>
              <span className="text-[#989898] font-medium leading-[21.7px] text-[14px] font-laila">Yetib borish</span>
            </div>
            <div className="flex items-center justify-between gap-[5px]">
              <span className="text-[#3ABA7E] font-medium leading-[31px] text-[20px] font-laila">16:30</span>
              <div className="relative w-full flex items-center">
                <span className="w-[10px] h-[10px] rounded-[50%] bg-[#3ABA7E]"></span>
                <hr className="w-full"/>
                <span className="w-[10px] h-[10px] rounded-[50%] bg-[#3ABA7E]"></span>
                <IoBus className="absolute text-[#5E5D57] text-[16px] z-90 left-[50%] translate-x-[-50%]"/>
                </div>
              <span className="text-[#3ABA7E] font-medium leading-[31px] text-[20px] font-laila">18:00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#989898] font-medium leading-[15.5px] text-[10px] font-laila">Bugungi kun</span>
              <span className="text-[#989898] font-medium leading-[15.5px] text-[10px] font-laila">{["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"][date.getUTCDay()]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Direction