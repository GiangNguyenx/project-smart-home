import light from "../../../assets/images/icon/light.png";
import Switch from "../../../component/Home/Switch";
import {React} from "react";
import wifi from "../../../assets/images/icon/wifi.png";

let isWifiState = true;
let wifiState = isWifiState? "ON": "OFF";
const DeviceControl = () => (
    <div>
        <div className="absolute w-[166px] h-[158px] top-[515px] left-[116px] bg-white rounded-[15px]">
            <div className="absolute w-[166px] h-[158px] top-0 left-0 bg-white rounded-[15px]" />

            <img
                className="absolute w-[39px] h-[39px] top-[58px] left-5"
                alt="Mask group"
                src={light}
            />

            <div className="left-5 absolute top-6 [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-black text-base tracking-[0.16px] leading-[normal] whitespace-nowrap">
                on
            </div>

            <div className="left-5 absolute top-[113px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#6b6bf9] text-base tracking-[0.16px] leading-[normal] whitespace-nowrap">
                Light 1
            </div>

            <div className="!absolute !left-[107px] !top-6">
                <Switch/>
            </div>
        </div>

        <div className="absolute w-[166px] h-[158px] top-[515px] left-[316px] bg-white rounded-[15px]">
            <img
                className="absolute w-[39px] h-[39px] top-[58px] left-5"
                alt="Mask group"
                src={wifi}
            />

            <div className="left-5 absolute top-6 [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-black text-base tracking-[0.16px] leading-[normal] whitespace-nowrap">
                {wifiState}
            </div>

            <div className="left-5 absolute top-[113px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#6b6bf9] text-base tracking-[0.16px] leading-[normal] whitespace-nowrap">
                Wifi
            </div>

            <div className="absolute left-[107px] top-6">
                <Switch/>
            </div>
        </div>


        <div className="absolute w-[166px] h-[158px] top-[515px] left-[516px] bg-white rounded-[15px]">
            <img
                className="absolute w-[39px] h-[39px] top-[58px] left-5"
                alt="Mask group"
                src={light}
            />

            <div className="left-5 absolute top-6 [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-black text-base tracking-[0.16px] leading-[normal] whitespace-nowrap">
                on
            </div>

            <div className="left-5 absolute top-[113px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#6b6bf9] text-base tracking-[0.16px] leading-[normal] whitespace-nowrap">
                Light 2
            </div>

            <div className="absolute left-[107px] top-6">
                <Switch />
            </div>
        </div>
    </div>
);

export default DeviceControl;