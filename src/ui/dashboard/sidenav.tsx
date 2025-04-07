import Link from "next/link";
import NavLinks from "@/ui/dashboard/nav-links";
// import AcmeLogo from "@/ui/infoservices-logo";
import LogoutForm from "@/ui/dashboard/logout-form";
import InfoServices from "@/ui/infoservices-logo";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 w-[253px] rounded-md bg-white">
      <Link
        className="mb-2 flex h-20 items-start justify-start rounded-md  md:h-12"
        href="/"
      >
        {/* <div className="w-32 text-blue md:w-40"> */}
          <InfoServices />
        {/* </div> */}
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <LogoutForm />
      </div>
    </div>
  );
}
