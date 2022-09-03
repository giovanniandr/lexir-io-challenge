import Image from "next/image";
import Vectordashboard from "../assets/Vectordashboard.png";

export default function SideNavIcons () {
    return(
        <div className="w-10 h-10 mt-5">
           <Image
                        src={Vectordashboard}
                        alt="Elixir Logo"
                        objectFit="fit"
                        
                    />
        </div>
    );
}