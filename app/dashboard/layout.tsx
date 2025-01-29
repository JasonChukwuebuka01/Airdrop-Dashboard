
import NavBar from "@/components/NavBar";
import Link from "next/link";



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="min-h-screen flex">
      {/* Sidebar Navigation (Hidden on Mobile, Visible on Large Screens) */}
      <NavBar />

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-8 w-[87%]">
        {children}
      </div>
    </div>
  );
}




