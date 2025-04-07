// import SideNav from "@/ui/dashboard/sidenav";

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
//       <div className="w-full flex-none md:w-64">
//         <SideNav />
//       </div>
//       <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
//     </div>
//   );
// }


import Header from "@/ui/dashboard/header";
import SideNav from "@/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 mt-1 ">
        <SideNav />
      </div>

      {/* Main Content Area */}
      <div className="ml-64 flex flex-col flex-grow">
        {/* Fixed Header */}
        <div >
          <Header />
        </div>

        {/* Scrollable Content Area */}
        <div className="mt-2 ml-2 p-6 overflow-y-auto flex-grow bg-gray-100 rounded-2xl shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
}