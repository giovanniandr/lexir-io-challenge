import Image from "next/image";
import profile from "../assets/profile.png";

export default function SideProfile () {
    return(
                <div className= "flex static mt-28 w-full h-32">
                    <div className="ml-20 relative w-16 h-16">
                        <Image
                                src={profile}
                                alt="Rounded avatar"
                                className="rounded-full object-contain"
                            />
                    </div>
                    <div className="ml-3 mt-1">
                        <div className="text-2xl font-bold text-name"> Leandro Alves </div>
                        <div className="text-base text-company"> Company Name </div>
                    </div>
                </div>

                
    );
}