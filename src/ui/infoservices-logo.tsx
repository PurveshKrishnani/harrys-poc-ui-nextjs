import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/ui/fonts";
import {getImage} from "../utils/ImageFunction";
import Image from "next/image";
import InfoServiceLogo from "../assets/info-services-logo.png";
// import '@/styles/globals.css';


export default function InfoServices() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center h-full text-white w-[240px] `}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      {/* <p className="text-xl font-bold text-blue-600">INFO SERVICES</p> */}
      {/* <img src={getImage("info-services-logo.png")} alt="info-services-logo" /> */}
      <Image 
        src={InfoServiceLogo}  
        alt="InfoServiceLogo"
        // className="max-w-[227px] h-[45px] " 
      />
    </div>
  );
}
