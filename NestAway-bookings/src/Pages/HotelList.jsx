
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar"
import { useState } from "react";
// import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
// import SearchItem from "../components/SearchItem";

const HotelList = () => {
const location = useLocation();
const [destination,setDestination] =useState(location.state.destination)
const[date,setDate] = useState(location.state.date)
const[openDate,setOpenDate] = useState(false)
const[options,setOptions] = useState(location.state.options)

 
  return (
    <>
    <Navbar />
    <div className="listContainer flex justify-center mt-3">
      <div className="listWrapper w-full max-w-screen-lg flex gap-5">
        <div className="listSearch flex-1 sticky p-2.5 rounded-[10px] top-2.5" style={{backgroundColor:"#90CCBA"}}>
          <h1 className="lsTitle text-xl text-[#555] mb-2.5 mt-[6rem]">Search</h1>
          <div className="lsItem flex flex-col gap-[5px] mb-2.5">
            <label>Destination</label>
            <input className="h-[30px] p-[5px] border-[none]" placeholder={destination} type="text"/>
          </div>

          <div className="lsItem flex flex-col gap-[5px] mb-2.5">
            <label>Check-in Date</label>
           <span onClick={()=>setOpenDate(!openDate)} className=" h-[30px] bg-[white] flex items-center cursor-pointer p-[5px]">
           {`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}
           </span>
         {openDate && ( <DateRange
            onChange={item=>setDate([item.setlocation])}
            minDate={new Date()} 
            ranges={date}
            />
          )}
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptions p-2.5">
            <div className="lsOptionItem flex justify-between text-[#555] text-xs mb-2.5">
              <span className="lsOptionText">
                Min price <small>per night</small>
              </span>
              <input type="number" className="lsOptionInput w-[50px] border border-black " />
            </div>

            <div className="lsOptionItem flex justify-between text-[#555] text-xs mb-2.5">
              <span className="lsOptionText">
                Max price <small>per night</small>
              </span>
              <input type="number" className="lsOptionInput w-[50px] border border-black " />
            </div>

            <div className="lsOptionItem flex justify-between text-[#555] text-xs mb-2.5">
              <span className="lsOptionText">
                Adult
              </span>
              <input type="number" min={1} className="lsOptionInput w-[50px] border border-black " placeholder={options.adult}/>
            </div>

            <div className="lsOptionItem flex justify-between text-[#555] text-xs mb-2.5">
              <span className="lsOptionText">
                Children
              </span>
              <input type="number" min={0} className="lsOptionInput w-[50px] border border-black " placeholder={options.children}/>
            </div>

            <div className="lsOptionItem flex justify-between text-[#555] text-xs mb-2.5;">
              <span className="lsOptionText">
                Room
              </span>
              <input
               type="number"
                min={1} 
              className="lsOptionInput w-[50px] border border-black "
               placeholder={options.room}/>
            </div>
            </div>
          </div>
          <button className="bg-cyan-900 text-[white] w-full font-medium cursor-pointer p-2.5 border-[none]">Search</button>
        </div>
        <div className="listResult flex-[3]">

        </div>
      </div>
    </div>
    </>
  )
}

export default HotelList;