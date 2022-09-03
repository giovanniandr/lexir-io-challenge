import Link from "next/link";
import Image from "next/image";
import logoPng from "../assets/logo.png";
import SideBarIcons from "./SideBarIcons.js"

export default function SideNavBar () {
    return(
        <div className="fixed top-0 left-0 w-1/4 h-full flex flex-col bg-white">
            <div className="justify-start items-center">
                <div className="mt-20 flex justify-center">
                    <Image
                        src={logoPng}
                        alt="Elixir Logo"
                        objectFit="fit"
                        width="145" height="34"
                    />
                </div>
                
                <div className="flex justify-start items-center gap-4 pl-5 bg-red-200 "> 
                    <SideBarIcons/> 
                    <i className="text-base text-center cursor-pointer">  Dashboard </i>
                </div>
                
            </div>
        </div>
    );
}