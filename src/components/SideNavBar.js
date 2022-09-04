import Link from "next/link";
import Image from "next/image";
import logoPng from "../assets/logo.png";

import SideProfile from "./SideProfile.js";
import SideBarItems from "./SideBarItems.js";

export default function SideNavBar () {
    return(
        <div className="fixed top-0 left-0 w-1/5 h-full flex flex-col bg-white">
            <div className="justify-start items-center">
                <div className="mt-10 flex justify-center">
                    <Image
                        src={logoPng}
                        alt="Elixir Logo"
                        width="145" height="34"
                        className="object-contain"
                    />
                </div>
                
                <SideProfile/>
                <SideBarItems/>
                
            </div>
        </div>
    );
}