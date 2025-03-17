import {React} from "react";
import Card from "../../component/Home/Card.jsx";
import Lock from "../../component/Home/Lock.jsx";
import Next from "../../component/Home/Next.jsx";
import Add from "../../component/Home/Add.jsx";
import DropDown from "../../component/Home/DropDown.jsx";
import Switch from "../../component/Home/Switch.jsx";
import Weather from "../../component/Home/Weather.jsx";
import ChangeUnit from "../../component/Home/ChangeUnit.jsx";
import login2 from "../../assets/images/loginPage/login2.png";
import home1 from "../../assets/images/home/home1.png";
import home2 from "../../assets/images/home/home2.png";
import avatar1 from "../../assets/images/home/avatar1.png";
import avatar2 from "../../assets/images/home/avatar2.png";
import avatar3 from "../../assets/images/home/avatar3.png";
import avatar4 from "../../assets/images/home/avatar4.png";
import wifi from "../../assets/images/icon/wifi.png";
import light from "../../assets/images/icon/light.png";
import temp from "../../assets/images/icon/temp.png";
import humid from "../../assets/images/icon/humid.png";
import lock from "../../assets/images/icon/lock.png";
import unlock from "../../assets/images/icon/unlock.png";
import repair from "../../assets/images/icon/repair.png";
import theme from "../../assets/images/home/theme.png";

import voiceAssistant from "../../assets/images/home/voiceAssistant.png";
import hostAvatar from "../../assets/images/home/hostAvatar.png";


