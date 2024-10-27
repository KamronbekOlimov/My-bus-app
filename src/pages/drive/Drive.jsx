import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
function Drive() {
  const navigate = useNavigate()
  return (
    <div className="w-full h-screen bg-[#F1F1F1]">
      <div className="w-full h-[109px] bg-[#3ABA7E] flex items-center justify-center">
        <div className="w-[90%] flex items-center gap-x-[15px]">
          <button onClick={() => navigate('/')} className="text-[#FDFDFD] text-[18.92px]"><FaArrowLeftLong /></button>
          <div>
            <span className="text-[#FDFDFD] font-medium text-[20px] font-laila leading-[31px]">Admin panel</span>
          </div>
        </div>
      </div>
      <div className="container w-[90%]">
        <form className="py-5 flex flex-col gap-y-[10px]" action="">
          <div className="w-full flex flex-col gap-y-2">
            <span className="text-[#1E1E1E] leading-[22.4px] font-normal text-[16px]">Qayerdan</span>
            <input className="bg-[#FFFFFF] h-[40px] border-solid border-[1px] border-[#D9D9D9] rounded-[5px] outline-none py-[12px] px-[16px]" type="text" />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <span className="text-[#1E1E1E] leading-[22.4px] font-normal text-[16px]">Qayerga</span>
            <input className="bg-[#FFFFFF] h-[40px] border-solid border-[1px] border-[#D9D9D9] rounded-[5px] outline-none py-[12px] px-[16px]" type="text" />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <span className="text-[#1E1E1E] leading-[22.4px] font-normal text-[16px]">Jo'nab ketish vaqti</span>
            <input className="bg-[#FFFFFF] h-[40px] border-solid border-[1px] border-[#D9D9D9] rounded-[5px] outline-none py-[12px] px-[16px]" type="text" />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <span className="text-[#1E1E1E] leading-[22.4px] font-normal text-[16px]">Yetib borish vaqti</span>
            <input className="bg-[#FFFFFF] h-[40px] border-solid border-[1px] border-[#D9D9D9] rounded-[5px] outline-none py-[12px] px-[16px]" type="text" />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <span className="text-[#1E1E1E] leading-[22.4px] font-normal text-[16px]">Davomati</span>
            <input className="bg-[#FFFFFF] h-[40px] border-solid border-[1px] border-[#D9D9D9] rounded-[5px] outline-none py-[12px] px-[16px]" type="text" />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <span className="text-[#1E1E1E] leading-[22.4px] font-normal text-[16px]">Sana</span>
            <input className="bg-[#FFFFFF] h-[40px] border-solid border-[1px] border-[#D9D9D9] rounded-[5px] outline-none py-[12px] px-[16px]" type="text" />
          </div>
          <div className="flex items-center gap-x-[10px] my-[10px]">
            <input type="checkbox" />
            <span className="border-solid border-[1px] border-[#D9D9D9] rounded-[8px] py-[6px] px-[16px]">Lakatsiya malumotni berish</span>
          </div>
          <button className="w-full my-[10px] font-medium h-[41px] rounded-[100px] bg-[#65558F] text-[#FFFFFF]">Yuborish</button>
        </form>
      </div>
    </div>
  )
}
export default Drive