import customerData from "./../constant/happycus";
import { IoStarSharp } from "react-icons/io5";


export default function HappyCustomers() {
  return (
    <div className="relative my-10 ml-[100px]">
      <h1 className="text-[48px] font-bold leading-[57.6px] my-10">
        OUR HAPPY CUSTOMERS
      </h1>

      <div className="flex overflow-x-auto items-center justify-between gap-5 contain-content ">
        {customerData.map((customer) => (
          <div
            key={customer.id}
            className="w-full shrink-0 grow-0 sm:w-[386px] h-auto sm:h-[240px] text-xl border-[1px] border-[#0000001A] rounded-[20px] p-5 sm:py-[28px] sm:px-[32px] flex flex-col gap-5"
          >
            <div className="flex gap-1">
            <IoStarSharp color="yellow"/>
            <IoStarSharp color="yellow"/>
            <IoStarSharp color="yellow" />
            <IoStarSharp  color="yellow"/>
            <IoStarSharp color="yellow"/>
            </div>
            <p className="text-lg font-semibold">
              {customer.name}{" "}
              {customer.verified && <span className="text-white bg-green-600 rounded-full">✔</span>}
            </p>
            <p className="text-sm">{customer.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