export const HomePage = () => {
    let isWifiState = true;
    let wifiState = isWifiState? "ON": "OFF";

        return (
        <div className="bg-[#f3f3f3] flex flex-row justify-center w-full">
            <div className="bg-[#f3f3f3] w-[1512px] h-[982px]">
                <div className="relative w-[1510px] h-[982px]">
                    <div className="absolute w-[417px] h-[304px] top-[132px] left-[1067px] bg-white rounded-[15px] overflow-y-auto custom-scrollbar">
                        <div className="inline-flex flex-col items-start gap-4 relative top-5 left-[30px]">
                            <div className="flex w-[335px] items-center gap-[15px] relative flex-[0_0_auto]">
                                <img
                                   className="relative w-[25px] h-[25px] object-cover"
                                   alt="Lightning"
                                   src={home2}
                                 />
                                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                                    <div className="flex flex-col items-start gap-1 pl-0 pr-2.5 pt-0 pb-0.5 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
                                        <p className="relative self-stretch mt-[-1.00px] opacity-80 font-lato-reg-12 font-[number:var(--lato-reg-12-font-weight)] text-darktheme-black-bg text-[length:var(--lato-reg-12-font-size)] tracking-[var(--lato-reg-12-letter-spacing)] leading-[var(--lato-reg-12-line-height)] [font-style:var(--lato-reg-12-font-style)]">
                                          Pay the electricity bill before Aug 3rd
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-end justify-end gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <div className="flex w-[335px] items-start gap-[15px] relative flex-[0_0_auto]">
                                    <img
                                      className="relative w-5 h-5 object-cover"
                                      alt="Avatar"
                                      src={avatar1}
                                    />
                                    <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                                        <div className="flex flex-col items-start gap-1 pl-0 pr-2.5 pt-0 pb-0.5 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
                                            <p className="relative self-stretch mt-[-1.00px] opacity-80 font-lato-reg-12 font-[number:var(--lato-reg-12-font-weight)] text-darktheme-black-bg text-[length:var(--lato-reg-12-font-size)] tracking-[var(--lato-reg-12-letter-spacing)] leading-[var(--lato-reg-12-line-height)] [font-style:var(--lato-reg-12-font-style)]">
                                            Member1 requesting for unlocking the main door
                                          </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-[302px] items-start justify-end gap-2 relative flex-[0_0_auto]">
                                    <div className="w-[299px] flex flex-col items-start gap-2 relative">
                                        <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                                            <div className="flex w-[106px] h-7 items-center justify-center gap-2.5 relative rounded-[5px] border border-solid border-[#000000] opacity-60">
                                              <div className="relative w-fit [font-family:'Roboto-Bold',Helvetica] font-bold text-[#1f1f1f] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                                              Decline
                                              </div>
                                            </div>
                                            <div className="flex w-[106px] h-7 items-center justify-center gap-2.5 relative bg-[#6b6bf9] rounded-[5px]">
                                                <div className="relative w-fit [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                                              Unlock
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <div className="flex w-[335px] items-center gap-[15px] relative flex-[0_0_auto]">
                            <img
                                className="relative w-[25px] h-[25px] object-cover"
                                alt="Voice assistant"
                                src={voiceAssistant}
                            />
                            <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                                 <div className="flex flex-col items-start gap-1 pl-0 pr-2.5 pt-0 pb-0.5 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
                                        <p className="relative self-stretch mt-[-1.00px] opacity-80 font-lato-reg-12 font-[number:var(--lato-reg-12-font-weight)] text-darktheme-black-bg text-[length:var(--lato-reg-12-font-size)] tracking-[var(--lato-reg-12-letter-spacing)] leading-[var(--lato-reg-12-line-height)] [font-style:var(--lato-reg-12-font-style)]">
                                            Voice Assist is about to die - low battery 2%
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-end justify-end gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="flex w-[335px] items-start gap-[15px] relative flex-[0_0_auto]">
                                    <img
                                        className="relative w-5 h-5 object-cover"
                                        alt="Avatar"
                                        src={avatar1}
                                    />
                                    <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                                        <div className="flex flex-col items-start gap-1 pl-0 pr-2.5 pt-0 pb-0.5 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
                                            <p className="relative self-stretch mt-[-1.00px] opacity-80 font-lato-reg-12 font-[number:var(--lato-reg-12-font-weight)] text-darktheme-black-bg text-[length:var(--lato-reg-12-font-size)] tracking-[var(--lato-reg-12-letter-spacing)] leading-[var(--lato-reg-12-line-height)] [font-style:var(--lato-reg-12-font-style)]">
                                                Member1 added someone to access the home, Please update the status
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-[299px] items-start justify-end gap-2 relative flex-[0_0_auto]">
                                    <div className="relative w-[3px] h-[55px] bg-[#6b6bf9] opacity-50" />
                                        <img
                                        className="relative w-[19px] h-[19px] object-cover"
                                        alt="Avatart"
                                        src={avatar2}
                                        />

                                    <div className="flex-1 grow flex flex-col items-start gap-2 relative">
                                        <div className="flex items-center gap-1.5 pl-0 pr-2.5 pt-0 pb-0.5 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
                                            <div className="relative w-fit mt-[-1.00px] font-lato-bold-14 font-[number:var(--lato-bold-14-font-weight)] text-darktheme-black-bg text-[length:var(--lato-bold-14-font-size)] tracking-[var(--lato-bold-14-letter-spacing)] leading-[var(--lato-bold-14-line-height)] [font-style:var(--lato-bold-14-font-style)]">
                                                Sanjay Dut
                                            </div>

                                            <div className="relative flex-1 [font-family:'Lato-SemiBold',Helvetica] font-semibold text-[#6b6bf9] text-[10px] tracking-[0] leading-[normal]">
                                                View Profile
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                                            <div className="flex w-[106px] h-7 items-center justify-center gap-2.5 relative rounded-[5px] border border-solid border-[#000000] opacity-60">
                                                <div className="relative w-fit [font-family:'Roboto-Bold',Helvetica] font-bold text-[#1f1f1f] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                                                Decline
                                                </div>
                                            </div>

                                            <div className="flex w-[106px] h-7 items-center justify-center gap-2.5 relative bg-[#6b6bf9] rounded-[5px]">
                                                <div className="relative w-fit [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                                                Approve
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute w-[417px] h-[130px] top-[500px] left-[1067px] bg-white rounded-[15px]">
                        <div className="inline-flex items-start gap-[15px] relative top-[23px] left-5">
                            <div className="inline-flex flex-col items-center justify-center gap-1.5 relative flex-[0_0_auto]">
                                <div className="inline-flex flex-col items-end justify-end relative flex-[0_0_auto]">
                                    <img
                                        className="relative w-[45px] h-[45px]"
                                        alt="Group"
                                        src={avatar3}
                                      />
                                </div>

                                <div className="flex flex-col w-[83px] items-center justify-center gap-[3px] relative flex-[0_0_auto]">

                                    <div className="flex items-center justify-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                                        <div className="relative flex-1 mt-[-1.00px] font-lato-medi-14 font-[number:var(--lato-medi-14-font-weight)] text-darktheme-black-bg text-[length:var(--lato-medi-14-font-size)] text-center tracking-[var(--lato-medi-14-letter-spacing)] leading-[var(--lato-medi-14-line-height)] [font-style:var(--lato-medi-14-font-style)]">
                                            Member1
                                        </div>
                                    </div>

                                      <div className="relative self-stretch [font-family:'Lato-Medium',Helvetica] font-medium text-black-40 text-[11px] text-center tracking-[0] leading-[normal]">
                                            Partial Access
                                      </div>
                                </div>
                            </div>

                            <div className="inline-flex flex-col items-center justify-center gap-1.5 relative flex-[0_0_auto]">
                                <div className="inline-flex flex-col items-end justify-end relative flex-[0_0_auto]">
                                      <img
                                        className="relative w-[45px] h-[45px]"
                                        alt="Group"
                                        src={avatar2}
                                      />
                                </div>

                                <div className="flex flex-col w-[83px] items-center justify-center gap-[3px] relative flex-[0_0_auto]">
                                    <div className="flex items-center justify-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                                        <div className="relative flex-1 mt-[-1.00px] font-lato-medi-14 font-[number:var(--lato-medi-14-font-weight)] text-darktheme-black-bg text-[length:var(--lato-medi-14-font-size)] text-center tracking-[var(--lato-medi-14-letter-spacing)] leading-[var(--lato-medi-14-line-height)] [font-style:var(--lato-medi-14-font-style)]">
                                          Host
                                        </div>
                                    </div>

                                    <div className="relative self-stretch [font-family:'Lato-Medium',Helvetica] font-medium text-black-40 text-[11px] text-center tracking-[0] leading-[normal]">
                                        Admin
                                    </div>
                                </div>
                            </div>

                            <div className="inline-flex flex-col items-center justify-center gap-1.5 relative flex-[0_0_auto]">
                                <div className="inline-flex flex-col items-end justify-end relative flex-[0_0_auto]">
                                      <img
                                        className="relative w-[45px] h-[45px]"
                                        alt="Group"
                                        src={avatar4}
                                      />
                                </div>

                                <div className="flex flex-col w-[83px] items-center justify-center gap-[3px] relative flex-[0_0_auto]">
                                    <div className="flex items-center justify-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                                        <div className="relative flex-1 mt-[-1.00px] font-lato-medi-14 font-[number:var(--lato-medi-14-font-weight)] text-darktheme-black-bg text-[length:var(--lato-medi-14-font-size)] text-center tracking-[var(--lato-medi-14-letter-spacing)] leading-[var(--lato-medi-14-line-height)] [font-style:var(--lato-medi-14-font-style)]">
                                          Member2
                                        </div>
                                    </div>

                                    <div className="relative self-stretch [font-family:'Lato-Medium',Helvetica] font-medium text-black-40 text-[11px] text-center tracking-[0] leading-[normal]">
                                        Partial Access
                                    </div>
                                </div>
                            </div>

                            <div className="inline-flex flex-col items-center justify-center gap-1.5 relative flex-[0_0_auto]">
                                <div className="inline-flex flex-col items-end justify-end relative flex-[0_0_auto]">
                                      <img
                                        className="relative w-[45px] h-[45px]"
                                        alt="Group"
                                        src={avatar1}
                                      />
                                </div>

                                <div className="flex flex-col w-[83px] items-center justify-center gap-[3px] relative flex-[0_0_auto]">
                                    <div className="flex items-center justify-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                                        <div className="relative flex-1 mt-[-1.00px] font-lato-medi-14 font-[number:var(--lato-medi-14-font-weight)] text-darktheme-black-bg text-[length:var(--lato-medi-14-font-size)] text-center tracking-[var(--lato-medi-14-letter-spacing)] leading-[var(--lato-medi-14-line-height)] [font-style:var(--lato-medi-14-font-style)]">
                                          Member3
                                        </div>
                                    </div>

                                    <div className="relative self-stretch [font-family:'Lato-Medium',Helvetica] font-medium text-black-40 text-[11px] text-center tracking-[0] leading-[normal]">
                                        Partial Access
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="absolute top-[463px] left-[1067px] flex items-center [font-family:'Roboto-Bold',Helvetica] font-bold text-[#000000] text-xl tracking-[0.20px] leading-[normal] whitespace-nowrap">
                        Members
                        <div className="relative z-10 ml-[282px]">
                            <Next/>
                        </div>
                    </div>

                    <div className="absolute top-[95px] left-[1067px] flex items-center [font-family:'Roboto-Bold',Helvetica] font-bold text-[#000000] text-xl tracking-[0.20px] leading-[normal] whitespace-nowrap">
                        Notification
                        <div className="relative z-10 ml-[253px]">
                            <Next/>
                        </div>
                    </div>

                    <div className="absolute top-[661px] left-[1067px] flex items-center [font-family:'Roboto-Bold',Helvetica] font-bold text-[#000000] text-xl tracking-[0.20px] leading-[normal] whitespace-nowrap">
                        Power Consumption
                        <div className="relative z-10 ml-[174px]">
                            <Next/>
                        </div>
                    </div>

                    <div className="flex w-[1510px] h-[66px] items-center gap-[23px] pl-6 pr-5 py-3.5 absolute top-0 left-0 bg-white border-b [border-bottom-style:solid] border-[#0000000d]">
                        <div className="relative w-[141.54px] h-[27px]">
                        {/*<div className="absolute w-[417px] h-[304px] top-[132px] left-[1067px] bg-white rounded-[15px]">*/}

                        {/*</div>*/}
                            <div className="absolute w-[106px] h-5 top-2 left-[50px]">
                                <img
                                    className="absolute w-[36px] h-[36px] top-[-10px] left-[-50px] "
                                    alt="Logo"
                                    src={login2}
                                />
                                <div className="absolute w-[53px] top-0 left-0 [font-family:'Spartan-SemiBold',Helvetica] font-semibold text-[#000000] text-[20px] tracking-[0.15px] leading-[normal]">
                                    Zoho
                                </div>

                                <div className="absolute w-[61px] top-0 left-[55px] opacity-50 [font-family:'Spartan-SemiBold',Helvetica] font-semibold text-[#000000] text-[20px] tracking-[0.15px] leading-[normal]">
                                    Home
                                </div>
                            </div>

                            <div className="flex w-[496px] h-[38px] top-[-3px] left-[200px] items-center pl-3 pr-[5.13px] py-[5.13px] relative bg-system-materialssm-l-thick rounded-[6.42px] border border-solid border-[#0000001a]">
                                <div className="relative w-[16px] h-[16px]">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7" cy="7" r="6" stroke="black" strokeWidth="2" />
                                        <line x1="11" y1="10" x2="15" y2="15" stroke="black" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="inline-flex items-start gap-2.5 pl-[7px] pr-2.5 pt-px pb-0 relative flex-[0_0_auto] opacity-80">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-label-colorslc-l-secondary text-base tracking-[-0.26px] leading-[14.1px] whitespace-nowrap">
                                        Search
                                    </div>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                                <img
                                    className="absolute w-[36px] h-[36px] top-[-45px] left-[1200px]"
                                    alt= "Avatar"
                                    src={hostAvatar}
                                />
                                <div className="relative w-[167px] h-[23px] top-[-35px] left-[1250px] [font-family:'Lato-SemiBold',Helvetica] font-semibold text-[#00000066] text-base tracking-[0] leading-[normal]">
                                    Host
                                </div>
                                <svg className="!relative !w-6 !h-6 top-[-39px] left-[1230px]" viewBox="0 0 24 24">
                                    <circle cx="12" cy="5" r="2" />
                                    <circle cx="12" cy="12" r="2" />
                                    <circle cx="12" cy="19" r="2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="inline-flex flex-col w-[80px] h-[918px] items-center gap-[38px] pt-[30px] pb-[300px] px-[25px] relative z-10 top-16 left-0 bg-white">
                        <Card />
                    </div>


                    <div className="absolute w-[230px] h-[212px] top-[683px] left-[820px] bg-[#d9d9d9] rounded-[15px]" >
                        <Weather/>
                    </div>



                    <div className="absolute w-[890px] h-[823px] top-[109px] left-[116px]">
                            <div className="absolute w-[906px] h-[200px] top-[-15px] left-[-5px] bg-white rounded-[15px]">
                                <div className="absolute top-6 left-[25px] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#000000] text-[22px] tracking-[0.22px] leading-[normal] whitespace-nowrap">
                                    Hello, Host!
                                </div>

                                <p className="absolute top-[62px] left-[25px] opacity-40 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#000000] text-sm tracking-[0.14px] leading-[normal] whitespace-nowrap">
                                    Welcome home, air quality is good and Fresh. Take a walk and have
                                    coffee.
                                </p>

                                <img
                                    className="absolute w-[197px] h-[156px] top-[26px] left-[625px]"
                                    alt="Tech life"
                                    src={home1}
                                />


                                <div className="absolute top-[107px] left-[51px] opacity-50 [font-family:'Roboto-Bold',Helvetica] font-bold text-[#000000] text-sm tracking-[0.14px] leading-[normal] whitespace-nowrap">
                                    Your Door is locked!
                                </div>

                                <div className="flex w-[180px] h-[39px] items-center justify-center gap-1.5 absolute top-[140px] left-[25px] rounded-lg border-2 border-solid border-[#0000004c]">

                                    <img
                                      className="relative w-4 h-4"
                                      alt="Mask group"
                                      src={lock}
                                    />

                                    <div className="inline-flex items-start gap-2.5 pt-3.5 pb-2.5 px-0 relative flex-[0_0_auto]">
                                        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#999999] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                                            Locked
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-[180px] h-[39px] items-center justify-center gap-1.5 absolute top-[140px] left-[220px] bg-[#6b6bf9] rounded-lg">
                                    <img
                                        className="relative w-4 h-[17px]"
                                        alt="Mask group"
                                        src= {unlock}
                                    />
                                    <div className="relative w-4 h-[17px] bg-[100%_100%]" />
                                    <div className="inline-flex items-start gap-2.5 pt-3.5 pb-2.5 px-0 relative flex-[0_0_auto]">
                                        <div className="mt-[-1.00px] relative w-fit [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                                            Unlock
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute w-[15px] h-[21px] top-[106px] left-[26px]">
                                    <div className="relative w-[17px] h-[23px] -top-px -left-px">
                                        <div className="absolute w-[17px] h-[21px] top-0 left-0 bg-white border-[1.7px] border-solid border-[#808080]" />

                                        <div className="absolute w-[3px] h-[3px] top-2.5 left-[7px] bg-[#808080] rounded-[1.5px]" />
                                    </div>
                                </div>
                            </div>

                        <div className="relative z-10 w-[105px] h-[30px] top-[347px] left-[1140px]">
                            <Add/>
                        </div>


                        {/*<div className="absolute w-[230px] h-[643px] top-[387px] left-[206px] bg-[#d9d9d9] rounded-[15px] rotate-[90.00deg]" >*/}
                        {/*</div>*/}

                        <div className="absolute w-[688px] h-[234px] top-[600px] left-[0px] bg-white rounded-[15px]">
                            <div className="absolute w-[196px] h-[130px] top-[58px] left-[472px] bg-cover bg-[50%_50%]">
                                <div className="absolute w-[196px] h-[130px] top-0 left-0 rounded-[15px] [background:linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]" />

                                <div className="top-2.5 left-[124px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-xs text-center absolute tracking-[0.24px] leading-[normal] whitespace-nowrap">
                                    Camera 3
                                </div>

                                <div className="absolute w-2 h-[9px] top-[13px] left-28 bg-[#f44b4b] rounded-[4px/4.5px]" />
                            </div>

                            <div className="absolute top-[195px] left-[512px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#555558] text-sm text-center tracking-[0.28px] leading-[normal] whitespace-nowrap">
                                Master BedRoom
                            </div>

                            <div className="absolute w-[196px] h-[130px] top-[58px] left-5  bg-cover bg-[50%_50%]">
                                <div className="absolute w-[196px] h-[130px] top-0 left-0 rounded-[15px] [background:linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]" />

                                <div className="top-2.5 left-[125px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-xs text-center absolute tracking-[0.24px] leading-[normal] whitespace-nowrap">
                                    Camera 1
                                </div>

                                <div className="absolute w-2.5 h-[9px] top-[13px] left-28 bg-[#f44b4b] rounded-[5px/4.5px]" />
                            </div>

                            <div className="absolute w-[198px] h-[130px] top-[58px] left-[245px] bg-cover bg-[50%_50%]">
                                <div className="absolute w-[198px] h-[130px] top-0 left-0 bg-[#000000] rounded-[15px] opacity-60" />

                                <div className="top-2.5 left-[126px] opacity-40 [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-xs text-center absolute tracking-[0.24px] leading-[normal] whitespace-nowrap">
                                    Camera 2
                                </div>

                                <div className="absolute w-[9px] h-[9px] top-[13px] left-[113px] bg-[#adafb0] rounded-[4.5px]" />
                            </div>

                            <div className="top-[19px] left-5 [font-family:'Roboto-Bold',Helvetica] font-bold text-[#000000] text-2xl absolute tracking-[0.24px] leading-[normal] whitespace-nowrap">
                                Camera
                            </div>

                            <div className="absolute top-[195px] left-[77px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#555558] text-sm text-center tracking-[0.28px] leading-[normal] whitespace-nowrap">
                                Living Room
                            </div>

                            <div className="absolute top-[195px] left-[317px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#555558] text-sm text-center tracking-[0.28px] leading-[normal] whitespace-nowrap">
                                Kitchen
                            </div>
                        </div>

                        <div className="absolute w-56 h-[200px] top-[350px] left-[700px]">
                            <div className="relative w-[300px] h-[263px] top-[-7px] left-[-27px] bg-[100%_100%]">
                                <img
                                    className="absolute w-[290px] h-[200px] top-[35px] left-[0px]"
                                    alt="Theme"
                                    src={theme}
                                />
                                <div className="absolute top-[80px] left-[60px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[22px] tracking-[-0.44px] leading-[normal] whitespace-nowrap">
                                    Need help?
                                </div>

                                <p className="absolute top-[115px] left-[60px] opacity-80 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-sm tracking-[-0.39px] leading-[normal]">
                                    Contact our highly trained
                                    <br />
                                    personal for help
                                </p>

                                <div className="absolute w-44 h-[37px] top-[170px] left-[57px] bg-white rounded-lg shadow-[0px_2px_4px_-1px_#00000012,0px_4px_7px_-1px_#0000001c]">
                                    <div className="absolute top-[11px] left-[43px] opacity-80 [font-family:'Roboto-Bold',Helvetica] font-bold text-[#252f40] text-[13px] text-center tracking-[-0.33px] leading-[normal] whitespace-nowrap">
                                        Contact Host
                                    </div>
                                </div>

                                <div className="absolute w-9 h-9 top-[55px] left-[210px]">
                                    <div className="relative h-9">
                                        <div className="absolute w-9 h-9 top-0 left-0">
                                            <div className="relative w-[38px] h-[38px] -top-px -left-px bg-white rounded-md shadow-[0px_2px_4px_-1px_#00000012,0px_4px_6px_-1px_#0000001f]">
                                            </div>
                                        </div>

                                        <img
                                            className="absolute w-[22px] h-[22px] top-[7px] left-[7px] object-cover"
                                            alt="Repair tool"
                                            src={repair}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


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

                        <div className="absolute w-[354px] h-[158px] top-[215px] left-[550px] bg-gradient-to-b from-sky-500  rounded-[25px]">

                            <div className="absolute w-[39px] h-[39px] top-[10px] left-3 ">
                                <DropDown/>
                            </div>

                            <div className="left-[200px] absolute top-6 ">
                                <Add/>
                            </div>

                            <div className="left-[230px] absolute top-[80px]">
                                <Lock/>
                            </div>
                        </div>

                    </div>


                    <div className="absolute w-[417px] h-[245px] top-[698px] left-[1067px] bg-white rounded-[15px]">
                        <div className="absolute w-[342px] h-[174px] top-[41px] left-[53px]">
                            <img
                                className="absolute w-[339px] h-[174px] top-0 left-px"
                                alt="Group"

                            />

                            <img
                                className="absolute w-[342px] h-[164px] top-2.5 left-0"
                                alt="Group"

                            />

                            <img
                                className="absolute w-px h-[108px] top-[66px] left-[174px] object-cover"
                                alt="Vector"

                            />

                            <div className="absolute w-[61px] h-[35px] top-7 left-[145px] shadow-[0px_0px_4px_#0000001f]">
                                <div className="relative w-[67px] h-10 -top-1 -left-1">
                                    <img
                                        className="absolute w-3 h-[3px] top-[35px] left-7"
                                        alt="Vector"

                                    />

                                    <img
                                        className="absolute w-[67px] h-10 top-0 left-0"
                                        alt="Rectangle"

                                    />

                                    <div className="absolute h-3.5 top-[13px] left-3 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#6b6bf9] text-[11px] text-center tracking-[0.11px] leading-[14px] whitespace-nowrap">
                                        340KWh
                                    </div>
                                </div>
                            </div>

                            <div className="absolute w-3 h-3 top-[66px] left-[169px] bg-white rounded-[5.99px/6px] border-2 border-solid border-[#6b6bf9]" />
                        </div>

                        <div className="top-[35px] absolute h-3.5 left-[22px] opacity-50 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#82899b] text-[11px] tracking-[0.11px] leading-[14px] whitespace-nowrap">
                            450
                        </div>

                        <div className="top-16 absolute h-3.5 left-[22px] opacity-50 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#82899b] text-[11px] tracking-[0.11px] leading-[14px] whitespace-nowrap">
                            400
                        </div>

                        <div className="top-[93px] absolute h-3.5 left-[22px] opacity-50 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#82899b] text-[11px] tracking-[0.11px] leading-[14px] whitespace-nowrap">
                            350
                        </div>

                        <div className="top-[121px] absolute h-3.5 left-[22px] opacity-50 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#82899b] text-[11px] tracking-[0.11px] leading-[14px] whitespace-nowrap">
                            300
                        </div>

                        <div className="top-[178px] absolute h-3.5 left-[22px] opacity-50 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#82899b] text-[11px] tracking-[0.11px] leading-[14px] whitespace-nowrap">
                            200
                        </div>

                        <div className="top-[150px] absolute h-3.5 left-[22px] opacity-50 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#82899b] text-[11px] tracking-[0.11px] leading-[14px] whitespace-nowrap">
                            250
                        </div>

                        <div className="top-[207px] absolute h-3.5 left-[22px] opacity-50 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#82899b] text-[11px] tracking-[0.11px] leading-[14px] whitespace-nowrap">
                            150
                        </div>

                        <div className="absolute w-6 h-3.5 top-[228px] left-[61px] opacity-50 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#82899b] text-[11px] tracking-[0.11px] leading-[14px]">
                            Mon
                        </div>

                        <div className="absolute w-5 h-3.5 top-[228px] left-[113px] opacity-50 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#82899b] text-[11px] tracking-[0.11px] leading-[14px]">
                            Tue
                        </div>

                        <div className="absolute w-[22px] h-3.5 top-[228px] left-[163px] opacity-50 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#82899b] text-[11px] tracking-[0.11px] leading-[14px]">
                            Wed
                        </div>

                        <div className="absolute w-[26px] h-3.5 top-[228px] left-[215px] opacity-50 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#82899b] text-[11px] tracking-[0.11px] leading-[14px]">
                            Thus
                        </div>

                        <div className="absolute w-3.5 h-3.5 top-[228px] left-[269px] opacity-50 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#82899b] text-[11px] tracking-[0.11px] leading-[14px]">
                            Fri
                        </div>

                        <div className="absolute w-[21px] h-3.5 top-[228px] left-[359px] opacity-50 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#82899b] text-[11px] tracking-[0.11px] leading-[14px]">
                            Sun
                        </div>

                        <div className="absolute w-[18px] h-3.5 top-[228px] left-[312px] opacity-50 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#82899b] text-[11px] tracking-[0.11px] leading-[14px]">
                            Sat
                        </div>
                    </div>


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

                        <div className="absolute w-[166px] h-[158px] top-[580px] left-[650px] rounded-[15px]">
                            <Next/>
                        </div>
                </div>
            </div>
        </div>
    );

};



export default HomePage;
