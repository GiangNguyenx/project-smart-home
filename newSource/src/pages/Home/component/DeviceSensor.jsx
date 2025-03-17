import temp from "../../../assets/images/icon/temp.png";
import ChangeUnit from "../../../component/Home/ChangeUnit";
import humid from "../../../assets/images/icon/humid.png";
import {React} from "react";

const DeviceSensor = () => (
    <div className="absolute w-[520px] h-[158px] top-[215px] left-0 bg-gradient-to-b from-sky-500  rounded-[15px]">

        <img
            className="absolute w-[39px] h-[39px] top-[30px] left-[130px]"
            alt="Mask group"
            src={temp}
        />

        <div className="left-[123px] absolute top-[110px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-black text-3xl tracking-[0.18px] leading-[normal] whitespace-nowrap">
            60°F
        </div>

        <div className="left-[100px] absolute top-[80px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#ff0000] text-base tracking-[0.16px] leading-[normal] whitespace-nowrap">
            Temperature
        </div>

        <div className="absolute left-[-30px] top-[-30px]" >
            <ChangeUnit alt="SwitchTog" property1="variant-2"/>
        </div>

        <img
            className="absolute w-[39px] h-[39px] top-[30px] left-[350px] "
            alt="Mask group"
            src={humid}
        />

        <div className="left-[345px] absolute top-[110px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-black text-3xl tracking-[0.16px] leading-[normal] whitespace-nowrap">
            75%
        </div>

        <div className="left-[335px] absolute top-[80px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#6b6bf9] text-base tracking-[0.16px] leading-[normal] whitespace-nowrap">
            Humidity
        </div>

    </div>
);
export default DeviceSensor;