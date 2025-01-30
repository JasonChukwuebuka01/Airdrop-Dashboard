
import NavBar from "@/components/NavBar";




export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="h-screen flex">
      {/* Sidebar Navigation (Hidden on Mobile, Visible on Large Screens) */}
      <NavBar />

      {/* Main Content Area */}
      <main className="flex-1 bg-gray-100 w-[87%] h-full ">
        {children}
      </main>
    </div>
  );
}




